import React from 'react'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-brand">
      {children}
    </p>
  )
}
