import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const KEY_ATTRS = [
  { icon: 'fa-solid fa-layer-group', label: 'Scalable Architecture' },
  { icon: 'fa-solid fa-lightbulb', label: 'Problem Solving' },
  { icon: 'fa-solid fa-comments', label: 'Clear Communication' },
  { icon: 'fa-solid fa-arrows-rotate', label: 'Continuous Learning' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="about-image-dots" />
            <div className="about-image-frame">
              <img src="/jk_photo1.jpg" alt="Jayakumar V." />
            </div>
            <div className="about-image-badge">
              <div className="about-image-badge-num">2+</div>
              <div className="about-image-badge-label">Years Learning</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div>
              <span className="section-tag">
                <i className="fa-solid fa-user" /> About Me
              </span>
              <h2 className="section-title">Professional Summary</h2>
            </div>

            <p>
              I am a <strong style={{ color: 'var(--text-primary)' }}>Full-Stack Developer</strong> with a
              strong focus on building scalable, secure, and user-centric web applications. I specialize
              in transforming complex requirements into clean, maintainable solutions that balance
              performance, usability, and reliability.
            </p>
            <p>
              With hands-on experience across both frontend and backend technologies, I enjoy working
              at the intersection of design, engineering, and system architecture. My approach emphasizes
              writing readable code, following best practices, and delivering solutions that are easy to
              scale and maintain over time.
            </p>
            <p>
              I have worked on projects involving modern JavaScript frameworks, the MERN stack, cloud
              services, and database design — ensuring smooth end-to-end functionality. I value clear
              communication, continuous learning, and problem-solving driven by real-world impact.
            </p>

            <div className="about-attrs">
              {KEY_ATTRS.map((attr) => (
                <div key={attr.label} className="about-attr">
                  <i className={attr.icon} />
                  <span>{attr.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="mailto:email@example.com"
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '10px 22px' }}
              >
                <i className="fa-solid fa-envelope" /> Email Me
              </a>
              <a
                href="#"
                className="btn btn-secondary"
                style={{ fontSize: '0.9rem', padding: '10px 22px' }}
              >
                <i className="fa-solid fa-download" /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
