"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { PhoneInput as IntPhoneInput } from "react-international-phone";

import {
  createCareerApplication,
  sendJobApplicationNotifications,
  sendNotifications,
} from "@/app/actions";
import { generateUniqueId, renameFile } from "@/lib/utils";
import { JobListing, PromiseReturn } from "@/lib/types";
import { createAsset } from "@/lib/api/service/create-asset";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import "react-international-phone/style.css";

type Props = {
  jobListing: JobListing;
};

// Zod validation schema
const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  whatsappNumber: z.string().min(1, "WhatsApp Number is required"),
  email: z.string().email("Invalid email address"),
  currentLocation: z.string().min(1, "Current Location is required"),
  cv: z
    .custom<File>((file) => file instanceof File, "CV is required")
    .refine(
      (file) =>
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Only PDF or Word documents are allowed"
    ),
  cap: z.string().optional(), // hidden captcha field - only filled by bots
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

type Status = "idle" | "uploading-file" | "submitting" | "success";

export default function JobApplicationForm({ jobListing }: Props) {
  const [error, setError] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState<number>(0);
  const [status, setStatus] = React.useState<Status>("idle");

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
      email: "",
      currentLocation: "",
      cap: "", // hidden cv field - only filled by bots
      acceptTerms: undefined,
      cv: undefined as any,
    },
  });

  async function getAWSS3SignedUrl(
    file: File,
    bucketDirectory: string = "uploads"
  ): Promise<{ url: string; fileUrl: string } | null> {
    try {
      const response = await axios.post("/api/aws/s3/sign", {
        name: file.name,
        type: file.type,
        bucketDirectory,
      });

      if (response.status !== 200) {
        throw new Error(
          response.data?.error?.message || "Error getting signed URL",
          {
            cause: response.data.error,
          }
        );
      }

      return response.data;
    } catch (error: any) {
      console.error("Error getting signed URL:", error.message, error?.reason);
      return null;
    }
  }

  async function uploadFileToS3(
    file: File,
    signedUrl: string,
    { safe = true }: { safe?: boolean }
  ): Promise<PromiseReturn> {
    try {
      const data = await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent?.total || 100)
          );
          setProgress(percentCompleted);
        },
      });

      if (data.status !== 200) {
        throw new Error("Error uploading file", { cause: data?.data });
      }

      return { success: true, data: data, error: null };
    } catch (error: any) {
      console.error(`Error uploading file ${file.name}:`, error);
      if (!safe) throw error;
      return { success: false, data: null, error: error };
    }
  }

  async function onSubmit(values: FormSchemaType) {
    if (values.cap) {
      return;
    }

    setStatus("submitting");

    const formData = new FormData();

    formData.append("fullName", values.fullName);
    formData.append("whatsappNumber", values.whatsappNumber);
    formData.append("email", values.email);
    formData.append("currentLocation", values.currentLocation);
    formData.append("applicationSource", jobListing.id);
    formData.append("listingTitle", jobListing.title);

    // upload CV to S3

    const cvFile = values.cv as File;
    const renamedCVFile = renameFile(cvFile);

    setStatus("uploading-file");

    const signedData = await getAWSS3SignedUrl(renamedCVFile);

    if (!signedData) {
      setError("Error submitting application. Please try again later.");
      setStatus("idle");
      form.reset();
      return;
    }

    // upload CV to S3
    const fileUploadResponse = await uploadFileToS3(
      renamedCVFile,
      signedData.url,
      {}
    );

    if (!fileUploadResponse.success) {
      setError("Error submitting application. Please try again later.");
      setStatus("idle");
      form.reset();
      return;
    }

    setStatus("submitting");

    // send notifications to user and internal team
    // append file url for emails attachments
    formData.append("cv", signedData.fileUrl);

    const notificationsResponse =
      await sendJobApplicationNotifications(formData);

    console.log("💡 notificationsResponse", notificationsResponse);

    // create asset document
    const assetResponse = await createAsset({
      _id: generateUniqueId(),
      url: signedData.fileUrl,
      originalName: cvFile.name,
      fileName: renamedCVFile.name,
      fileSize: cvFile.size,
      mimeType: cvFile.type,
    });

    if (!assetResponse.success) {
      setError("Error submitting application. Please try again later.");
      setStatus("idle");
      form.reset();
      return;
    }

    // append created CV asset id to form data
    formData.append("cv", assetResponse.data._id);

    // append extra fields
    formData.append("locale", "en");
    formData.append("theme", "system");
    formData.append(
      "timezone",
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );

    // create application
    const response = await createCareerApplication(formData);

    if (!response.success) {
      setError("Error submitting application. Please try again later.");
      setStatus("idle");
      form.reset();
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        id="job-capplication-form"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-[unset]">
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsappNumber"
          render={({ field: { value, onChange, onBlur, ref, name } }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-[unset]">
                WhatsApp Number
              </FormLabel>
              <FormControl>
                <IntPhoneInput
                  defaultCountry="ae"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  name={name}
                  countrySelectorStyleProps={{
                    buttonClassName: "px-1 rtl:!pe-1",
                  }}
                  inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-[unset]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Current Location */}
        <FormField
          control={form.control}
          name="currentLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-[unset]">
                Current Location
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your current location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CV Upload */}
        <FormField
          control={form.control}
          name="cv"
          render={({ field: { onChange, onBlur, ref, name } }) => (
            <FormItem>
              <FormLabel className="cursor-pointer">
                Upload CV (PDF or Word)
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  name={name}
                  onBlur={onBlur}
                  ref={ref}
                  onChange={(e) => onChange(e.target.files?.[0])}
                  className="cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms and Conditions */}
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox
                  id="acceptTerms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel htmlFor="acceptTerms" className="text-sm font-normal">
                I accept the terms and conditions
              </FormLabel>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Input type="hidden" {...form.register("cap")} />

        <Button
          type="submit"
          disabled={status === "submitting" || status === "uploading-file"}
          className="w-full"
        >
          {status === "submitting" ? "Submitting..." : "Submit Application"}
        </Button>

        <div className="text-center">
          {status === "uploading-file" && progress ? (
            <p className="text-sm text-gray-500">Uploading CV: {progress}%</p>
          ) : (
            ""
          )}

          {status === "success" && (
            <p className="text-green-500">
              Application Submitted Successfully!
            </p>
          )}

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </Form>
  );
}
