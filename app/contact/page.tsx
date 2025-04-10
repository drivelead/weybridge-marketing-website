import React from "react";
import ContactForm from "@/components/pages/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Weybridge Ventures",
  description: "Contact Us | Weybridge Ventures",
};

export default function Contact() {
  return (
    <main>
      <div className="pt-24 pb-24 bg-white">
        <section className="mx-auto max-w-xl px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
