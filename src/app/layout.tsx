import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabrielsacromain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriel Sacro | Full-stack Developer & Designer",
    template: "%s | Gabriel Sacro",
  },
  description:
    "Full-stack developer & designer. Ship products that are fast, beautiful, and built with industry best practices. Portfolio, projects, and contact.",
  keywords: ["Gabriel Sacro", "full-stack developer", "web designer", "portfolio", "Next.js", "React", "Siargao", "prop trading"],
  authors: [{ name: "Gabriel Sacro", url: siteUrl }],
  creator: "Gabriel Sacro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gabriel Sacro Portfolio",
    title: "Gabriel Sacro | Full-stack Developer & Designer",
    description: "Full-stack developer & designer. Ship products that are fast, beautiful, and built with industry best practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Sacro | Full-stack Developer & Designer",
    description: "Full-stack developer & designer. Ship products that are fast, beautiful, and built with industry best practices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Sacro",
  url: siteUrl,
  jobTitle: "Full-stack Developer & Designer",
  description: "Full-stack developer & designer. Ship products that are fast, beautiful, and built with industry best practices.",
  sameAs: [
    "https://twitter.com/gabrielsacro",
    "https://www.linkedin.com/in/gabrielsacro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
