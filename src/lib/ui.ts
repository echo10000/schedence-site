const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-page'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  secondary: 'border border-line-strong bg-surface text-ink hover:bg-sunken',
} as const

const sizes = {
  md: 'h-11 px-5 text-[15px]',
  sm: 'h-9 px-4 text-[14px]',
} as const

export const btn = (
  variant: keyof typeof variants = 'primary',
  size: keyof typeof sizes = 'md',
) => `${base} ${variants[variant]} ${sizes[size]}`
