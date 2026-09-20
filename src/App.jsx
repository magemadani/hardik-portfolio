import { MotionConfig } from 'framer-motion'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Journey />
      </main>
      <Contact />
    </MotionConfig>
  )
}
