import React from 'react'
import { TriangleAlert } from 'lucide-react'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const START_HOUR = 7
const HOURS = [7, 8, 9, 10, 11, 12]
const ROW = 44 // px per hour

type Block = {
  day: number
  start: number
  dur: number
  code: string
  room: string
  conflict?: boolean
}

const BLOCKS: Block[] = [
  { day: 0, start: 7.5, dur: 1.5, code: 'CS 101', room: 'RM 204' },
  { day: 0, start: 10, dur: 2, code: 'CS 214 Lab', room: 'LAB 1' },
  { day: 1, start: 9, dur: 1.5, code: 'CS 301', room: 'RM 204', conflict: true },
  { day: 2, start: 7.5, dur: 1.5, code: 'CS 101', room: 'RM 204' },
  { day: 2, start: 10, dur: 2, code: 'CS 214 Lab', room: 'LAB 1' },
  { day: 3, start: 9, dur: 1.5, code: 'CS 301', room: 'RM 204', conflict: true },
]

export const TimetablePreview: React.FC = () => {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-frame">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-warn" aria-hidden />
            <p className="text-[13px] font-medium text-ink">
              Schedule review <span className="text-muted">· Instructor A · Draft</span>
            </p>
          </div>
          <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            Sample data
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_200px]">
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-[32px_repeat(3,1fr)] gap-x-1 sm:grid-cols-[36px_repeat(5,1fr)]">
              <div />
              {DAYS.map((d, i) => (
                <p
                  key={d}
                  className={`pb-2 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-muted ${
                    i > 2 ? 'hidden sm:block' : ''
                  }`}
                >
                  {d}
                </p>
              ))}

              <div className="relative" style={{ height: HOURS.length * ROW }}>
                {HOURS.map((h, i) => (
                  <span
                    key={h}
                    className="absolute -translate-y-1/2 font-mono text-[10px] text-muted"
                    style={{ top: i * ROW }}
                  >
                    {h}:00
                  </span>
                ))}
              </div>

              {DAYS.map((d, di) => (
                <div
                  key={d}
                  className={`relative border-l border-line ${di > 2 ? 'hidden sm:block' : ''}`}
                  style={{
                    height: HOURS.length * ROW,
                    backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${
                      ROW - 1
                    }px, var(--color-line, #E2E8F0) ${ROW - 1}px, var(--color-line, #E2E8F0) ${ROW}px)`,
                  }}
                >
                  {BLOCKS.filter((b) => b.day === di).map((b) => (
                    <div
                      key={`${b.code}-${b.day}`}
                      className={`absolute inset-x-0.5 overflow-hidden rounded-md border px-1.5 py-1 ${
                        b.conflict
                          ? 'border-warn/40 bg-warn-subtle'
                          : 'border-brand-line bg-brand-subtle'
                      }`}
                      style={{ top: (b.start - START_HOUR) * ROW + 1, height: b.dur * ROW - 2 }}
                    >
                      <p className="truncate text-[11px] font-medium leading-4 text-ink">{b.code}</p>
                      <p className="truncate font-mono text-[10px] leading-4 text-body">{b.room}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <aside className="border-t border-line bg-sunken p-4 md:border-l md:border-t-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Conflicts · 1</p>
            <div className="mt-3 rounded-md border border-warn/30 bg-surface p-3">
              <p className="flex items-center gap-1.5 text-[12px] font-medium text-warn">
                <TriangleAlert className="h-3.5 w-3.5" aria-hidden />
                Room requirement
              </p>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-body">
                CS 301 · Tue, Thu 9:00. Assigned room is not a laboratory.
              </p>
            </div>
          </aside>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-muted">
        Illustrative interface using sample data.
      </figcaption>
    </figure>
  )
}
