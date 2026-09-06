import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const TYPEWRITER_WORDS = [
  'Full-Stack Developer',
  'React.js Engineer',
  'MERN Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
]

// Floating particles config
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 10}s`,
  duration: `${Math.random() * 10 + 8}s`,
  color: ['rgba(99,102,241,0.7)', 'rgba(168,85,247,0.6)', 'rgba(59,130,246,0.6)'][Math.floor(Math.random() * 3)],
}))

function useTypewriter(words, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(deleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx, words, speed, pause])

  return displayed
}

export default function HeroSection() {
  const typewriter = useTypewriter(TYPEWRITER_WORDS)

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid-lines" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="particles">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                background: p.color,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-content">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-badge"
        >
          <span className="hero-badge-dot" />
          Available for opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I'm Jayakumar V.
          <br />
          <span className="hero-typewriter">
            {typewriter}
            <span className="typewriter-cursor" aria-hidden="true" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Building scalable, secure, and user-centric web applications. From
          concept to deployment — I transform complex requirements into clean,
          maintainable solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link to="projects" smooth duration={700} offset={-70}>
            <button className="btn btn-primary">
              <i className="fa-solid fa-rocket" />
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-70}>
            <button className="btn btn-secondary">
              <i className="fa-regular fa-paper-plane" />
              Get In Touch
            </button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { num: '2+', label: 'Internships' },
            { num: '1+', label: 'Live Projects' },
            { num: 'MERN', label: 'Stack Expert' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-number">{stat.num}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
