import React from 'react'
import { Eyebrow } from '@/components/ui/eyebrow'
import { InstitutionalInquiryForm } from '@/components/InstitutionalInquiryForm'
import { Mail } from 'lucide-react'

export const RequestDemo: React.FC = () => {
  return (
    <section id="contact" className="bg-page py-16 lg:py-20 scroll-mt-12">
      <div className="mx-auto w-full max-w-[880px] px-5 sm:px-8">
        <div className="rounded-xl border border-line bg-surface p-6 shadow-card sm:p-10 lg:p-12">
          {/* Section Header */}
          <div className="text-center pb-8 border-b border-line">
            <div className="flex justify-center">
              <Eyebrow>Institutional Inquiry</Eyebrow>
            </div>
            <h2 className="mx-auto mt-4 max-w-[26ch] text-balance text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[38px]">
              Request a demo or institutional quotation.
            </h2>
            <p className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-[1.65] text-body sm:text-[17px]">
              Tell us how your institution schedules today. We&apos;ll walk through
              the platform and discuss what a private deployment would involve.
            </p>
          </div>

          {/* Inquiry Form */}
          <div className="pt-8">
            <InstitutionalInquiryForm />
          </div>

          {/* Working Mailto Fallback Notice */}
          <div className="mt-10 border-t border-line pt-6 text-center text-[13px] text-muted">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <Mail className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                Prefer direct email?
              </span>
              <span>
                Contact{' '}
                <a
                  href="mailto:echo@schedence.xyz"
                  className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  echo@schedence.xyz
                </a>{' '}
                or launch a pre-addressed draft:
              </span>
              <span className="inline-flex gap-2 font-medium">
                <a
                  href="mailto:echo@schedence.xyz?subject=Schedence%20Demo%20Request"
                  className="text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Demo email
                </a>
                <span>·</span>
                <a
                  href="mailto:echo@schedence.xyz?subject=Schedence%20Quotation%20Request"
                  className="text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Quotation email
                </a>
              </span>
            </div>
            <p className="mt-2 text-[12px] text-muted">
              We review institutional scheduling requirements directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
