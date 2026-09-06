import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    title: 'AI Exam Companion',
    description:
      'An intelligent exam preparation assistant leveraging AI to help students study smarter and more efficiently. Features personalized question generation, progress tracking, and adaptive learning paths.',
    tags: ['React', 'Firebase', 'Node.js API', 'AI Integration'],
    icon: 'fa-solid fa-robot',
    bannerGradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    liveUrl: 'https://aiexamcompanion.web.app/',
    caseStudyId: 'project-ai-exam',
  },
  {
    title: 'Full-Stack MERN App',
    description:
      'A production-grade web application built on the MERN stack featuring authentication, real-time data, responsive UI, and robust backend API architecture.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    icon: 'fa-solid fa-layer-group',
    bannerGradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #0a3d2e 100%)',
    liveUrl: '#',
    caseStudyId: null,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <i className="fa-solid fa-diagram-project" /> Projects
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my work in full-stack development and AI integration.
            Each project reflects real-world problem-solving and technical depth.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -8 }}
            >
              {/* Banner */}
              <div
                className="project-banner"
                style={{ background: project.bannerGradient }}
              >
                <motion.i
                  className={`project-banner-icon ${project.icon}`}
                  animate={{
                    filter: [
                      'drop-shadow(0 0 10px rgba(99,102,241,0.3))',
                      'drop-shadow(0 0 24px rgba(99,102,241,0.7))',
                      'drop-shadow(0 0 10px rgba(99,102,241,0.3))',
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-primary"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Demo
                  </a>
                  {project.caseStudyId && (
                    <a
                      href={`${project.caseStudyId}.html`}
                      className="project-link project-link-secondary"
                    >
                      <i className="fa-solid fa-file-lines" />
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
