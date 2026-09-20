const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export const Arrow = (p) => (
  <svg {...base} width="16" height="16" aria-hidden {...p}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

export const Magento = (p) => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden {...p}>
    <path fill="currentColor" d="M12 .6 21.1 5.9v12.2L12 23.4 2.9 18.1V5.9L12 .6Z" />
    <path
      fill="#fff"
      d="M12 4.7 6.2 8.1v8.6l1.9-1.1V9.2L12 6.9l3.9 2.3v6.4l1.9 1.1V8.1L12 4.7Zm-1 6.5v6l1 .6 1-.6v-6l-1-.6-1 .6Z"
    />
  </svg>
)

export const Code = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
  </svg>
)

export const Database = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" />
    <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
  </svg>
)

export const Cloud = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.1 9 3.5 3.5 0 0 0 7 18Z" />
  </svg>
)

export const Link = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7l-1.3 1.3" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 9 18.7l1.3-1.3" />
  </svg>
)

export const Gear = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
  </svg>
)

export const Chart = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <path d="M5 20V11M12 20V5M19 20v-6" />
  </svg>
)

export const Globe = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </svg>
)

export const Bulb = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <path d="M9.5 18h5M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.1 1 1.8h5c.1-.7.4-1.3 1-1.8A6 6 0 0 0 12 3Z" />
  </svg>
)

export const Pen = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <path d="M16.8 3.8a2.5 2.5 0 0 1 3.5 3.5L8 19.6 3.5 21l1.4-4.5L16.8 3.8Z" />
  </svg>
)

export const Trend = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <path d="M3 17 9.5 10.5l4 4L21 7" />
    <path d="M15 7h6v6" />
  </svg>
)

export const Spark = (p) => (
  <svg {...base} width="22" height="22" aria-hidden {...p}>
    <path d="M3.5 14.5c2 0 2.8-5 5.2-5s3.2 5 5.2 5 2.8-5 5.2-5" />
  </svg>
)

export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11.1 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
  </svg>
)

export const GitHub = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} width="18" height="18" aria-hidden {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const Close = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} width="16" height="16" aria-hidden {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
)

export const Trophy = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4.5v1.5A3.5 3.5 0 0 0 8 11M17 6h2.5v1.5A3.5 3.5 0 0 1 16 11" />
    <path d="M12 14v3M8.5 20h7M9.5 17h5l1 3h-7l1-3Z" />
  </svg>
)

export const Share = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="6.5" r="2.6" />
    <circle cx="18" cy="17.5" r="2.6" />
    <path d="m8.4 10.8 7.2-3.1M8.4 13.2l7.2 3.1" />
  </svg>
)

export const Gauge = (p) => (
  <svg {...base} width="24" height="24" aria-hidden {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-4.2 3.4M7.5 12h.01M12 7.5h.01M16.5 12h.01" />
  </svg>
)

export const Cart = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <path d="M2.5 3.5h2.2l2 10.5h10l1.8-7.5H6.2" />
    <circle cx="9" cy="19" r="1.4" />
    <circle cx="16.5" cy="19" r="1.4" />
  </svg>
)

export const Briefcase = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
  </svg>
)

export const Home = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <path d="M3.5 10.5 12 3.5l8.5 7" />
    <path d="M5.5 9.8V20h13V9.8M10 20v-5.5h4V20" />
  </svg>
)

export const Heart = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <path d="M12 20s-7.5-4.6-7.5-9.5A4 4 0 0 1 12 7.8 4 4 0 0 1 19.5 10.5C19.5 15.4 12 20 12 20Z" />
  </svg>
)

export const Factory = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <path d="M3 20V9.5l5 3v-3l5 3v-3l5 3V20H3Z" />
    <path d="M18 9.5 17.3 4h-2.6L14 9.5M6.5 16.5h2M11.5 16.5h2" />
  </svg>
)

export const Grid = (p) => (
  <svg {...base} width="20" height="20" aria-hidden {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
  </svg>
)

export const iconMap = {
  magento: Magento,
  code: Code,
  link: Link,
  cloud: Cloud,
  database: Database,
  share: Share,
  gauge: Gauge,
  trophy: Trophy,
  chart: Chart,
  globe: Globe,
  cart: Cart,
  briefcase: Briefcase,
  home: Home,
  heart: Heart,
  factory: Factory,
  grid: Grid,
}
