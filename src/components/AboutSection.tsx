import React from "react";
import { Compass, GraduationCap, Target, Terminal } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
            About Schedence
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for a difficult problem.
          </h3>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Schedence is an early-stage education technology project founded in 2026, focused on making academic scheduling and faculty workload planning easier for higher-education institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Project Focus & Philosophy */}
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-5">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Focus on Academic Realities
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed space-y-3">
                Higher-education scheduling is fundamentally distinct from corporate calendar management. Universities balance specialized course prerequisites, limited laboratory resources, adjunct contracts, and complex faculty governance rules.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                Schedence is architected to address these nuances directly through rigorous constraint modeling rather than generic appointment scheduling.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs font-mono text-slate-500">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Dedicated to Higher Education Administration</span>
            </div>
          </div>

          {/* Project Structure & Leadership */}
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mb-5">
                <Terminal className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Project Leadership
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Schedence is currently led by its Founder & Developer, combining deep software engineering with academic domain research to build dependable scheduling infrastructure.
              </p>

              {/* Founder Tag */}
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-2xs">
                <div className="text-base font-bold text-slate-900">
                  Founder & Developer
                </div>
                <div className="text-xs text-blue-700 font-medium mt-0.5">
                  Engineering & Product Architecture
                </div>
                <div className="text-xs text-slate-500 mt-2 font-mono">
                  Founded in 2026 • Early-stage EdTech
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2 text-xs font-mono text-slate-500">
              <Compass className="w-4 h-4 text-blue-700" />
              <span>Independent & Mission-Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
