"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ContactFormModal } from "./ContactFormModal";
import { CONTACT_MODAL_EVENT } from "./ContactTrigger";

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(CONTACT_MODAL_EVENT, handler);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handler);
  }, []);

  return (
    <>
      {children}
      <ContactFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
