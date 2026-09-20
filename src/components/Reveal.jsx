import { motion } from 'framer-motion'

/** Scroll-triggered fade-up. `delay` staggers siblings; `as` keeps the markup semantic. */
export default function Reveal({ children, delay = 0, y = 24, className, style, as = 'div' }) {
  const M = motion[as] ?? motion.div
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </M>
  )
}
