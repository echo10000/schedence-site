import React from 'react'
import { CalendarRange, Scale, SearchCheck, Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

type Point = { text: string; status?: string }

const PILLARS: {
  n: string
  name: string
  icon: typeof CalendarRange
  summary: string
  points: Point[]
}[] = [
  {
    n: '01',
    name: 'Generate',
    icon: CalendarRange,
    summary: "Build timetables from your institution's own scheduling rules.",
    points: [
      { text: 'Faculty availability and academic assignments' },
      { text: 'Room specialization and subject-room constraints' },
      { text: 'Constraint-based timetable generation' },
    ],
  },
  {
    n: '02',
    name: 'Manage',
    icon: Scale,
    summary: 'Keep faculty workloads and schedule changes under review.',
    points: [
      { text: 'Teaching load with administrative designation reductions' },
      { text: 'Conflict review and assignment adjustments' },
      { text: 'Schedule review and publication' },
    ],
  },
  {
    n: '03',
    name: 'Understand',
    icon: SearchCheck,
    summary: 'See exactly why a conflict occurred or a schedule changed.',
    points: [
      { text: 'Conflict detection with specific causes' },
      { text: 'Plain-language explanations of outcomes', status: 'In development' },
    ],
  },
]

export const Pillars: React.FC = () => {
  return (
    <section id="platform" className="bg-page py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              One scheduling system, built for three jobs.
            </h2>
          </div>
          <p className="max-w-[34rem] text-[17px] leading-[1.65] text-body lg:col-span-6 lg:col-start-7 lg:pt-9 lg:text-[18px]">
            Schedence keeps timetable generation, faculty workload and conflict
            review in a single system, so scheduling decisions are made against
            one set of rules.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:mt-16 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col border-t border-line p-6 first:border-t-0 lg:border-l lg:border-t-0 lg:p-8 lg:first:border-l-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-line bg-brand-subtle text-brand">
                  <p.icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span className="font-mono text-[11px] text-muted">{p.n}</span>
              </div>
              <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.01em] text-ink">
                {p.name}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-body">{p.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {p.points.map((pt) => (
                  <li key={pt.text} className="flex items-start gap-3 text-[14px] leading-6 text-ink">
                    <Check className="mt-[5px] h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                    <span>
                      {pt.text}
                      {pt.status && (
                        <span className="ml-2 inline-block rounded border border-line px-1.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                          {pt.status}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
