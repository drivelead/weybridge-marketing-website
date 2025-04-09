"use client";

import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { createContactForm } from "@/lib/service/service/create-contact-form";
import { sendNotifications } from "@/app/actions";

import PhoneInput from "./phone-input";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  company: z.string(),
  phone: z.string().min(1, "Phone number is required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  async function onSubmit(formData: FormData) {
    const { success, data, error } = await createContactForm(formData, {
      locale: "en",
      theme: "system",
    });

    if (!success || !data) {
      console.log("Error creating contact form", error);
      setError(
        `There was some error submitting your form. Our team have been notified. We will contact you shortly. Thanks.`
      );
      return;
    }

    setSuccess(
      "Thank you for submitting your form. We will contact you shortly. Thanks."
    );
    const notificationFormData = new FormData();
    notificationFormData.append("phone", formData.phone);

    const notificationResponse = await sendNotifications(notificationFormData);

    if (notificationResponse.success) {
      console.log("WhatsApp message sent.", notificationResponse);
    } else {
      console.log("WhatsApp message error.", notificationResponse.error);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
        <div className="space-y-1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder={"Enter your full name"}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...register("company")}
            placeholder={"Enter your company"}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone">{"Phone number"}</Label>
          <PhoneInput name="phone" />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full cursor-pointer">
          Submit
        </Button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
      </form>
    </FormProvider>
  );
}
