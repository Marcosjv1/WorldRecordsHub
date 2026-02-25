import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

/**
 * Componente Navbar - Barra de navegación fija.
 * Incluye logo, enlaces de navegación y menú hamburguesa para móvil.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer clic en un enlace
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

          {/* ── Logo / Brand ── */}
          <Link to="/" className="navbar-brand-custom" onClick={handleNavClick}>
            <i className="bi bi-trophy-fill brand-icon"></i>
            World<span className="brand-accent">Records</span>Hub
          </Link>

          {/* ── Botón hamburguesa (móvil) ── */}
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

          {/* ── Links de navegación (desktop) ── */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
            >
              <i className="bi bi-house-fill me-1"></i>
              Inicio
            </NavLink>
            <NavLink
              to="/deportes"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
            >
              <i className="bi bi-grid-fill me-1"></i>
              Deportes
            </NavLink>
            <NavLink
              to="/records"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
            >
              <i className="bi bi-bar-chart-fill me-1"></i>
              Récords
            </NavLink>
            <NavLink
              to="/atletas"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
            >
              <i className="bi bi-person-fill me-1"></i>
              Atletas
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

        {/* ── Menú móvil desplegable ── */}
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
              to="/"
              end
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="bi bi-house-fill me-2"></i>
              Inicio
            </NavLink>
            <NavLink
              to="/deportes"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="bi bi-grid-fill me-2"></i>
              Deportes
            </NavLink>
            <NavLink
              to="/records"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="bi bi-bar-chart-fill me-2"></i>
              Récords
            </NavLink>
            <NavLink
              to="/atletas"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="bi bi-person-fill me-2"></i>
              Atletas
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
