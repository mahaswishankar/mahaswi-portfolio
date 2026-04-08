'use client'
import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    title: 'Data Science & Machine Learning',
    skills: [
      { name: 'Machine Learning (sklearn, XGBoost)', pct: 90 },
      { name: 'Deep Learning (TensorFlow, Keras)',   pct: 78 },
      { name: 'NLP & Text Analytics',                pct: 75 },
      { name: 'Python / Pandas / NumPy',             pct: 95 },
      { name: 'Data Visualisation (Tableau, Plotly)',pct: 85 },
    ],
  },
  {
    title: 'Finance & Quantitative Methods',
    skills: [
      { name: 'Financial Modelling (DCF, LBO)',      pct: 82 },
      { name: 'Quantitative Risk Analysis',          pct: 80 },
      { name: 'Time Series & Econometrics',          pct: 78 },
      { name: 'SQL & Database Management',           pct: 88 },
      { name: 'Business Analytics & Reporting',      pct: 85 },
    ],
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Skills() {
  return (
    <section id="skills">
      <motion.div className="eyebrow" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="eyebrow-line" /><span>Capabilities</span>
      </motion.div>
      <motion.div className="section-title" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        What I <em>bring to the table</em>
      </motion.div>
      
      <div className="skills-layout">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div 
            key={gi} 
            className="skill-group"
            variants={itemVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-rows">
              {group.skills.map((s, si) => (
                <div key={si} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-fill" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (si * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
