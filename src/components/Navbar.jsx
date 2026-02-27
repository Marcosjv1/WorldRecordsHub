import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className="navbar-custom"
      style={{
        padding: scrolled ? '0.5rem 0' : '0.8rem 0',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">

          <Link to="/deportes" className="navbar-brand-custom" onClick={handleNavClick}>
            <i className="bi bi-trophy-fill brand-icon"></i>
            World<span className="brand-accent">Records</span>Hub
          </Link>

          <button
            className="navbar-toggler-custom d-lg-none"
            style={{
              background: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <i
              className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}
              style={{ color: '#f5a623', fontSize: '1.5rem' }}
            ></i>
          </button>

          <div className="d-none d-lg-flex align-items-center gap-1">
            <NavLink
              to="/deportes"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
            >
              Deportes
            </NavLink>
            <NavLink
              to="/buscar"
              className={({ isActive }) =>
                `nav-link-custom nav-link-api ${isActive ? 'active' : ''}`
              }
            >
              <i className="bi bi-search me-1"></i>
              Buscar
            </NavLink>
          </div>
        </div>

        <div
          className={`d-lg-none ${menuOpen ? 'd-block' : 'd-none'}`}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '0.8rem',
            paddingTop: '0.8rem',
          }}
        >
          <div className="d-flex flex-column gap-1">
            <NavLink
              to="/deportes"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              Deportes
            </NavLink>
            <NavLink
              to="/buscar"
              className={({ isActive }) =>
                `nav-link-custom nav-link-api ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="bi bi-search me-2"></i>
              Buscar
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
