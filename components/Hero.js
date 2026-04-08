'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    role: '— Data Scientist',
    desc: <>Bridging the gap between <span>quantitative finance</span> and <span>machine learning</span> — building models that surface risk, decode markets, and drive real decisions.</>,
    panelRole: 'Data Scientist',
  },
  {
    role: '— Financial Analyst',
    desc: <>Translating complex <span>financial data</span> into clear, actionable insights — from portfolio optimisation to risk modelling and market analysis.</>,
    panelRole: 'Financial Analyst',
  },
  {
    role: '— ML Engineer',
    desc: <>Building intelligent systems that <span>learn from data</span> — from feature engineering to production deployment across finance and business domains.</>,
    panelRole: 'ML Engineer',
  },
]

const STATS = [
  { target: 2,  label: 'Years exp.',      suffix: '' },
  { target: 12, label: 'Projects',        suffix: '' },
  { target: 4,  label: 'Domains',         suffix: '' },
  { target: 8,  label: 'Tools mastered',  suffix: '' },
]

const TECH = ['Python', 'R', 'SQL', 'TensorFlow', 'Pandas', 'Tableau', 'Excel', 'Power BI']

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero">
      <div className="hero-grid" />

      <div className="hero-left">
        <motion.div className="hero-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3.6 }}>
          <div className="eyebrow-dot" />
          <div className="eyebrow-text">Data Science · Finance · ML · 2026</div>
        </motion.div>

        <motion.div className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3.7 }}>
          G. Mahaswi Shankar
        </motion.div>
        
        <motion.div className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 3.8 }}>
          Data Scientist &amp; Analyst
        </motion.div>

        <motion.div className="hero-role-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3.9 }}>
          <motion.div className="hero-role-track" animate={{ translateY: `-${current * 48}px` }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            {SLIDES.map((s, i) => <div key={i} className="hero-role">{s.role}</div>)}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            className="hero-desc"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {SLIDES[current].desc}
          </motion.div>
        </AnimatePresence>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 4.1 }}>
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <button className="btn-ghost">Download CV</button>
        </motion.div>
      </div>

      <motion.div 
        className="hero-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="panel-header">
          <img src="/photo.jpeg" alt="Mahaswi" className="avatar" style={{objectFit:'cover', width:'88px', height:'88px', borderRadius:'4px'}} />
          <div className="panel-name">G. Mahaswi Shankar</div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              className="panel-role-badge"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {SLIDES[current].panelRole}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="stat-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.target}{s.suffix}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="tech-block">
          <div className="tech-lbl">// core stack</div>
          <div className="tech-tags">
            {TECH.map(t => (
              <motion.span 
                key={t} 
                className="tech-tag"
                whileHover={{ y: -2, backgroundColor: 'var(--border2)' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="avail">
          <div className="avail-dot" />
          <div className="avail-text"><strong>Open to opportunities</strong> — Full-time &amp; internships</div>
        </div>
      </motion.div>
    </div>
  )
}
