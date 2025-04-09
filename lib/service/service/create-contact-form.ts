import { API_ENDPOINT } from "@/lib/config";
import { PROJECT_ID } from "@/lib/config/env";
import { UserSessionProps } from "@/lib/types";
import { generateUniqueId } from "@/lib/utils";
// import detect from "detect.js";

export async function createContactForm(
  formData: Record<string, any>,
  options: { locale: "en"; theme?: string }
) {
  try {
    // const deviceInfo = detect.parse(navigator.userAgent);

    const session: UserSessionProps = {
      // device: deviceInfo.device?.type,
      // browser: deviceInfo.browser?.name,
      // userAgent: deviceInfo.source,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: options.locale,
      theme: options.theme,
    };

    const contactFormData = {
      ...formData,
      _id: generateUniqueId(),
      session,
      origin: PROJECT_ID,
    };

    const response = await fetch(
      `${API_ENDPOINT}/common/${PROJECT_ID}/contact-form`,
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
