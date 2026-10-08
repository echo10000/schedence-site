'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  InquiryType,
  INQUIRY_TYPES,
  InquiryFormData,
  ValidationErrors,
  validateInquiryInput,
} from '@/lib/inquiry-schema'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'

const INITIAL_FORM: InquiryFormData = {
  fullName: '',
  institution: '',
  email: '',
  role: '',
  inquiryType: 'demo',
  message: '',
  _hp: '',
}

function InquiryFormInner() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<InquiryFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string>('')

  // Preselect inquiry type from URL search param (e.g., /?inquiry=quote#contact)
  useEffect(() => {
    const inquiryParam = searchParams.get('inquiry')?.toLowerCase()
    if (inquiryParam) {
      if (inquiryParam === 'demo') {
        setFormData((prev) => ({ ...prev, inquiryType: 'demo' }))
      } else if (inquiryParam === 'quote' || inquiryParam === 'quotation') {
        setFormData((prev) => ({ ...prev, inquiryType: 'quote' }))
      } else if (inquiryParam === 'requirements') {
        setFormData((prev) => ({ ...prev, inquiryType: 'requirements' }))
      } else if (inquiryParam === 'general') {
        setFormData((prev) => ({ ...prev, inquiryType: 'general' }))
      }
    }
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof ValidationErrors]
        return next
      })
    }
  }

  const handleTypeSelect = (type: InquiryType) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }))
    if (errors.inquiryType) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.inquiryType
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return

    // 1. Client-side validation
    const clientValidation = validateInquiryInput(formData)
    if (!clientValidation.success) {
      setErrors(clientValidation.errors || {})
      setStatus('idle')
      return
    }

    setErrors({})
    setStatus('submitting')
    setServerMessage('')

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok || !json.success) {
        setStatus('error')
        if (json.errors) {
          setErrors(json.errors)
        }
        setServerMessage(
          json.message ||
            'Unable to deliver inquiry message at this time. Please email us directly at echo@schedence.xyz.'
        )
        return
      }

      // Genuine delivery success
      setStatus('success')
      setServerMessage(
        json.message ||
          'Your institutional inquiry has been received. We will follow up directly.'
      )
    } catch {
      setStatus('error')
      setServerMessage(
        'Network error. Please email your scheduling inquiry directly to echo@schedence.xyz.'
      )
    }
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
    setErrors({})
    setStatus('idle')
    setServerMessage('')
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-ok/30 bg-ok-subtle/50 p-6 text-left sm:p-8"
      >
        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-ok" aria-hidden="true" />
          <div className="space-y-3">
            <h3 className="text-[18px] font-semibold text-ink">
              Inquiry Received
            </h3>
            <p className="text-[15px] leading-relaxed text-body">
              {serverMessage}
            </p>
            <p className="text-[14px] text-body">
              A copy of your inquiry details has been dispatched to our team. For any immediate additions, you can reach us directly at{' '}
              <a
                href="mailto:echo@schedence.xyz"
                className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover"
              >
                echo@schedence.xyz
              </a>.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center rounded-md border border-line-strong bg-surface px-4 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-sunken focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left space-y-6">
      {/* Honeypot field (hidden from human users) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="_hp">Do not fill this field</label>
        <input
          type="text"
          id="_hp"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData._hp}
          onChange={handleChange}
        />
      </div>

      {/* Global Error Notice */}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-lg border border-warn/30 bg-warn-subtle p-4 text-[14px] text-ink"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-warn" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-medium text-ink">Inquiry could not be dispatched</p>
              <p className="text-body">{serverMessage}</p>
              <p className="pt-1">
                <a
                  href={`mailto:echo@schedence.xyz?subject=${encodeURIComponent(
                    `Schedence ${formData.inquiryType === 'quote' ? 'Quotation' : 'Demo'} Request`
                  )}`}
                  className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover"
                >
                  Click here to email echo@schedence.xyz directly
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Type Selector */}
      <div className="space-y-2">
        <label className="block text-[14px] font-medium text-ink">
          Inquiry Type <span className="text-warn">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {INQUIRY_TYPES.map((type) => {
            const isSelected = formData.inquiryType === type.id
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleTypeSelect(type.id)}
                className={`flex flex-col text-left rounded-lg border p-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isSelected
                    ? 'border-brand bg-brand-subtle text-ink ring-1 ring-brand'
                    : 'border-line bg-surface text-body hover:border-line-strong hover:bg-sunken/40'
                }`}
                aria-pressed={isSelected}
              >
                <span className={`text-[14px] font-semibold ${isSelected ? 'text-brand' : 'text-ink'}`}>
                  {type.label}
                </span>
                <span className="mt-1 text-[12px] leading-snug text-muted">
                  {type.description}
                </span>
              </button>
            )
          })}
        </div>
        {errors.inquiryType && (
          <p className="text-[13px] text-warn" role="alert">
            {errors.inquiryType}
          </p>
        )}
      </div>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-[14px] font-medium text-ink">
            Full Name <span className="text-warn">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            maxLength={100}
            disabled={status === 'submitting'}
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Dr. Eleanor Vance"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={`w-full rounded-md border px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              errors.fullName ? 'border-warn bg-warn-subtle/20' : 'border-line bg-surface hover:border-line-strong'
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-[13px] text-warn" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Institution / Organization */}
        <div className="space-y-1.5">
          <label htmlFor="institution" className="block text-[14px] font-medium text-ink">
            Institution / Organization <span className="text-warn">*</span>
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            required
            maxLength={150}
            disabled={status === 'submitting'}
            value={formData.institution}
            onChange={handleChange}
            placeholder="e.g. State University / College of Engineering"
            aria-invalid={!!errors.institution}
            aria-describedby={errors.institution ? 'institution-error' : undefined}
            className={`w-full rounded-md border px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              errors.institution ? 'border-warn bg-warn-subtle/20' : 'border-line bg-surface hover:border-line-strong'
            }`}
          />
          {errors.institution && (
            <p id="institution-error" className="text-[13px] text-warn" role="alert">
              {errors.institution}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-[14px] font-medium text-ink">
            Work Email <span className="text-warn">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={150}
            disabled={status === 'submitting'}
            value={formData.email}
            onChange={handleChange}
            placeholder="name@university.edu"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full rounded-md border px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
              errors.email ? 'border-warn bg-warn-subtle/20' : 'border-line bg-surface hover:border-line-strong'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-[13px] text-warn" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Role / Position */}
        <div className="space-y-1.5">
          <label htmlFor="role" className="block text-[14px] font-medium text-ink">
            Role / Position <span className="text-muted text-[13px] font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="role"
            name="role"
            maxLength={100}
            disabled={status === 'submitting'}
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Dean, Registrar, Department Chair"
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? 'role-error' : undefined}
            className="w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          />
          {errors.role && (
            <p id="role-error" className="text-[13px] text-warn" role="alert">
              {errors.role}
            </p>
          )}
        </div>
      </div>

      {/* Message / Scheduling Requirements */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-[14px] font-medium text-ink">
            Scheduling Requirements or Questions <span className="text-warn">*</span>
          </label>
          <span className="font-mono text-[11px] text-muted">
            {formData.message.length}/2000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          disabled={status === 'submitting'}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your institution's scheduling workflow, number of departments or instructors, laboratory/room constraints, or specific workload rules you need to accommodate..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full rounded-md border px-3.5 py-2.5 text-[15px] leading-relaxed text-ink placeholder:text-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
            errors.message ? 'border-warn bg-warn-subtle/20' : 'border-line bg-surface hover:border-line-strong'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-[13px] text-warn" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button & Direct Processing Note */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Sending inquiry...</span>
            </>
          ) : (
            <>
              <span>Send institutional inquiry</span>
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-[12px] text-muted">
          Inquiries are received by Schedence staff at <span className="font-mono text-ink">echo@schedence.xyz</span>.
        </p>
      </div>
    </form>
  )
}

function FormSkeleton() {
  return (
    <div className="animate-pulse space-y-4 py-6">
      <div className="h-10 bg-sunken rounded-md" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="h-10 bg-sunken rounded-md" />
        <div className="h-10 bg-sunken rounded-md" />
      </div>
      <div className="h-24 bg-sunken rounded-md" />
    </div>
  )
}

export const InstitutionalInquiryForm: React.FC = () => {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <InquiryFormInner />
    </Suspense>
  )
}
