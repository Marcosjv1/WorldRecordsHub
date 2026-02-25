import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SportCard from '../components/SportCard'
import { sportsData } from '../data/sports'
import { worldRecords } from '../data/records'

/**
 * Página de Inicio (Home).
 * Incluye Hero, sección de características, récords destacados y deportes.
 */
function Home() {
  // Mostrar solo los primeros 3 deportes en la preview
  const featuredSports = sportsData.slice(0, 3)

  // Récords destacados para la preview (los más icónicos)
  const featuredRecords = worldRecords.filter((r) =>
    [1, 2, 10, 6, 17, 12].includes(r.id)
  )

  return (
    <>
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Sección de Características ── */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            ¿Por qué <span>WorldRecordsHub</span>?
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Tu fuente de información sobre los récords más impresionantes del deporte olímpico
          </p>

          <div className="row g-4 justify-content-center">
            {/* Feature 1 */}
            <div className="col-lg-4 col-md-6 animate-fade-in animate-delay-1">
              <div className="feature-card">
                <i className="bi bi-trophy-fill feature-icon"></i>
                <h4 className="feature-title">Récords Oficiales</h4>
                <p className="feature-text">
                  Datos basados en récords reconocidos por federaciones internacionales
                  como World Athletics, FINA y el COI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sección Récords Destacados ── */}
      <section className="records-preview-section">
        <div className="container">
          <h2 className="section-title">
            Récords <span>Destacados</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Los récords más icónicos e impresionantes de la historia olímpica
          </p>

          <div className="row g-3 mb-4">
            {featuredRecords.map((record, index) => (
              <div key={record.id} className={`col-lg-6 animate-fade-in animate-delay-${index + 1}`}>
                <div className="record-preview-card">
                  {/* Ícono del deporte */}
                  <div className="record-preview-icon">
                    <span role="img" aria-label={record.sport}>
                      {record.icon}
                    </span>
                  </div>

                  {/* Información del récord */}
                  <div className="record-preview-info">
                    <h5>{record.athlete}</h5>
                    <p>
                      {record.flag} {record.event} · {record.country}
                    </p>
                  </div>

                  {/* Valor del récord */}
                  <div className="record-preview-value">
                    <span>{record.record}</span>
                    <small>{record.year}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón ver todos */}
          <div className="text-center mt-4">
            <Link to="/records" className="btn-hero">
              <i className="bi bi-bar-chart-fill me-2"></i>
              Ver Todos los Récords
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sección Deportes Preview ── */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(180deg, #16213e 0%, #1a1a2e 100%)',
        }}
      >
        <div className="container">
          <h2 className="section-title">
            Nuestros <span>Deportes</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explora los récords en las principales disciplinas olímpicas
          </p>

          <div className="row g-4">
            {featuredSports.map((sport, index) => (
              <div
                key={sport.id}
                className={`col-lg-4 col-md-6 animate-fade-in animate-delay-${index + 1}`}
              >
                <SportCard sport={sport} />
              </div>
            ))}
          </div>

          {/* Botón ver todos los deportes */}
          <div className="text-center mt-5">
            <Link to="/deportes" className="btn-hero-outline">
              <i className="bi bi-grid-fill me-2"></i>
              Ver Todos los Deportes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sección CTA (Call to Action) ── */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fondo decorativo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 30% 50%, rgba(245,166,35,0.15) 0%, transparent 60%)',
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '2px',
              marginBottom: '1rem',
            }}
          >
            ¿Listo para explorar los límites humanos?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.1rem',
              maxWidth: '550px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}
          >
            Descubre los récords que han marcado la historia del deporte olímpico
            y conoce a los atletas detrás de cada hazaña.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/atletas" className="btn-hero">
              <i className="bi bi-person-fill me-2"></i>
              Conocer Atletas
            </Link>
            <Link to="/records" className="btn-hero-outline">
              <i className="bi bi-bar-chart-fill me-2"></i>
              Ver Récords
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
