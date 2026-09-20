import { profile } from '../data'
import Reveal from './Reveal'
import { Arrow, GitHub, LinkedIn, Mail, Spark } from './Icons'

const socials = [
  profile.linkedin && { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedIn },
  profile.github && { href: profile.github, label: 'GitHub', Icon: GitHub },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
].filter(Boolean)

export default function Contact() {
  return (
    <>
      <section id="contact" className="pb-16 sm:pb-20">
        <div className="shell">
          <Reveal className="card flex flex-wrap items-center justify-between gap-6 bg-accent-soft/60 px-6 py-6 sm:px-9 sm:py-7">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                <Spark />
              </span>
              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-ink">Let’s Build Something Great</h2>
                <p className="text-[13px] text-slate-550">
                  Have a complex commerce challenge? Let’s discuss how I can help.
                </p>
              </div>
            </div>
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Get in Touch <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line py-7">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-[13px] font-extrabold tracking-tight text-white">
              HM
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-ink">{profile.name}</span>
              <span className="block text-[11px] text-slate-550">{profile.tagline}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-lg text-ink transition hover:bg-mist hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-550">Ideas to Impact&nbsp; | &nbsp;Crafted with Passion</p>
          </div>
        </div>
      </footer>
    </>
  )
}
