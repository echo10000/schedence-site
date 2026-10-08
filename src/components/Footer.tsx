import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'

const GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Deployment', href: '#deployment' },
      { label: 'How it works', href: '#workflow' },
      { label: 'Explanations', href: '#explanations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Request a demo', href: '/?inquiry=demo#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[17px] font-semibold tracking-[-0.02em] text-ink">Schedence</p>
            <p className="mt-3 max-w-[32ch] text-[14px] leading-6 text-body">
              Academic scheduling and faculty workload software for colleges and universities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {GROUPS.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{g.title}</p>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-body transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-[13px] text-muted">
          © {new Date().getFullYear()} Schedence. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
