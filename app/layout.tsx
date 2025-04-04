import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

import { Lexend } from "next/font/google";
import Head from "next/head";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weybridge Ventures | Bridging Innovation & Excellence",
  description:
    "Weybridge Ventures is a British-UAE holding company investing in technology, design, and strategic ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Weybridge" />
      </Head>
      <GoogleTagManager gtmId="G-6NBMDNFNHT" />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
