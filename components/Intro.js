'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAME_PARTS = [
  { text: 'G.\u00a0', gold: true },
  { text: 'Mahaswi', gold: true },
  { text: '\u00a0', gold: false },
  { text: 'Shankar', gold: true },
]

export default function Intro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3200)
    return () => clearTimeout(t)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  }
  
  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  const tagVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 1.6, ease: "easeOut" } }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: '#030509',
            zIndex: 10000,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <div style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 600, fontSize: 'clamp(40px, 5vw, 68px)',
            color: '#f8fafc', lineHeight: 1, textAlign: 'center',
            display: 'flex', overflow: 'hidden'
          }}>
            {NAME_PARTS.map((part, pi) => (
              <span key={pi} style={{ display: 'inline-flex', overflow: 'hidden' }}>
                {part.text.split('').map((ch, ci) => (
                  <motion.span
                    key={ci}
                    variants={charVariants}
                    style={{ 
                      fontStyle: part.gold ? 'italic' : 'normal',
                      color: part.gold ? '#94a3b8' : '#f8fafc' 
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>

          <motion.div
            variants={tagVariants}
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px', letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#94a3b8',
              marginTop: '24px', textAlign: 'center'
            }}
          >
            Data Scientist & Analyst
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
