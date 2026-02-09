export type FeatureSlide = {
  title: string;
  content: string;
};

export type FeatureWithSlides = {
  title: string;
  description: string;
  icon?: string;
  iconKey?: "design" | "ship";
  slides: FeatureSlide[];
};

export const FEATURES_WITH_SLIDES: FeatureWithSlides[] = [
  {
    title: "Full-stack development",
    description: "From API design to pixel-perfect UIs. Next.js, React, Node, and modern tooling.",
    icon: "⌘",
    slides: [
      {
        title: "What it is",
        content:
          "Full-stack development means building both the frontend (what users see and click) and the backend (servers, APIs, databases). One person or team owns the full product—from the UI to the data layer.",
      },
      {
        title: "How it affects your website",
        content:
          "Your site can have real functionality: contact forms that send email, login and accounts, dynamic content from a database, and fast navigation. Everything stays consistent and under one roof instead of piecing together separate tools.",
      },
      {
        title: "How it works",
        content:
          "We use frameworks like Next.js for the UI and API routes, connect to a database or services (e.g. Supabase), and deploy on platforms like Vercel. Code, data, and hosting are aligned so features ship without surprises.",
      },
      {
        title: "Where you see it here",
        content:
          "Isla Capital, SCNGMAI with Admin Panel, Modern Portfolio, Kuya Gab Siargao, and Community Hub are all full-stack: they combine a polished frontend with forms, data, and deployment—built and maintained as one system.",
      },
    ],
  },
  {
    title: "Design systems",
    description: "Accessible components, design tokens, and consistent UX across products.",
    iconKey: "design",
    slides: [
      {
        title: "What it is",
        content:
          "A design system is a set of reusable components, colors, typography, and rules so every page and product looks and behaves the same. It’s the visual and interaction language of your brand and products.",
      },
      {
        title: "How it affects your website",
        content:
          "Visitors get a consistent look and feel, accessible buttons and forms, and a more professional experience. Updates in one place (e.g. a button style) apply across the whole site, so the site stays coherent as it grows.",
      },
      {
        title: "How it works",
        content:
          "We define design tokens (colors, spacing, type), build components (buttons, cards, modals), and document usage. This portfolio uses a simple system: CSS variables for theming and shared components so the dark theme and green accents stay consistent.",
      },
      {
        title: "Where you see it here",
        content:
          "This site, SCNGMAI Admin Panel, and Modern Portfolio all use a consistent approach: shared card styles, modals, and typography. The same patterns make it easier to add new sections and keep the experience unified.",
      },
    ],
  },
  {
    title: "Ship at scale",
    description: "Performance, security, and maintainability. Built for real users and teams.",
    iconKey: "ship",
    slides: [
      {
        title: "What it is",
        content:
          "Shipping at scale means building so the product stays fast, secure, and maintainable as traffic and features grow. It’s about structure, performance, and operations—not just the first version.",
      },
      {
        title: "How it affects your website",
        content:
          "Pages load quickly, work on different devices and networks, and stay secure. You can add more content and features without the site slowing down or becoming hard to change. Real users and future you both benefit.",
      },
      {
        title: "How it works",
        content:
          "We optimize assets (images, fonts), use caching and CDNs, choose scalable hosting (e.g. Vercel), and follow security and code-quality practices. The stack is chosen so it can grow with you instead of blocking you.",
      },
      {
        title: "Where you see it here",
        content:
          "Every project in this portfolio is built to deploy and scale: Vercel for hosting, optimized images and routing, and a clear structure so each site can handle more users and updates without a rewrite.",
      },
    ],
  },
];
