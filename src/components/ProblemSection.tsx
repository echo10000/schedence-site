import React from 'react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const PROBLEMS = [
  {
    title: "Rules live in spreadsheets and in people's heads.",
    description:
      'Availability, room limits and load policies are tracked separately and re-checked by hand each term.',
  },
  {
    title: 'Conflicts surface late.',
    description:
      'Double-booked rooms and overloaded faculty are often found only after a schedule has circulated.',
  },
  {
    title: 'Workload and timetable are reconciled separately.',
    description:
      'Teaching assignments, designations and load reductions are calculated apart from the schedule itself.',
  },
  {
    title: 'Changes are hard to explain.',
    description:
      'When a schedule shifts, staff reconstruct the reason from memory and email.',
  },
]

export const ProblemSection: React.FC = () => {
  return (
    <section className="border-b border-line bg-page py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, sticky on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Scheduling rules live in too many places.
            </h2>
            <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.65] text-body">
              When academic constraints are scattered across personal spreadsheets and email threads, keeping schedules compliant and conflicts in check becomes an uphill battle.
            </p>
          </div>

          {/* Right Column: Editorial hairline rows */}
          <div className="lg:col-span-7">
            <ul className="border-t border-line divide-y divide-line">
              {PROBLEMS.map((item) => (
                <li key={item.title} className="py-7 first:pt-0 last:pb-0">
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-body">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
