import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, sections } from '../data'
import Reveal from './Reveal'
import { Arrow, Check, Close } from './Icons'

const asset = (f) => `${import.meta.env.BASE_URL}images/${f}`
const FEATURED = 3

function Thumb({ p }) {
  if (p.image) {
    return (
      <img
        src={asset(p.image)}
        alt={`${p.name} storefront`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
      />
    )
  }
  // No public storefront to screenshot — fall back to a branded panel.
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink to-[#232B48]">
      <span className="text-3xl font-extrabold tracking-tight text-white/90">
        {p.name
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 3)}
      </span>
    </div>
  )
}

function Card({ p, onOpen, delay }) {
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onOpen}
        className="card group flex h-full w-full flex-col overflow-hidden text-left transition hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="h-[150px] overflow-hidden bg-mist">
          <Thumb p={p} />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[15px] font-extrabold tracking-tight text-ink">{p.name}</h3>
          <p className="mt-1 text-[13px] text-slate-550">{p.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-accent">
            View Case Study <Arrow />
          </span>
        </div>
      </button>
    </Reveal>
  )
}

function Modal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-label={`${p.name} case study`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-float"
      >
        <div className="relative h-44 overflow-hidden bg-mist sm:h-56">
          <Thumb p={p} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            autoFocus
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink shadow-card hover:bg-white"
          >
            <Close />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <p className="eyebrow">{p.region}</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">{p.name}</h3>
          <p className="text-sm text-slate-550">{p.subtitle}</p>
          <p className="mt-5 text-[15px] leading-relaxed">{p.overview}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">The Challenge</h4>
              <ul className="mt-3 space-y-2.5">
                {p.challenge.map((c) => (
                  <li key={c} className="text-[13px] leading-relaxed">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">What I Built</h4>
              <ul className="mt-3 space-y-2.5">
                {p.solution.map((s) => (
                  <li key={s} className="flex gap-2.5 text-[13px] leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-accent">
                      <Check />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">Technology</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.technology.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark"
              >
                Visit live site <Arrow />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Projects() {
  const { eyebrow, title, sub } = sections.projects
  const [showAll, setShowAll] = useState(false)
  const [open, setOpen] = useState(null)
  const list = showAll ? projects : projects.slice(0, FEATURED)

  return (
    <section id="projects" className="bg-mist py-16 sm:py-20">
      <div className="shell">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 h2">{title}</h2>
            <p className="mt-3 text-[15px]">{sub}</p>
          </div>
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark"
          >
            {showAll ? 'Show featured only' : `View all projects (${projects.length})`} <Arrow />
          </button>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Card key={p.id} p={p} delay={(i % 3) * 0.08} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  )
}
