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
