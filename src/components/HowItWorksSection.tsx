import React from "react";
import {
  Database,
  UserCheck,
  Sliders,
  Cpu,
  CheckCircle,
  Share2,
  ArrowRight
} from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Database,
      title: "Set up academic data",
      description:
        "Import academic catalog terms, course sections, lecture hall inventories, seating capacities, and lab equipment profiles.",
    },
    {
      step: "02",
      icon: UserCheck,
      title: "Assign faculty",
      description:
        "Connect faculty members to eligible subjects, tenure tracks, administrative designations, and contractual teaching limits.",
    },
    {
      step: "03",
      icon: Sliders,
      title: "Define constraints",
      description:
        "Configure instructor availability windows, research release blocks, room prerequisites, and campus transit buffers.",
    },
    {
      step: "04",
      icon: Cpu,
      title: "Generate timetable",
      description:
        "Run the deterministic constraint solver to evaluate schedule permutations and generate a balanced timetable.",
    },
    {
      step: "05",
      icon: CheckCircle,
      title: "Resolve conflicts",
      description:
        "Review trade-off summaries, inspect constraint checks, and make granular adjustments with clear feedback.",
    },
    {
      step: "06",
      icon: Share2,
      title: "Publish",
      description:
        "Export verified timetables for distribution across academic departments, faculty, and campus offices.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
            Implementation Workflow
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From raw curriculum to verified timetable.
          </h3>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A structured, repeatable six-stage process designed to bring clarity and control to university scheduling operations.
          </p>
        </div>

        {/* 6-step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white border border-slate-200 rounded-xl p-6 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      Step {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-mono">
                  <span>Phase {index + 1} of 6</span>
                  {index < steps.length - 1 ? (
                    <span className="flex items-center text-slate-600">
                      Next <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  ) : (
                    <span className="text-slate-600 font-medium">Timetable Verified</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
