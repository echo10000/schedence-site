import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Schedence",
  description: "Privacy policy for Schedence academic scheduling services and website visitors.",
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-ink">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-muted font-mono">
            Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>

        <div className="mt-8 space-y-8 text-[15px] leading-[1.7] text-body">
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">1. Overview</h2>
            <p>
              Schedence (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating via{" "}
              <strong className="text-ink">schedence.xyz</strong>, develops higher-education scheduling and faculty workload management software. This Privacy Policy describes how we collect, use, and protect information when you visit our website or communicate with us regarding demonstrations, quotations, and institutional inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">2. Information We Collect</h2>
            <p>
              Because Schedence is currently an early-stage company without public user accounts on this marketing website, data collection is strictly minimal:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-ink">Institutional Inquiries &amp; Direct Communications:</strong> When you submit an inquiry through our website form or contact us via email at{" "}
                <a
                  href="mailto:echo@schedence.xyz"
                  className="text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  echo@schedence.xyz
                </a>
                , we collect the details you provide: your full name, institution or organization name, work email address, role or position (if provided), inquiry type, and the message describing your scheduling requirements.
              </li>
              <li>
                <strong className="text-ink">Technical Log Data:</strong> Like most web servers, our hosting infrastructure may temporarily process standard technical request information (such as IP addresses, browser user agent, and page timestamps) strictly for server diagnostics, security monitoring, and uptime maintenance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">3. How We Use Information</h2>
            <p>We use information provided through inquiries solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond directly to university administrators, registrars, and faculty members regarding demonstrations and quotations.</li>
              <li>Discuss institutional scheduling requirements, constraints, and software capabilities.</li>
              <li>Maintain the security, operational integrity, and performance of our website.</li>
            </ul>
            <p>
              We do <strong className="text-ink">not</strong> sell, rent, or monetize your contact information or communications with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">4. Academic &amp; Institutional Data</h2>
            <p>
              Any academic datasets, sample course catalogs, or faculty constraint documents shared during exploratory requirements and demonstration discussions are treated as strictly confidential and will never be shared publicly or used beyond evaluating scheduling solver requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">5. Data Retention &amp; Security</h2>
            <p>
              We retain correspondence only as long as necessary to facilitate ongoing communication with interested institutions. We implement reasonable physical, technical, and administrative safeguards to protect any received communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">6. Third-Party Infrastructure &amp; Email Delivery</h2>
            <p>
              Our website is hosted on modern cloud infrastructure (Vercel). Inquiries submitted through our website form are relayed to our team email using a transactional email delivery service (such as Resend). These providers process transmission data strictly to relay messages to echo@schedence.xyz in accordance with their privacy and security standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold text-ink">7. Contact Information</h2>
            <p>
              If you have any questions or privacy concerns regarding Schedence, please contact us directly:
            </p>
            <div className="p-4 rounded-lg bg-surface border border-line font-mono text-[13px] text-ink shadow-card">
              <div>Schedence</div>
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
