import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  DoorOpen,
  Link2,
  SlidersHorizontal,
  UserCheck,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const CONFIG = [
  { icon: CalendarDays, label: 'Academic calendar and terms' },
  { icon: DoorOpen, label: 'Room types and specializations' },
  { icon: Link2, label: 'Subject-room constraints' },
  { icon: Clock, label: 'Faculty availability' },
  { icon: SlidersHorizontal, label: 'Workload and designation rules' },
  { icon: UserCheck, label: 'Review and publication roles' },
]

export const Deployment: React.FC = () => {
  return (
    <section id="deployment" className="border-y border-line bg-surface py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Diagram: left on desktop, below text on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-6" aria-hidden="true">
            <div className="rounded-xl border border-line bg-page p-5 sm:p-7">
              <div className="rounded-lg border border-line bg-surface p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    Schedence platform architecture
                  </p>
                  <span className="rounded bg-brand-subtle px-2 py-0.5 font-mono text-[10px] font-medium text-brand">
                    Core solver
                  </span>
                </div>
                <p className="mt-2 text-[15px] font-medium text-ink">
                  Scheduling engine, constraint management, conflict detection
                </p>
              </div>

              {/* Branching tree connector */}
              <div className="relative mx-auto h-8 w-full max-w-[340px]">
                <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-line-strong" />
                <div className="absolute left-1/4 right-1/4 top-4 h-px bg-line-strong" />
                <div className="absolute left-1/4 top-4 h-4 w-px bg-line-strong" />
                <div className="absolute right-1/4 top-4 h-4 w-px bg-line-strong" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-line bg-brand-subtle p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand">
                      Dedicated deployment
                    </p>
                    <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-ink">Your institution</p>
                  <p className="mt-1.5 text-[13px] leading-5 text-body">
                    Configured around your institution&apos;s academic calendar, room catalog, faculty availability, and workload policies.
                  </p>
                </div>
                <div className="rounded-lg border border-dashed border-line-strong bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                      Independent deployments
                    </p>
                    <span className="h-2 w-2 rounded-full bg-muted/40" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-body">Other institutions</p>
                  <p className="mt-1.5 text-[13px] leading-5 text-muted">
                    Each configured independently with its own scheduling rules, designation reductions, and review workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <Eyebrow>Institutional deployment</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Configured to how your institution schedules.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.65] text-body">
              Every institution has its own rules: which rooms support which
              subjects, how designations reduce teaching load, who reviews a
              schedule before it is published. Schedence is designed to be deployed separately
              for each institution and configured around those rules.
            </p>

            <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {CONFIG.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-3 border-b border-line py-3.5 text-[14px] text-ink"
                >
                  <c.icon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {c.label}
                </li>
              ))}
            </ul>

            <Link
              href="/?inquiry=requirements#contact"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand hover:text-brand-hover"
            >
              Discuss your requirements
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
