import React from "react";
import {
  CalendarDays,
  UserCheck,
  ShieldAlert,
  Building,
  Clock,
  Award,
  Cpu,
  CheckCircle2
} from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: CalendarDays,
      title: "Automated Timetable Generation",
      description:
        "Deterministic algorithms designed to synthesize conflict-aware lecture and lab timetable candidates, eliminating weeks of manual spreadsheet iteration.",
      category: "Core Engine",
    },
    {
      icon: UserCheck,
      title: "Faculty Workload Management",
      description:
        "Real-time tracking of teaching credits, contact hours, and prep loads ensures equitable allocation and contract compliance.",
      category: "Faculty Planning",
    },
    {
      icon: ShieldAlert,
      title: "Conflict Detection",
      description:
        "Continuous constraint validation spots double-booked instructors, room overlaps, and student cohort collisions instantly.",
      category: "Constraint Engine",
    },
    {
      icon: Building,
      title: "Room & Subject Constraints",
      description:
        "Matches seating capacities, specialized lab infrastructure, campus building transit, and subject requirements precisely.",
      category: "Facilities",
    },
    {
      icon: Clock,
      title: "Faculty Availability",
      description:
        "Respects teaching preferences, research release days, sabbaticals, and adjunct availability windows without manual cross-checking.",
      category: "Preferences",
    },
    {
      icon: Award,
      title: "Designation Load Adjustments",
      description:
        "Automatically offsets teaching loads for department chairs, research directors, and administrative appointments.",
      category: "Institutional Policy",
    },
    {
      icon: Cpu,
      title: "Scheduling Intelligence",
      description:
        "Specialized academic heuristic modeling balances institutional policy rules with faculty preferences and student progression needs.",
      category: "Algorithm",
    },
  ];

  return (
    <section id="product" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
            Product Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built around the realities of academic scheduling.
          </h3>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Every feature is calibrated for university registrars, deans, and academic departments to turn complex constraint matrices into transparent schedules.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isFeatured = idx === 0; // First item highlighted tastefully
            return (
              <div
                key={feature.title}
                className={`p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-white border-blue-300 shadow-sm ring-1 ring-blue-500/10 lg:col-span-1"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/70 text-blue-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                      {feature.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-emerald-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
                  <span>Constraint-Aware Policy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
