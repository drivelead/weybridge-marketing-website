import { JSX } from "react";
import { Resend } from "resend";

import { RESEND_API_KEY } from "@/lib/config/env";
import { RESEND_FROM_EMAIL } from "@/lib/config/constants";

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(RESEND_API_KEY);

/***
 * Send an email
 * @param email
 * @param meta
 * @param body
 * @returns {Promise<{success: boolean, error: any, data: any}>}
 */

export async function sendEmail(
  email: string,
  meta: {
    subject: string;
  },
  body: { react?: JSX.Element; html?: string },
  attachments?: { path: string; filename: string }[]
) {
  try {
    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [email],
      subject: meta.subject,
      react: body.react || undefined,
      html: body.html || undefined,
      attachments: attachments ?? [],
    });

    if (error) {
      console.log(error);
      return { success: false, error: error, data: null };
    }

    return { success: true, error: null, data: data };
  } catch (error) {
    return { success: false, error: error, data: null };
  }
}
