import React from 'react'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-page py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>About Schedence</Eyebrow>
            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              A focused company building scheduling software for higher education.
            </h2>
          </div>

          <div className="space-y-5 text-[17px] leading-[1.65] text-body lg:col-span-7 lg:pt-9 lg:text-[18px]">
            <p>
              Schedence is an early-stage software company focused on solving a single, persistent problem: academic scheduling and faculty workload in higher education.
            </p>
            <p>
              The platform grew directly from work on real academic scheduling challenges—balancing instructor availability, laboratory and room requirements, faculty designations, and timetable conflicts across departments. Instead of asking institutions to conform to a rigid template, we build configurable scheduling technology designed around each institution&apos;s own rules and review processes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
