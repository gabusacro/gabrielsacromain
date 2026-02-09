export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  screenshots?: string[];
  tags: string[];
  linkUrl?: string;
  repoUrl?: string;
  featured: boolean;
  sortOrder: number;
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: "isla-capital",
    slug: "isla-capital",
    title: "Isla Capital",
    description: "Proprietary trading firm — prop trading, smarter. Guiding traders, managing risk, and maximizing performance with disciplined execution.",
    longDescription: "Leading prop trading firm. Disciplined success, risk management, sustainable profitability.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2F?w=640",
    screenshots: [
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fcareers%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fabout-us%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fapproach%2F?w=800",
    ],
    tags: ["Finance", "Prop Trading", "Risk", "Do you need Next-generation website?"],
    linkUrl: "https://islacapital.com.ph/",
    featured: true,
    sortOrder: 0,
  },
  {
    id: "scngmai-admin",
    slug: "scngmai-admin",
    title: "SCNGMAI with Admin Panel",
    description: "Internal admin and operations dashboard for streamlined workflows and oversight.",
    longDescription: "Single-page admin experience for day-to-day operations and reporting.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fscngmai-admin-panel.vercel.app%2F?w=640",
    screenshots: [
      "/screenshots/scngmai/main.png",
      "/screenshots/scngmai/members.png",
      "/screenshots/scngmai/contact.png",
    ],
    tags: ["Admin", "Dashboard", "Operations", "Do you need Next-generation website?"],
    linkUrl: "https://scngmai-admin-panel.vercel.app/",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfolio",
    description: "A focused portfolio site that puts your work front and center with a clean, fast experience.",
    longDescription: "Portfolio showcasing projects and contact. Built for clarity and performance.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabrielsacro.vercel.app%2F?w=640",
    screenshots: [
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabrielsacro.vercel.app%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabrielsacro.vercel.app%2Fprojects?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabrielsacro.vercel.app%2F?w=800&vpw=1200",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgabrielsacro.vercel.app%2Fprojects?w=800&vpw=1200",
    ],
    tags: ["Portfolio", "Do you need Next-generation website?"],
    linkUrl: "https://gabrielsacro.vercel.app/",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "kuyagab-siargao",
    slug: "kuyagab-siargao",
    title: "Kuya Gab Siargao",
    description: "Siargao Island Travel and Tours — island hopping, surfing lessons, drone photography, and authentic local experiences with Kuya Gab.",
    longDescription: "Local tours, airport transfers, surfing lessons, drone photography, island hopping. Book tours and message Kuya Gab.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2F?w=640",
    screenshots: [
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2Ftours?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2Fcontact?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2Fabout?w=800",
    ],
    tags: ["Travel", "Tours", "Siargao", "Do you need Next-generation website?"],
    linkUrl: "https://kuyagabsiargao.vercel.app/",
    featured: true,
    sortOrder: 3,
  },
  {
    id: "siargao-island",
    slug: "siargao-island",
    title: "Siargao Island",
    description: "Discover Siargao — surf, lagoons, and island life. One place for inspiration and planning your trip.",
    longDescription: "Single-page guide to Siargao: surf spots, lagoons, and trip planning.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsiargao-island.vercel.app%2F?w=640",
    screenshots: [
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsiargao-island.vercel.app%2F?w=800",
    ],
    tags: ["Travel", "Siargao", "Do you need Next-generation website?"],
    linkUrl: "https://siargao-island.vercel.app/",
    featured: true,
    sortOrder: 4,
  },
];
