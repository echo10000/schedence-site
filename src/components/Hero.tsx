import React from "react";
import Link from "next/link";
import { TimetablePreview } from "./TimetablePreview";
import { ArrowRight, ArrowUpRight, Calendar, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      {/* Background grid accent (subtle, restrained) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#1e3a8a 1px, transparent 1px), radial-gradient(#1e3a8a 1px, #f8fafc 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subhead Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200/80 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Higher Education Timetable & Workload Planning</span>
          <span className="text-slate-400">•</span>
          <span className="text-blue-900 font-semibold">Early Access 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.12]">
          Academic scheduling without the{" "}
          <span className="text-blue-700 underline decoration-blue-200 underline-offset-4 decoration-2">
            spreadsheet chaos
          </span>
          .
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Schedence helps colleges and universities build conflict-aware faculty schedules, balance teaching workloads, manage room constraints, and make complex scheduling decisions easier to understand.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span>Explore Schedence</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="mailto:echo@schedence.xyz?subject=Schedence%20Early%20Access"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 hover:text-blue-700 border border-slate-300 rounded-xl shadow-2xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span>Join Early Access</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" aria-hidden="true" />
          </a>
        </div>

        {/* Illustrative Timetable / Workload Visual */}
        <div className="mt-14 sm:mt-18">
          <TimetablePreview />
        </div>
      </div>
    </section>
  );
};
