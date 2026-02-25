import { Link } from 'react-router-dom'

/**
 * Componente Footer - Pie de página del sitio.
 * Incluye logo, enlaces de navegación y atletas destacados.
 */
function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">

          {/* ── Columna 1: Brand y descripción ── */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <i className="bi bi-trophy-fill me-2" style={{ color: '#f5a623' }}></i>
              World<span>Records</span>Hub
            </div>
            <p className="footer-description">
              Plataforma dedicada a los récords mundiales en deportes olímpicos.
              Celebramos los logros extraordinarios de los mejores atletas del mundo.
            </p>
          </div>

          {/* ── Columna 2: Navegación ── */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Navegación</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <i className="bi bi-chevron-right"></i>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Deportes
                </Link>
              </li>
              <li>
                <Link to="/records">
                  <i className="bi bi-chevron-right"></i>
                  Récords
                </Link>
              </li>
              <li>
                <Link to="/atletas">
                  <i className="bi bi-chevron-right"></i>
                  Atletas
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Columna 3: Deportes ── */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Deportes</h6>
            <ul className="footer-links">
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Atletismo
                </Link>
              </li>
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Natación
                </Link>
              </li>
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Ciclismo
                </Link>
              </li>
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Maratón
                </Link>
              </li>
              <li>
                <Link to="/deportes">
                  <i className="bi bi-chevron-right"></i>
                  Gimnasia
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Columna 4: Atletas destacados ── */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Atletas Destacados</h6>
            <div className="d-flex flex-column gap-2">
              {[
                { name: 'Usain Bolt', record: '9.58s — 100m', flag: '🇯🇲' },
                { name: 'Eliud Kipchoge', record: '2:01:09 — Maratón', flag: '🇰🇪' },
                { name: 'Katie Ledecky', record: '3:56.46 — 400m Libre', flag: '🇺🇸' },
                { name: 'Simone Biles', record: '59.798 pts — All-Around', flag: '🇺🇸' },
              ].map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{a.flag}</span>
                  <div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                      }}
                    >
                      {a.name}
                    </div>
                    <div style={{ color: '#f5a623', fontSize: '0.78rem' }}>
                      {a.record}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
