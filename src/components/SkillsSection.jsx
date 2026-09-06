import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS = [
  {
    category: 'Frontend Engineering',
    icon: 'fa-solid fa-desktop',
    items: [
      { icon: 'fa-brands fa-html5', label: 'HTML5' },
      { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
      { icon: 'fa-brands fa-js', label: 'JavaScript' },
      { icon: 'fa-brands fa-react', label: 'React.js' },
      { icon: 'fa-solid fa-bolt', label: 'Vite' },
      { icon: 'fa-solid fa-wind', label: 'Tailwind CSS' },
      { icon: 'fa-solid fa-mobile-screen', label: 'Responsive Design' },
    ],
  },
  {
    category: 'Backend Development',
    icon: 'fa-solid fa-server',
    items: [
      { icon: 'fa-brands fa-node', label: 'Node.js' },
      { icon: 'fa-solid fa-server', label: 'Express.js' },
      { icon: 'fa-solid fa-plug', label: 'RESTful APIs' },
      { icon: 'fa-solid fa-shield-halved', label: 'Auth & Security' },
      { icon: 'fa-solid fa-database', label: 'Data Handling' },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: 'fa-solid fa-cloud',
    items: [
      { icon: 'fa-solid fa-fire', label: 'Firebase' },
      { icon: 'fa-solid fa-sitemap', label: 'Firestore' },
      { icon: 'fa-solid fa-leaf', label: 'MongoDB' },
      { icon: 'fa-solid fa-database', label: 'Data Modeling' },
      { icon: 'fa-solid fa-cloud-arrow-up', label: 'Cloud Deployment' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: 'fa-solid fa-wrench',
    items: [
      { icon: 'fa-brands fa-git-alt', label: 'Git' },
      { icon: 'fa-brands fa-github', label: 'GitHub' },
      { icon: 'fa-solid fa-box-open', label: 'npm' },
      { icon: 'fa-solid fa-terminal', label: 'CLI Tools' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <i className="fa-solid fa-code" /> Skills
          </span>
          <h2 className="section-title">Tech Stack & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolset for building modern digital products — from
            pixel-perfect UIs to robust backend systems.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILLS.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              className="skills-category"
              variants={sectionVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: catIndex * 0.15 }}
            >
              <div className="skills-category-header">
                <div className="skills-category-icon">
                  <i className={cat.icon} />
                </div>
                <h3 className="skills-category-name">{cat.category}</h3>
              </div>

              <motion.div
                className="skills-items"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {cat.items.map((skill) => (
                  <motion.div
                    key={skill.label}
                    className="skill-chip"
                    variants={chipVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className={skill.icon} />
                    {skill.label}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
