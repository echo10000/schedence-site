import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Schedence",
  description: "Terms of Service governing the use of the Schedence website and early access program.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Schedence Home</span>
          </Link>
        </div>

        <div className="space-y-4 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 font-mono">
            Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (<strong>schedence.xyz</strong>), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please discontinue using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Informational Purpose & Early Stage Project</h2>
            <p>
              Schedence is an early-stage education technology project currently under development. All content on this website—including feature descriptions, architecture diagrams, and interface previews—is provided for informational and preview purposes only. It does not constitute a binding commercial service level agreement or a warranty of completed software features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, copy, designs, visual assets, and code on schedence.xyz are the intellectual property of Schedence and its founder. You may not copy, reproduce, scrape, or distribute these materials without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Early Access Participation</h2>
            <p>
              Submitting an inquiry for Early Access does not guarantee admittance to any future pilot program or commercial offering. Early access engagements are voluntary discussions to explore institutional scheduling requirements and evaluate algorithmic constraints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Schedence and its developer shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to access this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Service at any time. Changes become effective immediately upon posting to this website. Continued use of the website following changes constitutes acceptance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Contact</h2>
            <p>
              For legal inquiries regarding these Terms of Service, please reach out via email:
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm">
              <div>Schedence Inquiries</div>
              <div>Domain: schedence.xyz</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:echo@schedence.xyz"
                  className="text-blue-700 underline"
                >
                  echo@schedence.xyz
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
