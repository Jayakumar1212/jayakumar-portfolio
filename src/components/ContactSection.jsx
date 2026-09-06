import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-twitter', href: '#', label: 'Twitter' },
  { icon: 'fa-solid fa-envelope', href: 'mailto:email@example.com', label: 'Email' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <i className="fa-solid fa-paper-plane" /> Contact
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss a new opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact-info-title">
              Let's build something<br />
              <span className="gradient-text">great together.</span>
            </h3>
            <p className="contact-info-text">
              I'm currently open to freelance projects, internship opportunities, and full-time roles. Whether you have a question, a project proposal, or just want to say hello — my inbox is always open.
            </p>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Connect with me
              </p>
              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="social-link"
                    title={link.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact quick info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-start)', width: 20 }}><i className="fa-solid fa-location-dot" /></span>
                Tamil Nadu, India
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-start)', width: 20 }}><i className="fa-solid fa-clock" /></span>
                Available Mon – Sat, 9 AM – 6 PM IST
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-start)', width: 20 }}><i className="fa-solid fa-circle-check" style={{ color: '#22c55e' }} /></span>
                Open to new opportunities
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-name">Name</label>
                <input id="cf-name" type="text" className="form-input" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" className="form-input" required placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" type="text" className="form-input" required placeholder="Project Inquiry" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-message">Message</label>
              <textarea id="cf-message" className="form-textarea" rows={5} required placeholder="Tell me about your project..." />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '14px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <i className="fa-solid fa-circle-check" />
                  Message Sent!
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
