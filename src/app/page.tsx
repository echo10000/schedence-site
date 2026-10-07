import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { Pillars } from "@/components/sections/pillars";
import { ClaudeAssistanceSection } from "@/components/ClaudeAssistanceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AboutSection } from "@/components/AboutSection";
import { EarlyAccessSection } from "@/components/EarlyAccessSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. Product / Pillars */}
        <Pillars />

        {/* 5. AI / Claude Section */}
        <ClaudeAssistanceSection />

        {/* 6. How It Works */}
        <HowItWorksSection />

        {/* 7. About */}
        <AboutSection />

        {/* 8. Early Access / Contact */}
        <EarlyAccessSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
