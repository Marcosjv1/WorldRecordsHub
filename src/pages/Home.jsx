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
            <div className="col-lg-4 col-md-6">
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
            {featuredRecords.map((record) => (
              <div key={record.id} className="col-lg-6">
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
      <section style={{ padding: '4rem 0', backgroundColor: '#16213e' }}>
        <div className="container">
          <h2 className="section-title">
            Nuestros <span>Deportes</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explora los récords en las principales disciplinas olímpicas
          </p>

          <div className="row g-4">
            {featuredSports.map((sport) => (
              <div
                key={sport.id}
                className="col-lg-4 col-md-6"
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
      <section style={{ padding: '4rem 0', backgroundColor: '#0f3460', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">¿Listo para explorar los límites humanos?</h2>
          <p className="section-subtitle">
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
