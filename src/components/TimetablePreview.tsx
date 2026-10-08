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

        <div className="grid md:grid-cols-[1fr_210px] lg:grid-cols-[1fr_215px]">
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
                      <p className="text-[11px] font-medium leading-tight text-ink">{b.code}</p>
                      <p className="mt-0.5 font-mono text-[10px] leading-tight text-body">{b.room}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-between border-t border-line bg-sunken p-4 md:border-l md:border-t-0">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Conflict review</p>
                <span className="rounded bg-warn/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-warn">
                  1 rule flag
                </span>
              </div>
              <div className="mt-3 rounded-md border border-warn/30 bg-surface p-3">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-warn">
                  <TriangleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  Room requirement
                </p>
                <p className="mt-1.5 text-[12px] leading-[1.45] text-ink">
                  <span className="font-medium">CS 301</span> (Tue, Thu 9:00) assigned to <span className="font-mono text-[11px]">RM 204</span>.
                </p>
                <p className="mt-1.5 text-[11px] leading-[1.45] text-body">
                  Subject rule requires a laboratory. RM 204 is designated as a lecture room.
                </p>
              </div>
            </div>
            <div className="mt-3 border-t border-line/60 pt-2.5">
              <p className="font-mono text-[10px] leading-relaxed text-muted">
                Illustrative resolution: reassign to an open laboratory or adjust timeslot before publishing.
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
