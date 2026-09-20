import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data'
import { Arrow, Close } from './Icons'

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-[13px] font-extrabold tracking-tight text-white">
        HM
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold tracking-tight text-ink">{profile.name}</span>
        <span className="block text-[11px] text-slate-550">{profile.tagline}</span>
      </span>
    </a>
  )
}

export default function Header() {
  const [active, setActive] = useState('home')
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Highlight the section currently closest to the top of the viewport.
    const spy = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      spy.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        stuck ? 'border-line bg-white/85 backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative text-sm font-medium transition-colors ${
                active === n.id ? 'text-accent' : 'text-slate-550 hover:text-ink'
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-accent" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Let’s Connect <Arrow />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink lg:hidden"
          >
            {open ? <Close /> : <span className="space-y-1.5">{[0, 1, 2].map((i) => <span key={i} className="block h-0.5 w-5 bg-current" />)}</span>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="shell flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
