export type InquiryType = 'demo' | 'quote' | 'requirements' | 'general'

export const INQUIRY_TYPES: { id: InquiryType; label: string; description: string }[] = [
  {
    id: 'demo',
    label: 'Request a Demo',
    description: 'Walk through the platform and see how it handles your scheduling constraints.',
  },
  {
    id: 'quote',
    label: 'Request a Quotation',
    description: 'Receive an institutional deployment estimate tailored to your department or campus size.',
  },
  {
    id: 'requirements',
    label: 'Discuss Institutional Requirements',
    description: 'Share specific faculty workload rules, room constraints, or review workflows.',
  },
  {
    id: 'general',
    label: 'General Inquiry',
    description: 'Ask questions about Schedence capabilities, architecture, or roadmap.',
  },
]

export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  demo: 'Request a Demo',
  quote: 'Request a Quotation',
  requirements: 'Discuss Institutional Requirements',
  general: 'General Inquiry',
}

export type InquiryFormData = {
  fullName: string
  institution: string
  email: string
  role?: string
  inquiryType: InquiryType
  message: string
  _hp?: string
}

export type ValidationErrors = Partial<Record<keyof InquiryFormData | 'form', string>>

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

export function validateInquiryInput(input: unknown): {
  success: boolean
  data?: Omit<InquiryFormData, '_hp'>
  errors?: ValidationErrors
} {
  if (!input || typeof input !== 'object') {
    return {
      success: false,
      errors: { form: 'Invalid submission data.' },
    }
  }

  const raw = input as Record<string, unknown>
  const errors: ValidationErrors = {}

  // 1. Honeypot check
  if (typeof raw._hp === 'string' && raw._hp.trim().length > 0) {
    return {
      success: false,
      errors: { form: 'Submission rejected.' },
    }
  }

  // 2. Full Name
  const fullName = typeof raw.fullName === 'string' ? raw.fullName.trim() : ''
  if (!fullName) {
    errors.fullName = 'Full name is required.'
  } else if (fullName.length > 100) {
    errors.fullName = 'Full name must not exceed 100 characters.'
  }

  // 3. Institution / Organization
  const institution = typeof raw.institution === 'string' ? raw.institution.trim() : ''
  if (!institution) {
    errors.institution = 'Institution or organization is required.'
  } else if (institution.length > 150) {
    errors.institution = 'Institution name must not exceed 150 characters.'
  }

  // 4. Work Email
  const email = typeof raw.email === 'string' ? raw.email.trim() : ''
  if (!email) {
    errors.email = 'Email address is required.'
  } else if (email.length > 150) {
    errors.email = 'Email address must not exceed 150 characters.'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please provide a valid email address.'
  }

  // 5. Role / Position (optional)
  const role = typeof raw.role === 'string' ? raw.role.trim() : ''
  if (role.length > 100) {
    errors.role = 'Role must not exceed 100 characters.'
  }

  // 6. Inquiry Type
  const validTypes: InquiryType[] = ['demo', 'quote', 'requirements', 'general']
  const inquiryType = (typeof raw.inquiryType === 'string' ? raw.inquiryType.trim() : '') as InquiryType
  if (!inquiryType || !validTypes.includes(inquiryType)) {
    errors.inquiryType = 'Please select a valid inquiry type.'
  }

  // 7. Message
  const message = typeof raw.message === 'string' ? raw.message.trim() : ''
  if (!message) {
    errors.message = 'Please provide details about your scheduling inquiry or requirements.'
  } else if (message.length < 5) {
    errors.message = 'Message must be at least 5 characters.'
  } else if (message.length > 2000) {
    errors.message = 'Message must not exceed 2,000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  return {
    success: true,
    data: {
      fullName,
      institution,
      email,
      role: role || undefined,
      inquiryType,
      message,
    },
  }
}
