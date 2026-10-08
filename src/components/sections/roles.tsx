import React from 'react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

const ROLES = [
  {
    role: 'Registrars',
    summary: 'One place to confirm that published timetables satisfy institutional rules.',
  },
  {
    role: 'Deans & Department Chairs',
    summary: 'Visibility into faculty workload and designation load reductions.',
  },
  {
    role: 'Scheduling Staff',
    summary: 'Generate, check and adjust timetables without rebuilding them by hand.',
  },
  {
    role: 'Administrators',
    summary: 'Review specific conflicts and decide how to resolve them.',
  },
]

export const Roles: React.FC = () => {
  return (
    <section className="border-y border-line bg-surface py-16 lg:py-24">
      <Container>
        <div className="max-w-[34rem]">
          <Eyebrow>For colleges and universities</Eyebrow>
          <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
            Built for the people who manage the schedule.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {ROLES.map((r) => (
            <div key={r.role} className="border-t border-line pt-6">
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">
                {r.role}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-body">
                {r.summary}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
