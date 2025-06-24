import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface WelcomeEmailProps {
  email: string
}

export default function WelcomeEmail({ email }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to our newsletter - Your gateway to educational opportunities!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://yourdomain.com/logo.svg" // ✅ Use full URL
              width="200"
              height="50"
              alt="Company Logo"
              style={logo}
            />
            <Heading style={h1}>Welcome aboard! 🎉</Heading>
            <Text style={text}>Hi there,</Text>
            <Text style={text}>
              Thank you for subscribing to our newsletter! We're excited to have you join our community of students and professionals pursuing educational opportunities worldwide.
            </Text>
            <Text style={text}>Here's what you can expect from us:</Text>
            <Text style={list}>
              • 📚 Latest scholarship opportunities<br />
              • 🎓 University application deadlines<br />
              • ✈️ Study abroad tips and guides<br />
              • 💡 Career development resources<br />
              • 🌟 Success stories from our community
            </Text>
            <Text style={text}>
              We'll send you updates weekly, and you can unsubscribe at any time.
            </Text>
            <Section style={buttonContainer}>
              <Link
                style={button}
                href="https://yourdomain.com/scholarships"
              >
                Explore Scholarships
              </Link>
            </Section>
            <Text style={text}>
              If you have any questions, feel free to reply to this email or contact our support team.
            </Text>
            <Text style={text}>
              Best regards,<br />
              The Education Team
            </Text>
            <Text style={footer}>
              You're receiving this email because you subscribed to our newsletter with {email}.<br />
              <Link href="https://yourdomain.com/unsubscribe" style={link}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const box = {
  padding: "0 48px",
}

const logo = {
  margin: "0 auto",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  textAlign: "center" as const,
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
}

const list = {
  ...text,
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",
}

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
}

const button = {
  backgroundColor: "#f97316",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "32px",
}

const link = {
  color: "#2563eb",
  textDecoration: "underline",
}
