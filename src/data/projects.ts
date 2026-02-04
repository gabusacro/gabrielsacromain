export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  tags: string[];
  linkUrl?: string;
  repoUrl?: string;
  featured: boolean;
  sortOrder: number;
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: "kuyagab-siargao",
    slug: "kuyagab-siargao",
    title: "Kuya Gab Siargao",
    description: "Siargao Island Travel and Tours — island hopping, surfing lessons, drone photography, and authentic local experiences with Kuya Gab.",
    longDescription: "Local tours, airport transfers, surfing lessons, drone photography, island hopping. Book tours and message Kuya Gab. Built for travelers discovering Siargao.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkuyagabsiargao.vercel.app%2F?w=640",
    tags: ["Next.js", "Travel", "Tours", "Siargao"],
    linkUrl: "https://kuyagabsiargao.vercel.app/",
    featured: true,
    sortOrder: -1,
  },
  {
    id: "isla-capital",
    slug: "isla-capital",
    title: "Isla Capital",
    description: "Proprietary trading firm — prop trading, smarter. Guiding traders, managing risk, and maximizing performance with disciplined execution.",
    longDescription: "Leading prop trading firm. Disciplined success, risk management, sustainable profitability. Guiding top traders, structured risk management, performance oversight.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2F?w=640",
    tags: ["Next.js", "Finance", "Prop Trading", "Risk"],
    linkUrl: "https://islacapital.com.ph/",
    featured: true,
    sortOrder: 0,
  },
  {
    id: "1",
    slug: "enterprise-dashboard",
    title: "Enterprise Order Management System",
    description: "Full-stack SaaS for order lifecycle, inventory, and analytics. Built for scale with real-time sync.",
    longDescription: "A modern order management platform with role-based access, real-time inventory, and Stripe integration. Serves 50+ teams with sub-second latency.",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    linkUrl: "#",
    repoUrl: "#",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "2",
    slug: "design-system",
    title: "Design System & Component Library",
    description: "Accessible, themable component library with Figma sync and design tokens.",
    longDescription: "Design system used across 3 products. Includes React components, Storybook, and automated Figma–code sync.",
    tags: ["React", "Tailwind", "Figma", "Storybook"],
    linkUrl: "#",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "3",
    slug: "ml-experiments",
    title: "ML Experiments Platform",
    description: "Experiment tracking and model registry for ML teams. Reproducible runs and dashboards.",
    longDescription: "Internal tool for tracking PyTorch/TensorFlow experiments, hyperparameters, and metrics. Integrated with existing data pipelines.",
    tags: ["Python", "PyTorch", "PostgreSQL", "FastAPI"],
    repoUrl: "#",
    featured: false,
    sortOrder: 3,
  },
  {
    id: "4",
    slug: "mobile-wallet",
    title: "Mobile Wallet & Payments",
    description: "Cross-platform wallet app with biometric auth and instant P2P transfers.",
    longDescription: "React Native app with 100k+ downloads. Secure key storage, QR payments, and push notifications.",
    tags: ["React Native", "Node.js", "Biometrics"],
    linkUrl: "#",
    featured: true,
    sortOrder: 4,
  },
  {
    id: "5",
    slug: "api-gateway",
    title: "API Gateway & Rate Limiting",
    description: "High-performance gateway with auth, rate limits, and observability.",
    longDescription: "Custom gateway handling 10M+ req/day. JWT validation, per-tenant limits, and OpenTelemetry tracing.",
    tags: ["Go", "Redis", "OpenTelemetry"],
    repoUrl: "#",
    featured: false,
    sortOrder: 5,
  },
  {
    id: "6",
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time product analytics with funnels, retention, and custom events.",
    longDescription: "Internal analytics product with SQL-backed funnels, cohort retention, and export to BigQuery.",
    tags: ["Next.js", "ClickHouse", "d3.js"],
    linkUrl: "#",
    featured: false,
    sortOrder: 6,
  },
];
