import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weybridge Ventures | Bridging Innovation & Excellence",
  description: "Weybridge Ventures is a British-UAE holding company investing in technology, design, and strategic ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
