import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Projects />
      <Features />
      <CTA />
    </>
  );
}
