import React from "react";
import { MessageSquare, Calculator, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const ClaudeAssistanceSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>Exploratory Technology • Under Active Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Building intelligent scheduling assistance with Claude
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Schedence is exploring Claude to help administrators understand scheduling conflicts, workload recommendations, and generated timetable decisions in natural language.
          </p>
        </div>

        {/* Two-Column Comparison / Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Clear Separation of Roles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Mathematical Constraint Engine
                  </h3>
                  <span className="text-xs font-mono text-emerald-800 font-semibold">
                    Core Scheduler
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Schedence is architected to perform timetable generation through mathematical and constraint-based scheduling, deterministically modeling room caps, blackout hours, and faculty credit limits.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Claude Natural Language Layer
                  </h3>
                  <span className="text-xs font-mono text-blue-800 font-semibold">
                    Exploratory Interface
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than forcing deans to decipher constraint matrices, Claude is being explored to explain tradeoffs, clarify slot assignments, and summarize workload distributions in conversational English.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-normal">
              <span className="font-semibold text-slate-800">Development Transparency:</span> Claude integration is an active research exploration to assist with result comprehension and is not yet completed. Timetable generation itself is designed around deterministic constraint-based algorithms.
            </div>
          </div>

          {/* Right Column: Clean Conceptual Query Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {/* Mockup Header */}
              <div className="bg-slate-900 text-slate-200 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    scheduling-assistant-exploration.log
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded border border-blue-700/50">
                  Concept Preview
                </span>
              </div>

              {/* Chat Interaction */}
              <div className="p-5 sm:p-6 space-y-4 text-sm bg-slate-50/40">
                {/* User Prompt */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    AD
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-2xs text-slate-800 max-w-xl">
                    <p className="font-semibold text-xs text-slate-500 mb-1">
                      Academic Dean • Inquiry
                    </p>
                    <p className="text-slate-800">
                      &quot;Why did the generator move CS-402 (Distributed Systems) from Tuesday morning to Thursday at 1:00 PM?&quot;
                    </p>
                  </div>
                </div>

                {/* Claude Answer */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    CL
                  </div>
                  <div className="bg-blue-50/70 border border-blue-200/90 rounded-lg p-4 shadow-2xs text-slate-800 max-w-xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-xs text-blue-900">
                        Claude Assistant (Concept Exploration)
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Constraint Interpretation
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      The constraint solver identified two policy violations with Tuesday 10:00 AM:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 pl-1">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          <strong>Campus Transit:</strong> Prof. Vance has an in-person lab ending at 9:55 AM in West Science Complex (violating the 20-minute inter-building transit policy).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          <strong>Capacity Fit:</strong> Hall 102 provides 60 seats for 55 enrolled students on Thursday, while Tuesday&apos;s available room capped at 40 seats.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-blue-200/70 flex items-center justify-between text-[11px] text-slate-600">
                      <span>Workload impact: 0 hours change</span>
                      <span className="text-slate-600 font-medium">Policy Rationale Explained</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="bg-white border-t border-slate-200 px-4 py-2.5 text-center text-xs text-slate-500">
                Aiming to provide natural-language reasoning behind automated timetable decisions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
