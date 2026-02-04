"use server";

import { supabase } from "@/lib/supabase";

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

  if (!supabase) {
    return {
      ok: true,
      message: "Thanks! Your message was received. (Form submissions require Supabase to be configured to store leads.)",
    };
  }

  const { error } = await supabase.from("contact_leads").insert({
    email,
    name: name || null,
    phone: phone || null,
    message: message || null,
  });

  if (error) {
    return { ok: false, message: "Something went wrong. Please try again or email directly." };
  }

  return { ok: true, message: "Thanks! I'll get back to you soon." };
}
