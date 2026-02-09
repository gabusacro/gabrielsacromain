"use client";

export const CONTACT_MODAL_EVENT = "openContactModal";

export function ContactTrigger({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT));
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
