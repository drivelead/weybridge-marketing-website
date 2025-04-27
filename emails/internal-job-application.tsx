import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Hr,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

type Props = {
  fullName: string;
  whatsappNumber: string;
  email: string;
  currentLocation: string;
  cv: string;
  applicationSource: string;
  listingTitle: string;
};

export default function InternalJobApplication({
  fullName,
  whatsappNumber,
  email,
  currentLocation,
  cv,
  applicationSource,
  listingTitle,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New job application received on Weybridge</Preview>
      <Tailwind>
        <Body className="bg-[#f9f9f9] font-sans text-sm text-[#333]">
          <Container className="bg-white mx-auto my-10 p-8 rounded-lg shadow-md max-w-xl border border-[#e5e7eb]">
            {/* Logo Section */}
            {/* <Section className="text-center mb-6">
              <Img
                src="https://yourdomain.com/logo.png"
                alt="DriveLEAD Logo"
                width="120"
                height="auto"
                className="mx-auto"
              />
            </Section> */}

            {/* Title */}
            <Heading
              as="h2"
              className="text-lg font-semibold text-[#111827] mb-4 text-center"
            >
              New job application received on Weybridge
            </Heading>

            {/* Info Table */}
            <Section className="my-6">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-2 font-medium text-[#111827]">
                      Full Name
                    </td>
                    <td className="py-2">{fullName}</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-2 font-medium text-[#111827]">Email</td>
                    <td className="py-2">{email}</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-2 font-medium text-[#111827]">
                      Whatsapp Number
                    </td>
                    <td className="py-2">{whatsappNumber}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-[#111827]">
                      Current Location
                    </td>
                    <td className="py-2">{currentLocation}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-[#111827]">CV</td>
                    <td className="py-2">
                      <a
                        href={cv}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                      >
                        {cv}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-[#111827]">
                      Application Source
                    </td>
                    <td className="py-2">
                      {listingTitle} ({applicationSource})
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Hr className="my-6 border-[#e5e7eb]" />

            <Text className="text-xs text-center text-[#6b7280]">
              You’re receiving this email because a job application form was
              submitted on Weybridge.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

InternalJobApplication.PreviewProps = {
  fullName: "Alan Turing",
  listingTitle: "Full Stack Developer",
  applicationSource: "123456",
  cv: "https://drive.google.com/file/d/1234567890/view?usp=sharing",
  whatsappNumber: "1234567890",
  currentLocation: "California",
  email: "alan@turing.com",
} as Props;
