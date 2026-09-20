import { motion } from 'framer-motion'
import { hero, heroFeatures, industries, stats } from '../data'
import { Arrow, iconMap } from './Icons'

const asset = (f) => `${import.meta.env.BASE_URL}images/${f}`

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] },
})

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#131A2E] p-4 font-mono shadow-float">
      <div className="mb-3 flex gap-2">
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <pre className="text-[10px] leading-[1.9] text-[#7C8AAE] sm:text-[11px]">
        <code>
          {'// Scalable Commerce Solutions\n'}
          <span className="text-[#8B87FF]">const</span> <span className="text-[#E6E9F5]">success</span>{' '}
          <span className="text-[#8B87FF]">=</span> <span className="text-[#8B87FF]">await</span>{' '}
          <span className="text-[#E6E9F5]">build</span>
          {'({\n  strategy: '}
          <span className="text-[#5FD3A2]">'performance'</span>
          {',\n  experience: '}
          <span className="text-[#5FD3A2]">'better'</span>
          {',\n  together: '}
          <span className="text-[#F0A868]">true</span>
          {'\n});'}
        </code>
      </pre>
    </div>
  )
}

function FeatureCard({ f, delay }) {
  const Icon = iconMap[f.icon]
  return (
    <motion.div {...rise(delay)} className="card flex items-center gap-3 px-3.5 py-3">
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          f.tone === 'orange' ? 'bg-[#FFF1E9] text-[#F26322]' : 'bg-accent-soft text-accent'
        }`}
      >
        <Icon />
      </span>
      <span>
        <span className="block text-[13px] font-extrabold leading-tight tracking-tight text-ink">{f.title}</span>
        <span className="mt-0.5 block text-[11px] leading-snug text-slate-550">{f.sub}</span>
      </span>
    </motion.div>
  )
}

function Stat({ s }) {
  const Icon = iconMap[s.icon]
  return (
    <div>
      <span
        className={`grid h-[52px] w-[52px] place-items-center rounded-2xl bg-accent-soft ${
          s.icon === 'magento' ? 'text-[#F26322]' : 'text-accent'
        }`}
      >
        <Icon width="26" height="26" />
      </span>
      <p className="mt-4 text-[16px] font-extrabold leading-tight tracking-tight text-ink">{s.value}</p>
      <p className="text-[13px] leading-tight text-ink">{s.label}</p>
      <p className="mt-2 text-[11px] leading-snug text-slate-550">{s.caption}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FBFCFE]">
      <div className="relative mx-auto w-full max-w-[1380px] px-5 pb-12 pt-10 sm:px-8 lg:pt-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)_minmax(0,0.49fr)] lg:gap-5">
          {/* copy */}
          <div className="relative z-10 lg:pt-[86px]">
            <motion.p {...rise(0)} className="eyebrow lg:whitespace-nowrap">
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-5 text-[38px] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink sm:text-[46px]"
            >
              {hero.headline.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="block text-accent">
                {hero.headlineAccent}
                <span className="text-ink">.</span>
              </span>
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-6 max-w-lg text-[15px] leading-relaxed">
              {hero.intro}
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Case Studies <Arrow />
              </a>
              <a href="#contact" className="btn-ghost">
                Let’s Connect
              </a>
            </motion.div>

            <motion.div {...rise(0.32)} className="mt-11 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} s={s} />
              ))}
            </motion.div>
          </div>

          {/* laptop artwork */}
          <motion.img
            {...rise(0.2)}
            src={asset('hero-laptop.webp')}
            width="1216"
            height="1430"
            alt="Magento storefront for a kitchen cabinet retailer, wired to AWS, ERP, payment and shipping systems"
            className="mx-auto w-full max-w-[560px] self-center lg:max-w-none lg:self-start"
          />

          {/* capability cards + signature */}
          <div className="flex flex-col gap-3 lg:-ml-5 lg:mt-[86px] lg:justify-start">
            <motion.div {...rise(0.3)}>
              <CodeCard />
            </motion.div>
            <div className="grid gap-3 sm:grid-cols-2 lg:mt-2 lg:grid-cols-1">
              {heroFeatures.map((f, i) => (
                <FeatureCard key={f.title} f={f} delay={0.42 + i * 0.08} />
              ))}
            </div>
            <motion.p
              {...rise(0.8)}
              className="mt-6 text-right font-hand text-[28px] leading-[1.2] text-ink lg:mt-10"
            >
              {hero.note.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="ml-auto mt-1 block h-[3px] w-32 rounded-full bg-accent/80" />
            </motion.p>
          </div>
        </div>

        {/* industries */}
        <motion.div {...rise(0.5)} className="mt-6 border-t border-line pt-8 lg:mt-2">
          <p className="eyebrow">{industries.title}</p>
          <ul className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-2">
            {industries.items.map((it) => {
              const Icon = iconMap[it.icon]
              return (
                <li
                  key={it.label}
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-[15px] ${
                    it.highlight ? 'bg-accent-soft font-semibold text-accent' : 'text-ink'
                  }`}
                >
                  <span className="text-accent">
                    <Icon />
                  </span>
                  {it.label}
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
