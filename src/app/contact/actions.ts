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

      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabrielsacro.com";

      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New message from portfolio</title>
</head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Roboto,sans-serif;background:#f1f5f9;min-height:100vh;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:32px 40px;text-align:center;">
              <img src="${siteUrl}/icon.png" alt="GS" width="48" height="48" style="display:inline-block;margin-bottom:16px;">
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">Gabriel Sacro</h1>
              <p style="margin:12px 0 0;color:#94a3b8;font-size:14px;">Full-stack Developer & Designer</p>
              <p style="margin:16px 0 0;color:#cbd5e1;font-size:13px;line-height:1.6;">
                <a href="tel:+639463657331" style="color:#22c55e;text-decoration:none;">+63 946 365 7331</a>
                &nbsp;·&nbsp;
                <a href="mailto:gabu.sacro@gmail.com" style="color:#22c55e;text-decoration:none;">gabu.sacro@gmail.com</a>
              </p>
              <p style="margin:8px 0 0;color:#94a3b8;font-size:12px;">Surigao City, Philippines</p>
            </td>
          </tr>
          <!-- Message Card -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 20px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">New message from your portfolio</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;width:90px;">Name</td>
                        <td style="padding:8px 0;color:#0f172a;font-size:15px;font-weight:600;">${(name || "—").replace(/</g, "&lt;")}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td>
                        <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#22c55e;font-size:15px;font-weight:600;text-decoration:none;">${email.replace(/</g, "&lt;")}</a></td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;color:#64748b;font-size:13px;">Phone</td>
                        <td style="padding:8px 0;"><a href="tel:${(phone || "").replace(/\D/g, "")}" style="color:#0f172a;font-size:15px;font-weight:600;text-decoration:none;">${(phone || "—").replace(/</g, "&lt;")}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 8px;color:#64748b;font-size:13px;">Message</p>
              <div style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;padding:20px;color:#0f172a;font-size:15px;line-height:1.6;">${(message || "—").replace(/</g, "&lt;").replace(/\n/g, "<br>")}</div>
              <p style="margin:24px 0 0;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your message to Gabriel Sacro" style="display:inline-block;background:#22c55e;color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${(name || "them").replace(/</g, "&lt;")}</a>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;color:#94a3b8;font-size:12px;">
              Sent from <a href="${siteUrl}" style="color:#22c55e;text-decoration:none;">gabrielsacro.com</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

      await transporter.sendMail({
        from: `"GS Portfolio" <${gmailUser}>`,
        to: TO_EMAIL,
        replyTo: email,
        subject: `EMAIL From GS Portfolio - gabrielsacro.com`,
        text: [
          `Name: ${name || "—"}`,
          `Email: ${email}`,
          `Phone: ${phone || "—"}`,
          ``,
          `Message:`,
          message || "—",
        ].join("\n"),
        html,
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
