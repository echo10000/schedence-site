import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Schedence",
  description: "Terms of Service governing the use of the Schedence website and institutional demonstrations.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-page text-ink">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[14px] font-medium text-brand hover:text-brand-hover transition-colors gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1 py-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Schedence Home</span>
          </Link>
        </div>

        <div className="space-y-4 pb-8 border-b border-line">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-[0.08em] bg-brand-subtle text-brand border border-brand-line">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-ink">
            Terms of Service
          </h1>
          <p className="text-[13px] text-muted font-mono">
            Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>

        <div className="mt-8 space-y-8 text-[15px] leading-[1.7] text-body">
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (<strong className="text-ink">schedence.xyz</strong>), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please discontinue using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">2. Informational Purpose & Early Stage Project</h2>
            <p>
              Schedence is an early-stage academic scheduling software company. Content on this website—including feature descriptions, architecture diagrams, and interface previews—is provided for informational and preview purposes only. It does not constitute a binding commercial service level agreement or a warranty of completed software features prior to an executed institutional agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">3. Intellectual Property</h2>
            <p>
              All trademarks, copy, designs, visual assets, and code on schedence.xyz are the intellectual property of Schedence. You may not copy, reproduce, scrape, or distribute these materials without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">4. Demonstrations & Inquiries</h2>
            <p>
              Submitting an inquiry for a demonstration or quotation does not create a binding commercial obligation. Demonstration engagements are voluntary discussions to explore institutional scheduling requirements and evaluate algorithmic constraints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Schedence shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to access this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">6. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Service at any time. Changes become effective immediately upon posting to this website. Continued use of the website following changes constitutes acceptance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">7. Contact</h2>
            <p>
              For legal inquiries regarding these Terms of Service, please reach out via email:
            </p>
            <div className="p-4 rounded-lg bg-surface border border-line font-mono text-[13px] text-ink shadow-card">
              <div>Schedence Inquiries</div>
              <div>Domain: schedence.xyz</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:echo@schedence.xyz"
                  className="text-brand underline hover:text-brand-hover"
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
