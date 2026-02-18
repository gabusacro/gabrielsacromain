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
    description: "Prop trading firm website with home, careers, about us, and approach. Showcases the firm, its methodology, team culture, and opportunities for traders.",
    longDescription: "Corporate website for a leading proprietary trading firm. Features a strong home overview, careers page to attract and recruit talented traders, about us section for company story and culture, and approach page detailing the firm's trading methodology and risk management philosophy. Built for credibility, talent acquisition, and showcasing disciplined execution in prop trading.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2F?w=640",
    screenshots: [
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fcareers%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fabout-us%2F?w=800",
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fislacapital.com.ph%2Fapproach%2F?w=800",
    ],
    tags: ["Finance", "Prop Trading", "Risk", "Next generation website"],
    linkUrl: "https://islacapital.com.ph/",
    featured: true,
    sortOrder: 0,
  },
  {
    id: "scngmai-admin",
    slug: "scngmai-admin",
    title: "SCNGMAI with Admin Panel",
    description: "Admin panel with home dashboard, members information, and contact management. Streamlined for internal operations and oversight.",
    longDescription: "Internal admin dashboard designed for streamlined operations. Features a home overview for quick access, members information section for viewing and managing member data, and contact section for handling inquiries. Built for efficient day-to-day oversight, reporting, and team coordination.",
    imageUrl: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fscngmai-admin-panel.vercel.app%2F?w=640",
    screenshots: [
      "/screenshots/scngmai/main.png",
      "/screenshots/scngmai/members.png",
      "/screenshots/scngmai/contact.png",
    ],
    tags: ["Admin", "Dashboard", "Operations", "Next generation website"],
    linkUrl: "https://scngmai-admin-panel.vercel.app/",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Modern Portfolio",
    description: "Professional portfolio with a clean home, projects showcase, about section, and contact. Highlights your work and makes it easy for clients to reach out.",
    longDescription: "Modern portfolio site built for professionals. Features a clean, streamlined home that makes a strong first impression, a dedicated projects page to showcase your best work, an about section to tell your story and build trust, and a contact section so clients can reach out easily. Designed for clarity, speed, and professional presentation.",
    imageUrl: "/screenshots/portfolio/Main.png",
    screenshots: [
      "/screenshots/portfolio/Main.png",
      "/screenshots/portfolio/Projects.png",
      "/screenshots/portfolio/About.png",
      "/screenshots/portfolio/Contact.png",
    ],
    tags: ["Portfolio", "Next generation website"],
    linkUrl: "https://gabriel-sacro-portfolio-git-vercel-rea-7a3129-kuyagabs-projects.vercel.app/",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "kuyagab-siargao",
    slug: "kuyagab-siargao",
    title: "Kuya Gab Siargao",
    description: "Travel and tours website for Siargao Island. Browse tour packages, view real-time weather, read traveler testimonials, and explore memories from past trips. Book island hopping, surfing lessons, and drone photography with Kuya Gab.",
    longDescription: "Full-featured travel and tours website for Siargao Island. Includes a services catalog, multiple tour packages for island hopping and adventures, live weather so travelers can plan ahead, client testimonials for social proof, and a memories gallery from past trips. Helps visitors discover and book island hopping, surfing lessons, drone photography, airport transfers, and more with a trusted local guide.",
    imageUrl: "/screenshots/kuyagab/Main.jpg",
    screenshots: [
      "/screenshots/kuyagab/Main.jpg",
      "/screenshots/kuyagab/Services.png",
      "/screenshots/kuyagab/Services%202.png",
      "/screenshots/kuyagab/Tour%201.png",
      "/screenshots/kuyagab/Tour%202.png",
      "/screenshots/kuyagab/Memories.png",
      "/screenshots/kuyagab/Testimonials.png",
      "/screenshots/kuyagab/Weather%20Feature.png",
      "/screenshots/kuyagab/Footer.png",
    ],
    tags: ["Travel", "Tours", "Siargao", "Next generation website"],
    linkUrl: "https://kuyagabsiargao.vercel.app/",
    featured: true,
    sortOrder: 3,
  },
  {
    id: "siargao-island",
    slug: "siargao-island",
    title: "Community Hub Website",
    description: "A community website where visitors to places like Siargao Island can share memorable photos with descriptions and uploader names. Shows where each photo was taken and highlights the best of the area. Perfect for travelers and locals.",
    longDescription: "Community hub website where visitors to destinations like Siargao Island can share memorable photos with descriptions, uploader names, and location. Features rates, upload functionality, weather, and a curated view of the best spots. Perfect for travelers and locals to discover and showcase what makes each area special.",
    imageUrl: "/screenshots/siargao/Main.png",
    screenshots: [
      "/screenshots/siargao/Main.png",
      "/screenshots/siargao/rates.png",
      "/screenshots/siargao/upload.png",
      "/screenshots/siargao/Weather%20Feature.png",
      "/screenshots/siargao/footer.png",
    ],
    tags: ["Travel", "Siargao", "Next generation website"],
    linkUrl: "https://siargaoisland.vercel.app/",
    featured: true,
    sortOrder: 4,
  },
  {
    id: "travelasiargao",
    slug: "travelasiargao",
    title: "Travela Siargao",
    description: "A modern ferry booking platform — featuring online reservations, GCash payments, QR-code e-tickets, and real-time schedules. Built to replace manual bookings with a fast, all-in-one digital experience.",
    longDescription: "Travela Siargao booking site. Daily ferries Siargao–Surigao and Dinagat–Surigao. Easy online booking, e-ticket with QR code, senior and PWD discounts. Schedule, attractions, and weather in one place.",
    imageUrl: "/screenshots/travelasiargao/Home.png",
    screenshots: [
      "/screenshots/travelasiargao/Home.png",
      "/screenshots/travelasiargao/Booking.png",
      "/screenshots/travelasiargao/Admin%20Dashboard.png",
      "/screenshots/travelasiargao/Auto%20weather%20forecast.png",
      "/screenshots/travelasiargao/Manifest.png",
      "/screenshots/travelasiargao/Reports.png",
      "/screenshots/travelasiargao/Home%202.png",
      "/screenshots/travelasiargao/Footer.png",
    ],
    tags: ["Travel", "Siargao", "Ferry", "Booking", "Next generation website"],
    linkUrl: "https://travelasiargao.gabrielsacro.com/",
    featured: true,
    sortOrder: 5,
  },
];
