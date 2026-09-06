import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'App Innovation Company',
    duration: '2.5 Months',
    highlights: [
      'Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      'Collaborated with the design and development team to implement responsive user interfaces and robust backend APIs.',
      'Optimized application performance and ensured cross-browser compatibility.',
    ],
  },
  {
    role: 'React.js Developer Intern',
    company: 'App Innovation Company',
    duration: '15 Days',
    highlights: [
      'Built reusable UI components and managed application state using React Hooks and Context API.',
      'Integrated RESTful APIs to fetch and display dynamic data with proper loading and error states.',
      'Participated in daily stand-ups and code reviews to ensure code quality and team alignment.',
    ],
  },
]

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1, ease: 'easeInOut' } },
}

const itemVariants = (i) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.2, ease: 'easeOut' },
  },
})

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <i className="fa-solid fa-briefcase" /> Experience
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A timeline of my career contributions and achievements in full-stack development.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {/* Animated timeline line */}
          <motion.div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #6366f1, #a855f7)',
              borderRadius: 2,
              transformOrigin: 'top',
            }}
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="experience-item"
              variants={itemVariants(i)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {/* Timeline dot */}
              <motion.div
                className="experience-dot"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
              />

              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-date">{exp.duration}</span>
                </div>
                <span className="experience-company">
                  <i className="fa-solid fa-building" style={{ marginRight: 6 }} />
                  {exp.company}
                </span>
                <ul className="experience-list">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
