'use client'
import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    period: '2024 — Present',
    company: 'Your Company / Project',
    role: 'Data Science Analyst',
    highlights: [
      'Built ML models for financial forecasting and risk assessment',
      'Developed data pipelines processing large-scale financial datasets',
      'Presented data-driven insights to stakeholders and senior management',
    ],
  },
  {
    period: '2023 — 2024',
    company: 'Internship / Academic Project',
    role: 'Financial Data Analyst — Intern',
    highlights: [
      'Analysed financial statements and market data using Python and Excel',
      'Built automated reporting dashboards using Tableau and Power BI',
      'Contributed to quantitative research on equity markets',
    ],
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Experience() {
  return (
    <section id="experience">
      <motion.div className="eyebrow" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="eyebrow-line" /><span>Experience</span>
      </motion.div>
      <motion.div className="section-title" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        Where I've <em>made an impact</em>
      </motion.div>
      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <motion.div 
            key={i} 
            className="exp-item"
            variants={itemVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="exp-period">{e.period}</div>
              <div className="exp-company">{e.company}</div>
            </div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-highlights">
                {e.highlights.map((h, hi) => <div key={hi} className="exp-highlight">{h}</div>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
