import { Link } from 'react-router-dom'

/**
 * Componente Hero - Sección principal de la página de inicio.
 * Muestra imagen de fondo, título llamativo, subtítulo y estadísticas.
 */
function Hero() {
  return (
    <section className="hero-section">
      {/* Contenido principal del hero */}
      <div className="container">
        <div className="hero-content">

          {/* Badge superior */}
          <div className="hero-badge">
            <i className="bi bi-trophy-fill me-2"></i>
            Récords Mundiales Olímpicos
          </div>

          {/* Título principal */}
          <h1 className="hero-title">
            Los Límites del
            <span className="highlight">Ser Humano</span>
          </h1>

          {/* Subtítulo */}
          <p className="hero-subtitle">
            Descubre los récords mundiales más impresionantes en deportes olímpicos.
            Conoce a los atletas que desafiaron lo imposible y reescribieron la historia.
          </p>

          {/* Botones de acción */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/records" className="btn-hero">
              <i className="bi bi-bar-chart-fill me-2"></i>
              Explorar Récords
            </Link>
            <Link to="/atletas" className="btn-hero-outline">
              <i className="bi bi-person-fill me-2"></i>
              Ver Atletas
            </Link>
          </div>

          {/* Estadísticas rápidas */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">18+</span>
              <span className="hero-stat-label">Récords</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">6</span>
              <span className="hero-stat-label">Deportes</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">8</span>
              <span className="hero-stat-label">Atletas</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">12+</span>
              <span className="hero-stat-label">Países</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero-scroll-indicator">
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  )
}

export default Hero
