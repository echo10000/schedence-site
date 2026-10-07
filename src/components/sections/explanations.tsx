import React from 'react'
import { Cog, Info, ListChecks, MessageSquareText, TriangleAlert, UserCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const STEPS = [
  {
    icon: ListChecks,
    title: 'Scheduling rules',
    note: 'Availability, rooms, load limits',
    tag: 'Rules-based',
    tone: 'base',
  },
  {
    icon: Cog,
    title: 'Constraint engine',
    note: 'Applies every rule to every assignment',
    tag: 'Rules-based',
    tone: 'base',
  },
  {
    icon: TriangleAlert,
    title: 'Conflict or result',
    note: 'A specific, checkable outcome',
    tag: 'Rules-based',
    tone: 'base',
  },
  {
    icon: MessageSquareText,
    title: 'Claude explanation',
    note: 'Plain-language summary of that outcome',
    tag: 'Language',
    tone: 'ai',
  },
  {
    icon: UserCheck,
    title: 'Administrator review',
    note: 'A person confirms or adjusts',
    tag: 'Human',
    tone: 'base',
  },
] as const

export const Explanations: React.FC = () => {
  return (
    <section id="explanations" className="bg-page py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>Understand</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Understand why a schedule changed.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-body">
              When a timetable changes or a conflict appears, administrators need
              more than an error code. Schedence&apos;s scheduling engine produces
              the result. Claude, Anthropic&apos;s AI model, helps turn that result
              into a plain-language explanation your staff can read, question and
              act on.
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-body">
              Claude does not generate or alter timetables. Explanations are
              drafted from the engine&apos;s own output, and an administrator
              makes the decision.
            </p>
            <p className="mt-6 flex items-start gap-2 text-[13px] leading-5 text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Claude-assisted explanations are in development and are not yet part
              of production deployments.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-7">
              <ol>
                {STEPS.map((s) => (
                  <li
                    key={s.title}
                    className="relative flex items-center gap-4 pb-5 last:pb-0 after:absolute after:bottom-0 after:left-[17px] after:top-9 after:w-px after:bg-line-strong last:after:hidden"
                  >
                    <span
                      className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                        s.tone === 'ai'
                          ? 'border-brand-line bg-brand-subtle text-brand'
                          : 'border-line bg-surface text-ink'
                      }`}
                    >
                      <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-medium text-ink">{s.title}</p>
                      <p className="text-[13px] text-muted">{s.note}</p>
                    </div>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.08em] text-muted sm:block">
                      {s.tag}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="mt-4 rounded-lg border border-line bg-surface p-5 shadow-card">
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Sample explanation · illustrative
              </figcaption>
              <blockquote className="mt-3 text-[15px] leading-[1.7] text-ink">
                CS 301 can&apos;t be placed in Room 204 on Tuesday and Thursday at
                9:00. This subject requires a laboratory, and Room 204 is a lecture
                room. Two laboratory rooms are free at that time: LAB 1 and LAB 2.
              </blockquote>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Awaiting administrator review
              </p>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
