'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav id="mainNav" className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo"><em>Portfolio</em></div>
      <ul className="nav-links">
        <li><a href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects') }}>Work</a></li>
        <li><a href="#skills"   onClick={e => { e.preventDefault(); scrollTo('skills')   }}>Skills</a></li>
        <li><a href="#experience" onClick={e => { e.preventDefault(); scrollTo('experience') }}>Experience</a></li>
        <li><a href="#contact"  onClick={e => { e.preventDefault(); scrollTo('contact')  }}>Contact</a></li>
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>Hire Me</button>
    </nav>
  )
}
