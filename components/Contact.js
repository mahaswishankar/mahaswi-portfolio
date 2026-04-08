'use client'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'LinkedIn',              href: '#' },
  { label: 'GitHub',                href: '#' },
  { label: 'Download CV / Resume',  href: '#' },
  { label: 'Research & Publications', href: '#' },
  { label: 'Book a Call',           href: '#' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div>
          <motion.div className="eyebrow" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <div className="eyebrow-line" /><span>Get in touch</span>
          </motion.div>
          <motion.div className="contact-big" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            Let's build something <em>meaningful</em> together
          </motion.div>
          <motion.div className="contact-sub" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            Open to full-time roles, internships, and research collaborations in data science and analysis.
          </motion.div>
          <motion.a 
            className="contact-email" 
            href="mailto:mahaswiwork1@gmail.com"
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -2, color: 'var(--accent)' }}
          >
            mahaswiwork1@gmail.com
          </motion.a>
        </div>
        <motion.div 
          className="contact-panel"
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
          <div className="contact-panel-header">// connect</div>
          <div className="contact-links">
            {LINKS.map((l, i) => (
              <motion.a 
                key={i} 
                className="contact-link" 
                href={l.href}
                whileHover={{ backgroundColor: 'var(--bg3)', paddingLeft: '48px', paddingRight: '32px' }}
                transition={{ duration: 0.3 }}
              >
                <span className="cl-label">{l.label}</span>
                <span className="cl-arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
