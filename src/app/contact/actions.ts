"use server";

import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

const TO_EMAIL = "gabu.sacro@gmail.com";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  const email = (formData.get("email") as string)?.trim();
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!email) {
    return { ok: false, message: "Email is required." };
  }

  // Send email to your inbox
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (gmailUser && gmailPassword) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPassword },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to: TO_EMAIL,
        replyTo: email,
        subject: `Contact from ${name || "Someone"} - gabrielsacro.com`,
        text: [
          `Name: ${name || "—"}`,
          `Email: ${email}`,
          `Phone: ${phone || "—"}`,
          ``,
          `Message:`,
          message || "—",
        ].join("\n"),
        html: [
          `<p><strong>Name:</strong> ${name || "—"}</p>`,
          `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>`,
          `<p><strong>Phone:</strong> ${phone || "—"}</p>`,
          `<p><strong>Message:</strong></p><p>${(message || "—").replace(/\n/g, "<br>")}</p>`,
        ].join(""),
      });
    } catch (err) {
      console.error("Contact form email error:", err);
      return { ok: false, message: "Failed to send. Please try again or email gabu.sacro@gmail.com directly." };
    }
  }

  // Optionally save to Supabase if configured
  if (supabase) {
    const { error } = await supabase.from("contact_leads").insert({
      email,
      name: name || null,
      phone: phone || null,
      message: message || null,
    });
    if (error) {
      return { ok: false, message: "Something went wrong. Please try again or email directly." };
    }
  }

  if (!gmailUser || !gmailPassword) {
    if (!supabase) {
      return {
        ok: true,
        message: "Thanks! (Configure GMAIL_USER and GMAIL_APP_PASSWORD in .env.local to receive emails.)",
      };
    }
  }

  return { ok: true, message: "Thanks! I'll get back to you soon." };
}
