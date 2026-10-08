'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { btn } from '@/lib/ui'

const NAV = [
  { href: '#platform', label: 'Platform' },
  { href: '#deployment', label: 'Deployment' },
  { href: '#workflow', label: 'How it works' },
  { href: '#about', label: 'About' },
]

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Schedence home" className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <rect width="24" height="24" rx="6" className="fill-ink" />
            <rect x="5" y="5" width="6" height="6" rx="1.5" className="fill-white" />
            <rect x="13" y="5" width="6" height="6" rx="1.5" className="fill-white/40" />
            <rect x="5" y="13" width="6" height="6" rx="1.5" className="fill-white/40" />
            <rect x="13" y="13" width="6" height="6" rx="1.5" className="fill-brand" />
          </svg>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
            Schedence
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/?inquiry=demo#contact" className={btn('primary', 'sm')}>
            Request a demo
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-sunken lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-page lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-5 py-1 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-line text-[15px] font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 pt-4 sm:px-8">
            <Link href="/?inquiry=demo#contact" onClick={() => setOpen(false)} className={`${btn('primary')} w-full`}>
              Request a demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
