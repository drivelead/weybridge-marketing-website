import { META_GRAPH_ENDPOINT } from "@/lib/config";
import { META_ACCESS_TOKEN } from "@/lib/config/env";

type Type = "text" | "interactive";

type Message = {
  type: Type;
  text?: MessageText;
  interactive?: MessageInteractive;
};

type MessageText = {
  preview_url: boolean;
  body: string;
};

type InteractiveType = "cta_url";

type MessageInteractive = {
  type: InteractiveType;
  header: {
    type: string;
    text: string;
  };
  body?: {
    type: string;
    text: string;
  };
  footer?: {
    type: string;
    text: string;
  };
  action: {
    name: string;
    parameters: {
      display_text: string;
      url: string;
    };
  };
};

export async function sendWhatsAppMessage(phones: string[], message: Message) {
  let _phones = phones.map((phone) => {
    return phone.replaceAll("+", "");
  });

  const phone = _phones[0];

  console.log("💡 phone", phone, META_ACCESS_TOKEN);

  try {
    const response = await fetch(META_GRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "https://www.facebook.com",
        Authorization: `Bearer ${META_ACCESS_TOKEN}`,
      },
      credentials: "include",
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone.replace("+", ""),
        recipient_type: "individual",
        ...message,
      }),
    });

    const data = await response.json();
    console.log("💡 data", data);

    if (!response.ok) {
      return { success: false, error: data.error, data: null };
    }

    console.log("No server error");

    return {
      success: true,
      error: null,
      data,
    };
  } catch (error) {
    console.log("Error sending WhatsApp message", error);
    return { success: false, error: error, data: null };
  }
}
