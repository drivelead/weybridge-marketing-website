"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { PhoneInput as IntPhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Checkbox } from "@/components/ui/checkbox";
import { createCareerApplication } from "@/app/actions";

type Props = {
  careerId: string;
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

export default function ApplicationForm({ careerId }: Props) {
  const [submitting, setSubmitting] = React.useState(false);

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

  async function onSubmit(values: FormSchemaType) {
    if (values.cap) {
      return;
    }

    const formData = new FormData();

    formData.append("fullName", values.fullName);
    formData.append("whatsappNumber", values.whatsappNumber);
    formData.append("email", values.email);
    formData.append("currentLocation", values.currentLocation);
    formData.append("applicationSource", careerId);

    // upload CV to S3

    formData.append("cv", "cv.pdf");

    // extra fields
    formData.append("locale", "en");
    formData.append("theme", "system");
    formData.append(
      "timezone",
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );

    setSubmitting(true);

    const response = await createCareerApplication(formData);

    console.log("💡 response", response);

    setSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

        <Button type="submit" disabled={submitting} className="w-full">
          {submitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
