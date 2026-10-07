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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 font-mono">
            Effective Date: January 1, 2026 • Last Updated: 2026
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Overview</h2>
            <p>
              Schedence (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating via{" "}
              <strong>schedence.xyz</strong>, develops higher-education scheduling and faculty workload management software. This Privacy Policy describes how we collect, use, and protect information when you visit our website or communicate with us regarding early access and institutional inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              Because Schedence is currently an early-stage project without user registration or database accounts on this public marketing website, data collection is strictly minimal:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Direct Communications:</strong> When you contact us via email at{" "}
                <a
                  href="mailto:echo@schedence.xyz"
                  className="text-blue-700 underline underline-offset-2"
                >
                  echo@schedence.xyz
                </a>{" "}
                or request early access, we collect your name, institutional email address, university affiliation, and the contents of your message.
              </li>
              <li>
                <strong>Technical Log Data:</strong> Like most web servers, our hosting infrastructure may temporarily process standard technical request information (such as IP addresses, browser user agent, and page timestamps) strictly for server diagnostics, security monitoring, and uptime maintenance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Information</h2>
            <p>We use information provided through inquiries solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond directly to university administrators and faculty members regarding early access.</li>
              <li>Discuss institutional scheduling requirements, constraints, and software capabilities.</li>
              <li>Maintain the security, operational integrity, and performance of our website.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or monetize your contact information or communications with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Academic & Institutional Data</h2>
            <p>
              Any academic datasets, sample course catalogs, or faculty constraint documents shared during early-stage exploratory research and pilot discussions are treated as strictly confidential and will never be shared publicly or used beyond evaluating scheduling solver requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Data Retention & Security</h2>
            <p>
              We retain correspondence only as long as necessary to facilitate ongoing communication with interested institutions. We implement reasonable physical, technical, and administrative safeguards to protect any received communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Third-Party Hosting</h2>
            <p>
              Our website is hosted on modern cloud infrastructure (such as Vercel). These providers handle network traffic in compliance with industry-standard privacy and security protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Contact Information</h2>
            <p>
              If you have any questions or privacy concerns regarding Schedence, please contact us directly:
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm">
              <div>Schedence Project</div>
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
