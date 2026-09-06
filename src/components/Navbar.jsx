import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const totalHeight = doc.scrollHeight - doc.clientHeight
      setScrolled(scrollTop > 20)
      setScrollProgress((scrollTop / totalHeight) * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="nav-logo">
            Jayakumar<span>.V</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
                activeClass="active"
                className="nav-link"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
              className="nav-cta"
              onClick={closeMenu}
            >
              Hire Me
            </Link>
          </nav>

          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </header>
    </>
  )
}
