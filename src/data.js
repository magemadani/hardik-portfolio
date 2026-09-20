export const profile = {
  name: 'Hardik Madani',
  tagline: 'Magento Developer & Commerce Architect',
  eyebrow: 'Commerce developer, problem solver.',
  headline: ['Building', 'Better Commerce', 'Experiences'],
  intro:
    'I\u2019m a Magento 2 developer and commerce architect helping businesses build scalable, high-performance ecommerce platforms with real business impact.',
  email: 'madanihardik46@gmail.com',
  phone: '+91 79842 23400',
  phoneHref: '+917984223400',
  location: 'Ahmedabad, India',
  // Drop your real URLs in here. Empty strings are simply not rendered.
  // Fill these in — empty strings simply don't render the icon.
  linkedin: '',
  github: '',
  // Put the PDF at public/Hardik-Madani-CV.pdf and this link works as-is.
  resume: 'Hardik-Madani-CV.pdf',
}

export const hero = {
  eyebrow: 'Magento 2 Specialist | B2B Commerce | Kitchen & Cabinet Ecommerce Expert',
  headline: ['Building Commerce', 'Systems,'],
  headlineAccent: 'Not Just Websites',
  intro:
    'I build scalable Magento 2 and Adobe Commerce solutions with custom development, integrations, and performance optimization that create real business impact.',
  note: ['Ideas', 'Integrations', 'Better Commerce'],
}

export const heroFeatures = [
  { icon: 'magento', title: 'Magento 2', sub: 'Adobe Commerce', tone: 'orange' },
  { icon: 'code', title: 'Custom Development', sub: 'Modules & Extensions' },
  { icon: 'share', title: 'Integrations', sub: 'ERP | CRM | APIs' },
  { icon: 'gauge', title: 'Performance', sub: 'Optimization & Scalability' },
]

export const stats = [
  { icon: 'trophy', value: '7+', label: 'Years Experience', caption: 'Building scalable ecommerce solutions' },
  { icon: 'magento', value: 'Magento 2', label: 'Specialist', caption: 'Certified & Experienced' },
  { icon: 'chart', value: 'B2B & B2C', label: 'Commerce', caption: 'Retail, Wholesale & D2C Platforms' },
  { icon: 'globe', value: 'Enterprise', label: 'Integrations', caption: 'ERP, CRM, Payment & Shipping' },
]

export const industries = {
  title: 'Industries I work with',
  items: [
    { icon: 'cart', label: 'Retail & D2C' },
    { icon: 'briefcase', label: 'B2B Commerce' },
    { icon: 'home', label: 'Kitchen & Cabinets', highlight: true },
    { icon: 'heart', label: 'Healthcare' },
    { icon: 'factory', label: 'Manufacturing' },
    { icon: 'grid', label: 'And More...' },
  ],
}

export const sections = {
  about: { eyebrow: 'About', title: ['Engineering Solutions', 'for Real Business Impact.'] },
  stack: {
    eyebrow: 'Tech Stack',
    title: 'Technology Landscape',
    sub: 'Tools and technologies I work with to build modern commerce solutions.',
  },
  projects: {
    eyebrow: 'Case Studies',
    title: 'Featured Projects',
    sub: 'Real projects. Real challenges. Real business impact.',
  },
  journey: {
    eyebrow: 'Career Journey',
    title: 'A Journey of Continuous Learning',
    sub: 'From development to architecture, driven by bigger challenges and meaningful solutions.',
  },
}

export const philosophy = {
  intro:
    'I believe great commerce solutions are built at the intersection of business understanding, clean architecture and long-term thinking.',
  center: ['Scalable', 'Commerce', 'Solutions'],
  orbit: [
    'Business Needs',
    'Architecture & Design',
    'Development & Integration',
    'Optimization & Growth',
    'Customer Experience',
  ],
  steps: [
    { title: 'Understand', sub: 'business goals' },
    { title: 'Design', sub: 'scalable solutions' },
    { title: 'Build', sub: 'with best practices' },
    { title: 'Improve', sub: 'continuously' },
  ],
}

