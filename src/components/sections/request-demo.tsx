import React from 'react'
import { btn } from '@/lib/ui'
import { Eyebrow } from '@/components/ui/eyebrow'

export const RequestDemo: React.FC = () => {
  return (
    <section id="contact" className="bg-page py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[960px] px-5 sm:px-8">
        <div className="rounded-xl border border-line bg-surface px-6 py-10 text-center shadow-card sm:px-12 sm:py-14">
          <div className="flex justify-center">
            <Eyebrow>Request a demo</Eyebrow>
          </div>
          <h2 className="mx-auto mt-4 max-w-[24ch] text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
            See Schedence on your institution&apos;s scheduling rules.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-body">
            Tell us how your institution schedules today. We&apos;ll walk through
            the platform and discuss what a deployment would involve.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:echo@schedence.xyz?subject=Schedence%20Demo%20Request"
              className={btn('primary')}
            >
              Request a demo
            </a>
            <a
              href="mailto:echo@schedence.xyz?subject=Schedence%20Quotation%20Request"
              className={btn('secondary')}
            >
              Request a quotation
            </a>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Direct inquiry: echo@schedence.xyz · We review institutional scheduling requirements directly.
          </p>
        </div>
      </div>
    </section>
  )
}
