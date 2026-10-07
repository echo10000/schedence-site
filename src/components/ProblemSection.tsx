import React from "react";
import { AlertTriangle, Scale, Building2, Clock8 } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      title: "Scheduling Conflicts",
      description:
        "Overlapping course times, double-booked professors, and cohort collisions create friction across departments that static spreadsheets fail to prevent.",
    },
    {
      icon: Scale,
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      title: "Uneven Faculty Workloads",
      description:
        "Opaque tracking leads to some professors exceeding contractual teaching limits while others are under-allocated, complicating institutional equity and compliance.",
    },
    {
      icon: Building2,
      iconColor: "text-slate-700 bg-slate-100 border-slate-200",
      title: "Room & Resource Constraints",
      description:
        "Matching specialized labs, seat capacities, audio-visual equipment, and campus transit gaps to courses requires balancing hundreds of intertwined variables.",
    },
    {
      icon: Clock8,
      iconColor: "text-rose-600 bg-rose-50 border-rose-200",
      title: "Hours Spent Manually Revising",
      description:
        "A single last-minute instructor adjustment often triggers a chain reaction of timetable changes, demanding weeks of manual spreadsheet recalculations every term.",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
            The Higher Ed Scheduling Dilemma
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic scheduling gets complicated fast.
          </h3>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Building an academic timetable means balancing faculty availability, teaching loads, room requirements, subject assignments, institutional policies, and hundreds of possible conflicts.
          </p>
        </div>

        {/* 4 Problem Breakdown Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center border mb-5 ${item.iconColor}`}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs font-mono text-slate-600 flex items-center justify-between">
                  <span>Factor 0{index + 1}</span>
                  <span className="text-slate-600 font-medium">Spreadsheet Friction</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
