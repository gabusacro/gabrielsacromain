-- Add phone and website to contact_leads for contact form
ALTER TABLE public.contact_leads
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS website text;
