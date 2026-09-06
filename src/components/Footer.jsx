import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="home" smooth duration={700} style={{ cursor: 'pointer' }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>
              Jayakumar<span style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.V</span>
            </span>
          </Link>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {year} Jayakumar V. Built with{' '}
            <span className="footer-heart">♥</span> using React & Framer Motion
          </p>

          <div style={{ display: 'flex', gap: 8 }}>
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={700}
                offset={-70}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s',
                  padding: '4px 8px',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-start)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {id}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
