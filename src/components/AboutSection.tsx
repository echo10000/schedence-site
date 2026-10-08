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
              Schedence is an early-stage software company focused on one problem:
              academic scheduling and faculty workload at colleges and universities.
              We build the scheduling technology and deploy it separately for each
              institution.
            </p>
            <p>
              Our approach is informed by real academic scheduling challenges.
              We design around the way institutions actually schedule, including room
              constraints, availability, designations and review, instead of asking
              institutions to adapt to a fixed template.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
