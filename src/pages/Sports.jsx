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
          <h1 className="page-header-title">
            <span>Deportes</span> Olímpicos
          </h1>
          <p className="page-header-subtitle">
            Explora las disciplinas con récords mundiales registrados
          </p>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">

          {/* Estadísticas rápidas */}
          <div className="row g-3 mb-4">
            {[
              { icon: 'bi-grid-fill', value: '6', label: 'Deportes' },
              { icon: 'bi-trophy-fill', value: '18+', label: 'Récords' },
              { icon: 'bi-person-fill', value: '8', label: 'Atletas' },
              { icon: 'bi-globe', value: '10+', label: 'Países' },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div style={{ backgroundColor: '#16213e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
                  <i className={`bi ${stat.icon}`} style={{ fontSize: '1.4rem', color: '#f5a623', display: 'block', marginBottom: '0.3rem' }}></i>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
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
            {sportsData.map((sport) => (
              <div key={sport.id} className="col-lg-4 col-md-6">
                <SportCard sport={sport} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Sports
