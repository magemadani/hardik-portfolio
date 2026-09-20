import { philosophy, sections } from '../data'
import Reveal from './Reveal'
import { Bulb, Pen, Database, Trend } from './Icons'

const stepIcons = [Bulb, Pen, Database, Trend]

/**
 * Radial diagram: five labels on a ring around the centre.
 * Positioned by percentage so it scales with the container instead of
 * needing a fixed-size canvas.
 */
const ORBIT = [
  { top: '2%', left: '50%' },
  { top: '38%', left: '96%' },
  { top: '88%', left: '82%' },
  { top: '88%', left: '18%' },
  { top: '38%', left: '4%' },
]

function Diagram() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="36" fill="none" stroke="#C7C4F5" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
        {[
          [50, 14],
          [86, 42],
          [72, 86],
          [28, 86],
          [14, 42],
        ].map(([x, y]) => (
          <line key={`${x}-${y}`} x1="50" y1="50" x2={x} y2={y} stroke="#5D55FA" strokeWidth="0.35" opacity="0.5" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-[#B9B4F7] to-[#A9A3F2] text-center">
        <span className="px-2 text-[11px] font-extrabold leading-tight tracking-tight text-ink sm:text-[13px]">
          {philosophy.center.map((w) => (
            <span key={w} className="block">
              {w}
            </span>
          ))}
        </span>
      </div>

      {philosophy.orbit.map((label, i) => (
        <div
          key={label}
          style={ORBIT[i]}
          className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2"
        >
          <Reveal
            delay={0.1 + i * 0.08}
            y={10}
            className="card grid place-items-center px-2 py-3 text-center text-[11px] font-medium leading-tight text-ink sm:text-xs"
          >
            {label}
          </Reveal>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-mist py-16 sm:py-20">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{sections.about.eyebrow}</p>
            <h2 className="mt-4 h2">
              {sections.about.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed">{philosophy.intro}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
            {philosophy.steps.map((s, i) => {
              const Icon = stepIcons[i]
              return (
                <Reveal key={s.title} delay={0.08 * i}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-accent shadow-card">
                    <Icon />
                  </span>
                  <p className="mt-4 text-sm font-extrabold tracking-tight text-ink">{s.title}</p>
                  <p className="text-[11px] leading-snug text-slate-550">{s.sub}</p>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Diagram />
      </div>
    </section>
  )
}
