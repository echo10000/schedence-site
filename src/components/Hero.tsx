import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { btn } from '@/lib/ui'
import { TimetablePreview } from './TimetablePreview'

const SCOPE = [
  'Faculty workload',
  'Timetable generation',
  'Constraint management',
  'Conflict detection',
]

export const Hero: React.FC = () => {
  return (
    <section className="border-b border-line bg-page">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20 lg:pt-20">
        <div className="lg:col-span-5">
          <p className="text-[13px] font-medium text-brand">
            Academic scheduling and faculty workload software
          </p>
          <h1 className="mt-4 text-balance text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px] lg:text-[42px] xl:text-[46px]">
            Academic scheduling, built around your institution.
          </h1>
          <p className="mt-5 text-[16px] leading-[1.6] text-body sm:text-[17px]">
            Schedence generates timetables and manages faculty workloads against
            your institution&apos;s own rules, including availability, room
            constraints and designation load reductions. Conflicts are flagged
            before a schedule is published.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/?inquiry=demo#contact" className={btn('primary')}>
              Request a demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="#workflow" className={btn('secondary')}>
              See how it works
            </Link>
          </div>
          <p className="mt-5 text-[13px] text-muted">
            Designed for private, institution-specific deployments.
          </p>
        </div>

        <div className="lg:col-span-7">
          <TimetablePreview />
        </div>
      </div>

      <div className="border-t border-line bg-surface">
        <ul className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-3 px-5 py-5 sm:px-8 lg:grid-cols-4">
          {SCOPE.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-[1px] bg-brand/60" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
