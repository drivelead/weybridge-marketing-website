import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface NotionMagicLinkEmailProps {
  fullName: string;
  listingTitle: string;
}

export const JobApplication = ({
  fullName,
  listingTitle,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>{`Your interest have been noted for ${listingTitle}. We will get back to you soon.`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          {/* <Img
            src={`${baseUrl}/static/stripe-logo.png`}
            width="49"
            height="21"
            alt="Stripe"
          />
          <Hr style={hr} /> */}

          <Text style={paragraph}>{`Hi ${fullName}, `}</Text>

          <Text style={paragraph}>
            {`Your interest have been noted for ${listingTitle}. We will get back to you soon.`}
          </Text>

          <Text style={paragraph}>— Weybridge team</Text>
          <Hr style={hr} />
          {/* <Text style={footer}>
            Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
          </Text> */}
        </Section>
      </Container>
    </Body>
  </Html>
);

JobApplication.PreviewProps = {
  fullName: "Alan Turing",
  listingTitle: "Full Stack Developer",
} as NotionMagicLinkEmailProps;

export default JobApplication;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
