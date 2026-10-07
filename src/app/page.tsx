import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { Pillars } from "@/components/sections/pillars";
import { Deployment } from "@/components/sections/deployment";
import { Workflow } from "@/components/sections/workflow";
import { Explanations } from "@/components/sections/explanations";
import { Roles } from "@/components/sections/roles";
import { AboutSection } from "@/components/AboutSection";
import { RequestDemo } from "@/components/sections/request-demo";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-page text-ink overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero & Capability Strip */}
        <Hero />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. Product / Pillars */}
        <Pillars />

        {/* 5. Institutional Deployment */}
        <Deployment />

        {/* 6. Product Workflow */}
        <Workflow />

        {/* 7. AI-Assisted Scheduling Explanations */}
        <Explanations />

        {/* 8. For Colleges & Universities (Roles) */}
        <Roles />

        {/* 9. About Schedence */}
        <AboutSection />

        {/* 10. Request Demo / Quotation CTA */}
        <RequestDemo />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
