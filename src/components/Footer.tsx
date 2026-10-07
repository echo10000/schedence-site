import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200/80">
          <div className="space-y-2">
            <Logo />
            <p className="text-sm text-slate-600 max-w-sm">
              Academic scheduling and faculty workload management.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
            <a
              href="/#product"
              className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Product
            </a>
            <a
              href="/#about"
              className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Contact
            </a>
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
          <div>
            © 2026 Schedence. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Domain: schedence.xyz</span>
            <span>•</span>
            <a
              href="mailto:echo@schedence.xyz"
              className="hover:text-blue-700 transition-colors underline underline-offset-2"
            >
              echo@schedence.xyz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
