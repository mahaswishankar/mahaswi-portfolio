'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Intro      from '../components/Intro'
import Cursor     from '../components/Cursor'
import Navbar     from '../components/Navbar'
import Hero       from '../components/Hero'
import Projects   from '../components/Projects'
import Skills     from '../components/Skills'
import Experience from '../components/Experience'
import Contact    from '../components/Contact'
import ScrollTop  from '../components/ScrollTop'

export default function Home() {
  return (
    <AnimatePresence>
      <Cursor />
      <Intro />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 3.5 }} // delay for Intro to finish
      >
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

        <footer>
          <div className="footer-name">G. Mahaswi Shankar</div>
          <div className="footer-copy">Designed with precision · 2026</div>
        </footer>
      </motion.main>
      
      <ScrollTop />
    </AnimatePresence>
  )
}
