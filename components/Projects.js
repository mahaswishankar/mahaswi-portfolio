'use client'
import { motion } from 'framer-motion'

const PROJECTS = [
  { num: '01 / 04', icon: '📈', title: 'Equity Risk Prediction Model', desc: 'Built an LSTM-based model to forecast 30-day equity volatility. Outperformed GARCH baseline by 18% on out-of-sample data across 200+ tickers.', tags: ['Python', 'TensorFlow', 'Pandas', 'Finance API'] },
  { num: '02 / 04', icon: '🏦', title: 'Credit Scoring Pipeline', desc: 'End-to-end ML pipeline for retail credit risk assessment. Deployed in production, processing 10k+ applications monthly with 94% accuracy.', tags: ['XGBoost', 'scikit-learn', 'AWS', 'SQL'] },
  { num: '03 / 04', icon: '🔍', title: 'Portfolio Optimisation Dashboard', desc: 'Interactive Markowitz-based portfolio optimiser with real-time data feeds. Helps visualise efficient frontier and asset allocation strategies.', tags: ['Python', 'Dash', 'Plotly', 'R'] },
  { num: '04 / 04', icon: '📰', title: 'NLP Sentiment → Price Signal', desc: 'Processed 500k+ financial news headlines to extract sentiment signals. Signal alpha tested via backtesting with a positive Sharpe ratio of 1.4.', tags: ['NLP', 'BERT', 'Python', 'Airflow'] },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Projects() {
  return (
    <section id="projects">
      <motion.div className="eyebrow" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="eyebrow-line" /><span>Selected Work</span>
      </motion.div>
      <motion.div className="section-title" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        Projects that <em>moved the needle</em>
      </motion.div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <motion.div 
            key={i} 
            className="project-card"
            variants={itemVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -8, backgroundColor: 'var(--bg3)', transition: { duration: 0.3 } }}
          >
            <div className="proj-header">
              <div className="proj-num">{p.num}</div>
              <div className="proj-icon">{p.icon}</div>
            </div>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-tags">{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
            <a className="proj-link" href="#">View Case Study ↗</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
