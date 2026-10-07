import React from 'react'
import { Container } from '@/components/ui/container'

const STEPS = [
  {
    title: 'Configure',
    body: 'Set up rooms, terms, faculty availability and the rules your institution schedules by.',
  },
  {
    title: 'Generate',
    body: 'Produce a timetable that satisfies those constraints.',
  },
  {
    title: 'Resolve',
    body: 'Review detected conflicts and adjust assignments.',
  },
  {
    title: 'Review',
    body: 'Check faculty workloads, including designation load reductions.',
  },
  {
    title: 'Publish',
    body: 'Release the approved schedule.',
  },
]

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="bg-ink py-20 text-white lg:py-28">
      <Container>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
          How it works
        </p>
        <h2 className="mt-4 max-w-[22ch] text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[32px] lg:text-[38px]">
          From institutional rules to a published schedule.
        </h2>

        <ol className="relative mt-14 grid gap-10 border-l border-white/15 pl-8 lg:mt-16 lg:grid-cols-5 lg:gap-8 lg:border-l-0 lg:pl-0 lg:before:absolute lg:before:inset-x-0 lg:before:top-[5px] lg:before:h-px lg:before:bg-white/15">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative lg:pt-9">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-ink lg:left-0 lg:top-0"
              />
              <p className="font-mono text-[11px] tracking-[0.08em] text-slate-400">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-2 max-w-[28ch] text-[14px] leading-6 text-slate-300">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