export const stackGroups = [
  {
    title: 'Magento Ecosystem',
    icon: 'magento',
    items: ['Magento 2 (CE)', 'Adobe Commerce', 'Commerce Cloud', 'Magento B2B', 'Hyv\u00e4 Themes'],
  },
  {
    title: 'Backend Engineering',
    icon: 'code',
    items: ['PHP', 'MySQL at scale', 'REST APIs', 'GraphQL', 'RabbitMQ', 'Custom modules'],
  },
  {
    title: 'Integrations',
    icon: 'link',
    items: [
      'Shipping carrier APIs & rating',
      'Payment gateway integrations',
      'ERP & CRM synchronisation',
      'Tax calculation services',
      'Loyalty, reviews & marketing',
      'Workflow automation platforms',
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: 'cloud',
    items: ['AWS | Docker', 'CI/CD', 'Git | GitHub', 'Performance profiling', 'SonarQube', 'Jira | Postman'],
  },
]

/**
 * Each project renders a card, and clicking it opens the case-study modal.
 * `results` is intentionally empty for most projects — fill in real numbers you
 * can stand behind, or leave the array empty and the block won't render.
 */
export const projects = [
  {
    id: 'faircrest',
    image: 'project-faircrest.jpg',
    name: 'Faircrest Cabinets',
    subtitle: 'B2B Dealer Commerce on Hyv\u00e4 + React',
    tags: ['Magento 2.4.9', 'Hyv\u00e4', 'React Checkout'],
    region: 'United States',
    url: 'https://www.faircrestcabinets.com/',
    overview:
      'Faircrest Cabinets is a US cabinet manufacturer selling to dealers. The platform is a Magento 2.4.9 + Hyv\u00e4 storefront with a standalone React checkout and quote builder, backed by more than thirty bespoke modules that carry the dealer, quoting, freight and ERP logic.',
    challenge: [
      'Dealers do not check out \u2014 they build quotes, attach documents and convert them to orders, so the native checkout flow did not fit the way the business sells.',
      'Freight on cabinets depends on the fulfilment centre, the destination and per-order special requests such as lift gate or expedited delivery, none of which Magento models natively.',
      'Every company account needs its own users, permissions, pricing and sales representative, and orders and customers have to stay in step with NetSuite.',
      'Hyv\u00e4 and a React SPA in the same storefront means two codebases that can only talk over GraphQL, and any shared logic has to stay consistent across both.',
    ],
    solution: [
      'Built the React checkout and quote-builder SPA that runs alongside the Hyv\u00e4 storefront, talking to Magento entirely over GraphQL and REST.',
      'Implemented the B2B company layer \u2014 company accounts, sub-users, permissions, cross-login and a customer sales-representative (CSR) model with its own order and quote visibility rules.',
      'Built the quote lifecycle end to end: request-a-quote, quote attributes, PO number validation, order and quote attachments, and quote-to-order conversion with matching PDF and email output.',
      'Built the freight stack \u2014 Pacejet rate integration, group shipping, box-truck carriers, and a shipping accessorial engine where admin-configured special requests drive rate surcharges, checkout sections, order views and PDFs from a single snapshot builder.',
      'Implemented MSI fulfilment-centre resolution with a distance-based source selector that decides transfer orders from the destination address and records the origin warehouse on the quote and order.',
      'Integrated NetSuite for order, customer and company sub-user data, plus NetTerms and Worldpay payment methods and a price-multiplier layer for dealer-specific pricing.',
      'Extended GraphQL across the bespoke modules \u2014 catalog filters, product custom options, quotes, attachments, accessorials and group shipping \u2014 so the React app has a single typed surface to work against.',
    ],
    technology: [
      'Magento 2.4.9',
      'Hyv\u00e4',
      'React',
      'GraphQL',
      'PHP 8',
      'NetSuite',
      'Pacejet',
      'Worldpay',
      'MSI',
      'Tailwind',
      'Docker / Warden',
    ],
    results: [],
  },
  {
    id: 'kitchen-oms',
    image: 'project-kitchen-oms.jpg',
    name: 'Kitchen OMS',
    subtitle: 'B2B Commerce & Order Management',
    tags: ['Magento 2.4.6', 'B2B', 'Quotations'],
    region: 'B2B',
    url: 'https://oms.kitchen365.com/',
    overview:
      'An order management system for a kitchen-cabinet business selling through resellers. Each seller company manages its own users, pricing and quotations inside one Magento B2B installation.',
    challenge: [
      'Every seller company needed its own pricing, its own users and its own view of orders.',
      'Sales happen through quotations rather than straight checkout, and sellers add their own markup before passing a quote on.',
      'Sellers work from Kitchen 2020 design exports, not from the catalog UI.',
    ],
    solution: [
      'Built seller (company) registration, login and a seller account dashboard.',
      'Implemented the B2B order placement journey and order qualification.',
      'Built a price multiplier that calculates pricing from the seller\u2019s customer group.',
      'Implemented company orders, quotations, markup quotations and duplicate quote/order.',
      'Added company sales representative functionality and company edit/management.',
      'Built Kitchen 2020 product CSV import, plus custom landing pages for the cabinet catalog.',
      'Added custom shipping and payment methods, and order reports as front-end charts.',
    ],
    technology: ['Magento 2.4.6', 'Magento B2B', 'PHP', 'MySQL', 'Custom modules'],
    results: [],
  },
  {
    id: 'cliqstudios',
    image: 'project-cliqstudios.jpg',
    name: 'CliqStudios',
    subtitle: 'Kitchen Cabinet Ecommerce Platform',
    tags: ['Magento 2.4.6 EE', 'Custom Modules', 'Integrations'],
    region: 'United States',
    url: 'https://www.cliqstudios.com/',
    overview:
      'CliqStudios is a US retailer of premium kitchen cabinets, selling custom and semi-custom cabinetry. The platform needed a Magento 2 build that could handle complex product configuration, installment payments and a live link to the back office.',
    challenge: [
      'Cabinet ordering has deep configuration \u2014 styles, finishes and sizes \u2014 that a standard catalog structure does not model well.',
      'Order, customer and tax data had to stay in step with NetSuite, Freshsales and Avatax rather than being re-keyed.',
      'Large-ticket orders meant customers wanted to pay across several methods and several installments.',
    ],
    solution: [
      'Implemented the complex kitchen-cabinet catalog structure and custom landing pages to showcase it.',
      'Built a custom split payment method so customers can pay with multiple methods across set installments.',
      'Built a custom shipping method priced on cabinet weight and size.',
      'Integrated Freshsales CRM to sync customer data out of Magento.',
      'Connected NetSuite ERP through Celigo, with custom APIs for order and customer synchronisation.',
      'Integrated Avatax with customer-specific tax calculation rules, plus Calendly scheduling on a custom form and order-sample functionality.',
      'Integrated Marketo for campaigns, syncing Marketo and CRM data over RabbitMQ.',
    ],
    technology: ['Magento 2.4.6 Enterprise', 'PHP', 'NetSuite + Celigo', 'Freshsales', 'Avatax', 'Marketo', 'RabbitMQ'],
    results: [],
  },
  {
    id: 'scrubs-beyond',
    image: 'project-scrubs-beyond.jpg',
    name: 'Scrubs & Beyond',
    subtitle: 'Healthcare Apparel Ecommerce',
    tags: ['2.3.2 \u2192 2.4.7', 'Performance', 'Adyen'],
    region: 'United States',
    url: 'https://www.scrubsandbeyond.com/',
    overview:
      'A US healthcare-apparel retailer on an ageing Magento build. The work covered a major version upgrade, product-page performance, and swapping in new loyalty and payment providers \u2014 alongside daily task allocation for the team.',
    challenge: [
      'The store sat on Magento 2.3.2, past support and blocking newer extensions.',
      'Configurable product pages recalculated price ranges on every load, dragging down PageSpeed scores.',
      'Inventory came from a third-party system that did not map cleanly onto Magento stock.',
    ],
    solution: [
      'Upgraded Magento from 2.3.2 to 2.4.7.',
      'Built a module that stores configurable product price ranges in attributes, so the PDP reads them instead of recalculating.',
      'Optimised the PDP to lift the Google PageSpeed score.',
      'Customised the inventory syncing process from the third-party source.',
      'Integrated Yotpo Loyalty and Reviews, including custom point widgets.',
      'Customised checkout and integrated Adyen Payments.',
      'Brought the codebase up to SonarQube standards.',
    ],
    technology: ['Magento 2.4.7', 'PHP', 'Yotpo', 'Adyen', 'SonarQube'],
    results: [],
  },
  {
    id: 'silhouette-europe',
    image: 'project-silhouette-europe.jpg',
    name: 'Silhouette Europe',
    subtitle: 'Multi-country Storefront on Hyv\u00e4',
    tags: ['Magento 2.4.7', 'Hyv\u00e4', '20 Locales'],
    region: 'Europe',
    url: 'https://www.silhouetteeurope.eu/',
    overview:
      'A new European storefront for Silhouette, built from the ground up on Hyv\u00e4 and serving 20 countries from a single Magento installation.',
    challenge: [
      'Catalog and customer data had to come across from the existing Silhouette America platform.',
      'Twenty countries meant twenty store views, each with its own language and content.',
      'Visitors needed to land on the right store view without hunting through a country picker.',
    ],
    solution: [
      'Migrated data from Silhouette America onto the new Magento platform.',
      'Built the front end with the Hyv\u00e4 theme for performance and user experience.',
      'Prepared product and category catalog data and imported it into the Magento database.',
      'Set up store views for 20 countries and languages, with content translated for each.',
      'Built IP-based detection that picks the correct store view from the visitor\u2019s country.',
      'Kept the whole build SEO-friendly \u2014 performance and visibility best practices throughout.',
    ],
    technology: ['Magento 2.4.7', 'Hyv\u00e4', 'PHP', 'Data migration', 'Multi-store'],
    results: [],
  },
  {
    id: 'tps-racing',
    image: 'project-tps-racing.jpg',
    name: 'TPS Racing',
    subtitle: 'Magento 1 to 2 Migration',
    tags: ['Magento 2.4.0', 'Migration', 'MSI'],
    region: 'Netherlands',
    url: 'https://www.tpsracing.nl/',
    overview:
      'A Dutch racing-parts retailer moving off Magento 1, with several websites and store views to keep running through the transition.',
    challenge: [
      'Magento 1 was end-of-life, with the catalog, customers and orders all needing to come across intact.',
      'Multiple websites and store views had to share one theme architecture rather than diverging.',
      'Stock sat across more than one source location.',
    ],
    solution: [
      'Migrated the storefront from Magento 1 to Magento 2 with performance, security and scalability improved.',
      'Designed a custom Magento 2 theme supporting multiple websites and store views in one architecture.',
      'Integrated and customised a One Step Checkout extension.',
      'Added multi-language support with translated content, and customised add-to-cart behaviour.',
      'Implemented multi-source inventory management.',
    ],
    technology: ['Magento 2.4.0', 'PHP', 'Custom theme', 'MSI', 'One Step Checkout'],
    results: [],
  },
  {
    id: 'dogsworld',
    image: 'project-dogsworld.jpg',
    name: 'Dogsworld',
    subtitle: 'Pet Products Ecommerce',
    tags: ['Magento 2', 'Migration', 'Localisation'],
    region: 'Austria',
    url: 'https://www.dogsworld.at/',
    overview:
      'An Austrian retailer of dog products, moved off Magento 1 and re-themed, with the storefront localised for German-speaking customers.',
    challenge: [
      'The store ran on Magento 1 with a theme that could not be carried forward as-is.',
      'The business needed the full storefront available in German.',
    ],
    solution: [
      'Migrated the website from Magento 1 to Magento 2.',
      'Integrated a custom theme and customised it to the brief.',
      'Translated the entire storefront into German.',
    ],
    technology: ['Magento 2.4.0', 'PHP', 'Custom theme'],
    results: [],
  },
]

export const journey = [
  {
    year: '2019',
    icon: 'bulb',
    title: 'Started in Magento',
    detail: 'Learning Magento 2 module development and theming on live storefronts.',
  },
  {
    year: '2021',
    icon: 'code',
    title: 'Complex B2B & B2C solutions',
    detail:
      'Custom modules, quotations and group pricing, plus Magento 1 \u2192 2 migrations for US and European retailers.',
  },
  {
    year: '2024',
    icon: 'share',
    title: 'Enterprise Magento architecture',
    detail: 'Version upgrades, performance work, and ERP, CRM and payment integrations at scale.',
  },
  {
    year: 'Today',
    icon: 'trend',
    title: 'Building scalable commerce systems',
    detail: 'Hyv\u00e4 storefronts with React checkouts, freight engines and NetSuite pipelines.',
    current: true,
  },
]

// Full role history — kept as the source for the journey milestones above; not rendered on its own.
export const experience = [
  {
    period: 'Dec 2025 \u2014 present',
    company: 'Azilen Technologies',
    title: 'Sr. Software Engineer \u2014 Sr. Magento Developer',
    current: true,
  },
  {
    period: 'Aug 2024 \u2014 Oct 2025',
    company: 'Bytes Technolab',
    title: 'Software Engineer \u2014 Sr. Magento Developer',
  },
  {
    period: 'Jul 2021 \u2014 Aug 2024',
    company: 'Commercepundit',
    title: 'Software Engineer \u2014 Magento Developer',
  },
  {
    period: 'Jan 2020 \u2014 Jul 2021',
    company: 'TRooTech Business Solutions',
    title: 'Jr. Magento Developer',
  },
  { period: 'Mar 2019 \u2014 Jan 2020', company: 'AdornCommerce', title: 'Magento Trainee' },
  { period: '2016 \u2014 2019', company: 'C.U. Shah University', title: 'BCA, Computer Science' },
]
