"use server"

import { Resend } from "resend"
import WelcomeEmail from "@/components/emails/welcomeEmail"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Welcome to Our Newsletter! 🎓",
      react: WelcomeEmail({ email }),
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: "Failed to send welcome email" }
    }

    // Optional: save to your database
    // await db.subscribers.create({ data: { email } })

    return { success: true, data }
  } catch (err) {
    console.error("Newsletter subscription error:", err)
    return { success: false, error: "An unexpected error occurred" }
  }
}
