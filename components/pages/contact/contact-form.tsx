"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendNotifications } from "@/app/actions";
import { createContactForm } from "@/lib/service/service/create-contact-form";

import PhoneInput from "./phone-input";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LoadingDots from "@/components/app/loading-dots";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  company: z.string(),
  email: z.string().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  cp: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

type Props = {};

export default function ContactForm({}: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = form;

  async function onSubmit(formData: FormData) {
    if (formData.cp) return;
    setLoading(true);
    const { success, data, error } = await createContactForm(formData, {
      locale: "en",
      theme: "system",
    });

    if (!success || !data) {
      console.log("Error creating contact form", error);
      setError(
        `There was an error submitting your form. Our team have been notified. Thanks.`
      );
      setLoading(false);
      return;
    }

    let _formData = new FormData();
    _formData.append("phone", formData.phone);
    _formData.append("email", formData.email);
    _formData.append("fullName", formData.fullName);
    _formData.append("company", formData.company);

    const notificationResponse = await sendNotifications(_formData);

    if (notificationResponse.success) {
      console.log("Notifications sent.", notificationResponse);
      setSuccess(
        `Thank you for submitting your form. We will contact you shortly. Thanks.`
      );
    } else {
      console.log("Notifications error.", notificationResponse.error);
      setError(
        `There was an error submitting your form. Our team have been notified. Thanks.`
      );
    }

    setLoading(false);
    reset();
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
        <div className="space-y-1">
          <Label className="text-cyan-200" htmlFor="fullName">
            Name
          </Label>
          <Input
            className="bg-white"
            id="fullName"
            {...register("fullName")}
            placeholder={"Enter your name"}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-cyan-200" htmlFor="company">
            Company
          </Label>
          <Input
            className="bg-white"
            id="company"
            {...register("company")}
            placeholder={"Enter your company name"}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-cyan-200" htmlFor="phone">
            Phone
          </Label>
          <PhoneInput name="phone" />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-cyan-200" htmlFor="email">
            Email
          </Label>
          <Input
            className="bg-white"
            id="email"
            {...register("email")}
            placeholder={"Enter your email address"}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* captcha */}
        <Input id="cp" {...register("cp")} className="hidden" />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer"
        >
          {loading ? <LoadingDots className="bg-white" /> : "Submit"}
        </Button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
      </form>
    </FormProvider>
  );
}
