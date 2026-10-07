import React from "react";
import { CheckCircle2, Clock, Users, Building, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

export const TimetablePreview: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden text-left">
      {/* Conceptual Header Banner */}
      <div className="bg-slate-900 text-slate-100 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-blue-500/20 text-blue-200 border border-blue-400/30 uppercase tracking-wide font-semibold">
            ILLUSTRATIVE PRODUCT CONCEPT
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Department Timetable & Faculty Planning (Conceptual Model)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Conflict checks
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline text-slate-300">Constraint-aware</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline text-slate-300">Workload planning</span>
        </div>
      </div>

      {/* Interface Subheader */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Sample Scope
          </span>
          <span className="text-sm font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
            Illustrative Department Model (Fictional)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-slate-500" />
            Room & Lab Constraints
          </span>
          <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-medium flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Faculty Allocation
          </span>
        </div>
      </div>

      {/* Main Grid + Workload Telemetry */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
        {/* Timetable Schedule Grid (8 cols on lg) */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Weekly Schedule Grid
            </h3>
            <span className="text-xs text-slate-500 font-mono">Mon – Fri / Core Hours</span>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
            {/* Days Header */}
            <div className="grid grid-cols-5 bg-slate-100 border-b border-slate-200 text-center text-xs font-semibold text-slate-700 py-2">
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
            </div>

            {/* Timetable Slots */}
            <div className="p-2 sm:p-3 space-y-2.5 text-xs">
              {/* Row 1: Morning 08:30 - 10:00 */}
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-2 bg-white p-2.5 rounded-lg border border-blue-200 shadow-2xs hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between text-[11px] text-blue-700 font-semibold mb-1">
                    <span>CS-301 Algorithms</span>
                    <span className="bg-blue-100 text-blue-800 px-1 rounded text-[10px]">Hall 102</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Prof. M. Vance</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>08:30 – 10:00</span>
                    <span className="text-slate-600">Room cap: 60</span>
                  </div>
                </div>

                <div className="col-span-1 bg-slate-100/70 p-2 rounded-lg border border-dashed border-slate-200 text-center flex flex-col justify-center text-slate-500 text-[11px]">
                  <span>Faculty Prep</span>
                  <span className="text-[10px] text-slate-400">Open Window</span>
                </div>

                <div className="col-span-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between text-[11px] text-slate-800 font-semibold mb-1">
                    <span>MATH-210 Linear Alg</span>
                    <span className="bg-slate-100 text-slate-700 px-1 rounded text-[10px]">Auditorium B</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Dr. R. Chen</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>08:30 – 10:00</span>
                    <span className="text-slate-600">Room cap: 90</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Midday 10:15 - 11:45 */}
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3 bg-white p-2.5 rounded-lg border border-emerald-200 shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between text-[11px] text-emerald-800 font-semibold mb-1">
                    <span>PHYS-104 Applied Optics Lab</span>
                    <span className="bg-emerald-100 text-emerald-800 px-1 rounded text-[10px]">Physics Lab 3</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Dr. S. Patel • Specialized Lab Equipment</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>10:15 – 11:45</span>
                    <span className="text-slate-600 font-medium">Lab equipment constraint</span>
                  </div>
                </div>

                <div className="col-span-2 bg-white p-2.5 rounded-lg border border-blue-200 shadow-2xs hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between text-[11px] text-blue-800 font-semibold mb-1">
                    <span>ENGR-220 Circuits</span>
                    <span className="bg-blue-50 text-blue-800 px-1 rounded text-[10px]">Hall 105</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Dr. K. Sato (Chair)</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>10:15 – 11:45</span>
                    <span className="text-slate-600">Room cap: 40</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Afternoon 13:00 - 14:30 */}
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-800 font-semibold mb-1">
                    <span>CS-402 Distributed Sys</span>
                    <span className="bg-slate-100 text-slate-700 px-1 rounded text-[10px]">Hall 102</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Prof. M. Vance</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>13:00 – 14:30</span>
                    <span className="text-slate-600 font-medium">Transit buffer applied</span>
                  </div>
                </div>

                <div className="col-span-3 bg-white p-2.5 rounded-lg border border-indigo-200 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] text-indigo-800 font-semibold mb-1">
                    <span>CS-205 Systems Programming</span>
                    <span className="bg-indigo-50 text-indigo-800 px-1 rounded text-[10px]">Compute Lab 1</span>
                  </div>
                  <div className="text-slate-600 font-medium truncate">Dr. R. Chen • 32 Workstations</div>
                  <div className="flex items-center justify-between mt-1.5 text-[10px] text-slate-600">
                    <span>13:00 – 14:30</span>
                    <span className="text-slate-600 font-medium">Capacity rule applied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workload Balancer Column (4 cols on lg) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              Faculty Workload Distribution
            </h3>
            <span className="text-xs text-slate-500 font-medium">Policy limits</span>
          </div>

          <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/50 space-y-3 text-xs">
            {/* Faculty 1 */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-800">Prof. M. Vance</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  18 / 18 Credits
                </span>
              </div>
              <div className="text-[11px] text-slate-500 mb-2">Professor • CS Dept</div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-600">
                <span>Sample limit: 18 hours</span>
                <span className="text-slate-600 font-medium">Within contract load</span>
              </div>
            </div>

            {/* Faculty 2 */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-800">Dr. R. Chen</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  15 / 15 Credits
                </span>
              </div>
              <div className="text-[11px] text-slate-500 mb-2">Associate Professor • Math/CS</div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-600">
                <span>Sample limit: 15 hours</span>
                <span className="text-slate-600 font-medium">Within contract load</span>
              </div>
            </div>

            {/* Faculty 3 (Chair with release load) */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-800">Dr. K. Sato</span>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  9 / 9 Teaching
                </span>
              </div>
              <div className="text-[11px] text-slate-500 mb-2">Department Chair • 6hr Admin Release</div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-600">
                <span>Designation Adjusted</span>
                <span className="text-slate-600 font-medium">Adjusted for admin duties</span>
              </div>
            </div>

            {/* Faculty 4 */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-800">Dr. S. Patel</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  9 / 12 Credits
                </span>
              </div>
              <div className="text-[11px] text-slate-500 mb-2">Adjunct Faculty • Lab Specialist</div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-600">
                <span>Within Contract Range</span>
                <span className="text-slate-600 font-medium">Unallocated hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Disclaimer Footer */}
      <div className="bg-slate-50/80 px-4 sm:px-6 py-2.5 border-t border-slate-200 text-center">
        <p className="text-[11px] text-slate-500 font-mono">
          * ILLUSTRATIVE PRODUCT CONCEPT — Fictional academic data representing planned constraint checks and workload planning capabilities. Schedence is in early development.
        </p>
      </div>
    </div>
  );
};
