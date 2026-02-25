import SportCard from '../components/SportCard'
import { sportsData } from '../data/sports'

/**
 * Página de Deportes.
 * Muestra todas las disciplinas deportivas en formato de cards.
 */
function Sports() {
  return (
    <div className="page-wrapper">
      {/* ── Encabezado de página ── */}
      <div className="page-header">
        <div className="container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245,166,35,0.15)',
              color: '#f5a623',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              border: '1px solid rgba(245,166,35,0.3)',
              marginBottom: '1rem',
            }}
          >
            <i className="bi bi-grid-fill"></i>
            Disciplinas Olímpicas
          </div>
          <h1 className="page-header-title">
            <span>Deportes</span> Olímpicos
          </h1>
          <p className="page-header-subtitle">
            Explora las disciplinas con récords mundiales registrados
          </p>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">

          {/* Estadísticas rápidas */}
          <div className="row g-3 mb-5">
            {[
              { icon: 'bi-grid-fill', value: '6', label: 'Deportes' },
              { icon: 'bi-trophy-fill', value: '18+', label: 'Récords' },
              { icon: 'bi-person-fill', value: '8', label: 'Atletas' },
              { icon: 'bi-globe', value: '10+', label: 'Países' },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div
                  style={{
                    background: 'linear-gradient(145deg, #16213e, #1e2a45)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className={`bi ${stat.icon}`}
                    style={{
                      fontSize: '1.8rem',
                      color: '#f5a623',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  ></i>
                  <div
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#fff',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.82rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Título de sección */}
          <h2 className="section-title mb-2">
            Todas las <span>Disciplinas</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Haz clic en "Ver Récords" para filtrar los récords de cada deporte
          </p>

          {/* Grid de cards de deportes */}
          <div className="row g-4">
            {sportsData.map((sport, index) => (
              <div
                key={sport.id}
                className={`col-lg-4 col-md-6 animate-fade-in animate-delay-${(index % 5) + 1}`}
              >
                <SportCard sport={sport} />
              </div>
            ))}
          </div>

          {/* Nota informativa */}
          <div
            style={{
              background: 'rgba(15,52,96,0.4)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              marginTop: '3rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <i
              className="bi bi-info-circle-fill"
              style={{ color: '#f5a623', fontSize: '1.3rem', flexShrink: 0, marginTop: '2px' }}
            ></i>
            <div>
              <h6
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#f5a623',
                  letterSpacing: '1px',
                  marginBottom: '0.3rem',
                }}
              >
                Sobre los datos
              </h6>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                Los récords mostrados están basados en marcas oficiales reconocidas por World Athletics,
                World Aquatics (FINA), UCI, IWF y la FIG. Algunos datos son simulados con coherencia
                histórica para fines educativos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sports
