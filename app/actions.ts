"use server";

import { sendWhatsAppMessage } from "@/lib/service/service/send-whatsapp-message";

export async function sendNotifications(formData: FormData) {
  const phone = formData.get("phone") as string;

  const response = await sendWhatsAppMessage([phone], {
    type: "text",
    text: {
      preview_url: true,
      body: `Your interest have been noted. We will get back to you soon.`,
    },
  });

  return response;
}

import { API_ENDPOINT } from "@/lib/config";
import { PROJECT_ID } from "@/lib/config/env";
import { UserSessionProps } from "@/lib/types";
import { generateUniqueId } from "@/lib/utils";
import { sendEmail } from "@/lib/api/service/send-email";
import JobApplication from "@/emails/job-application";
import { INTERNAL_EMAIL_NOTIFICATIONS_EMAIL } from "@/lib/config/constants";
import InternalJobApplication from "@/emails/internal-job-application";

export async function createCareerApplication(formData: FormData) {
  const locale = formData.get("locale") as string;
  const theme = formData.get("theme") as string;
  const timezone = formData.get("timezone") as string;

  const fullName = formData.get("fullName") as string;
  const whatsappNumber = formData.get("whatsappNumber") as string;
  const email = formData.get("email") as string;
  const currentLocation = formData.get("currentLocation") as string;
  const cv = formData.get("cv") as string;

  try {
    const session: UserSessionProps = {
      timezone,
      locale,
      theme,
    };

    const contactFormData = {
      fullName,
      whatsappNumber,
      email,
      currentLocation,
      cv,
      _id: generateUniqueId(),
      session,
      origin: PROJECT_ID,
    };

    console.log("💡 contactFormData", contactFormData);

    const response = await fetch(
      `${API_ENDPOINT}/common/${PROJECT_ID}/job-application`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success || !data.data) {
      throw new Error(data.error.message, { cause: data.error });
    }

    return data;
  } catch (error: any) {
    console.log("Error creating contact form", error.message);

    return {
      success: false,
      error: error.cause,
      data: null,
    };
  }
}

export async function sendJobApplicationNotifications(formData: FormData) {
  let fullName = formData.get("fullName") as string;
  let whatsappNumber = formData.get("whatsappNumber") as string;
  let email = formData.get("email") as string;
  let currentLocation = formData.get("currentLocation") as string;
  let cv = formData.get("cv") as string;
  let applicationSource = formData.get("applicationSource") as string;
  let listingTitle = formData.get("listingTitle") as string;

  const userEmailResponse = await sendEmail(
    email,
    {
      subject: "Thank you for your message.",
    },
    {
      react: JobApplication({ fullName, listingTitle }),
    }
  );

  const internalEmailResponse = await sendEmail(
    INTERNAL_EMAIL_NOTIFICATIONS_EMAIL,
    {
      subject: "Form submitted on Weybridge",
    },
    {
      react: InternalJobApplication({
        fullName,
        whatsappNumber,
        email,
        currentLocation,
        cv,
        applicationSource,
        listingTitle,
      }),
    },
    [
      {
        path: cv,
        filename: `cv.pdf`,
      },
    ]
  );

  // const response = await sendWhatsAppMessage([phone], {
  //   type: "text",
  //   text: {
  //     preview_url: true,
  //     body: `Your interest have been noted. We will get back to you soon.`,
  //   },
  // });

  console.log("💡 userEmailResponse", userEmailResponse);
  console.log("💡 internalEmailResponse", internalEmailResponse);

  if (!userEmailResponse.success) {
    return {
      success: false,
      error: userEmailResponse.error,
    };
  }

  if (!internalEmailResponse.success) {
    return {
      success: false,
      error: internalEmailResponse.error,
    };
  }

  console.log("emailResponse", userEmailResponse);

  return {
    success: true,
    error: null,
    data: userEmailResponse.data,
  };
}
