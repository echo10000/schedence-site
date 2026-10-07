import React from "react";
import { Mail, ArrowUpRight, CheckCircle2, Building, HelpCircle } from "lucide-react";

export const EarlyAccessSection: React.FC = () => {
  const mailtoLink = "mailto:echo@schedence.xyz?subject=Schedence%20Early%20Access";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-5">
              <span>Early Access Program</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interested in Schedence?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Schedence is currently in early development. Universities, faculty members, and academic administrators interested in the project can get in touch.
            </p>

            {/* Direct Contact Button & Email */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mailtoLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Join Early Access</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
              </a>

              <a
                href="mailto:echo@schedence.xyz"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-blue-700 border border-slate-200 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>echo@schedence.xyz</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-600 font-mono">
              Inquiries typically receive a direct reply within 1-2 business days.
            </p>
          </div>

          {/* Value callouts for early institutions */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Shape Development
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Share institutional scheduling constraints to directly influence the solver roadmap.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                No Commitment Required
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discuss departmental workflows and explore upcoming prototypes with zero commercial obligation.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Confidential Dialogue
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Institutional inquiries and scheduling parameters remain strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
