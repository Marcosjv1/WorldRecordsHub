import { useLocation } from 'react-router-dom'
import RecordTable from '../components/RecordTable'
import { worldRecords } from '../data/records'

/**
 * Página de Récords Mundiales.
 * Muestra la tabla completa de récords con filtro por deporte.
 * Acepta un filtro inicial desde el estado de navegación (React Router).
 */
function Records() {
  // Leer filtro inicial desde el estado de navegación (viene de SportCard)
  const location = useLocation()
  const initialFilter = location.state?.filter || 'todos'

  // Calcular estadísticas para el encabezado
  const totalRecords = worldRecords.length
  const totalCountries = [...new Set(worldRecords.map((r) => r.country))].length
  const latestYear = Math.max(...worldRecords.map((r) => r.year))
  const totalSports = [...new Set(worldRecords.map((r) => r.sport))].length

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
              background: 'rgba(233,69,96,0.15)',
              color: '#e94560',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              border: '1px solid rgba(233,69,96,0.3)',
              marginBottom: '1rem',
            }}
          >
            <i className="bi bi-bar-chart-fill"></i>
            Base de Datos
          </div>
          <h1 className="page-header-title">
            Récords <span>Mundiales</span>
          </h1>
          <p className="page-header-subtitle">
            Los mejores registros históricos en deportes olímpicos
          </p>
        </div>
      </div>

      {/* ── Estadísticas rápidas ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '2rem 0',
        }}
      >
        <div className="container">
          <div className="row g-3 text-center">
            {[
              { icon: 'bi-trophy-fill', value: totalRecords, label: 'Récords Totales', color: '#f5a623' },
              { icon: 'bi-grid-fill', value: totalSports, label: 'Deportes', color: '#e94560' },
              { icon: 'bi-globe', value: totalCountries, label: 'Países', color: '#0f3460' },
              { icon: 'bi-calendar-fill', value: latestYear, label: 'Récord más reciente', color: '#f5a623' },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <i
                    className={`bi ${stat.icon}`}
                    style={{ fontSize: '1.5rem', color: stat.color }}
                  ></i>
                  <span
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tabla de récords ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title mb-2">
            Tabla de <span>Récords</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Usa los filtros para explorar récords por disciplina deportiva
          </p>

          {/* Componente de tabla con filtro */}
          <RecordTable initialFilter={initialFilter} />
        </div>
      </section>

      {/* ── Sección informativa ── */}
      <section
        style={{
          padding: '3rem 0 4rem',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Card: ¿Qué es un récord mundial? */}
            <div className="col-md-6">
              <div
                style={{
                  background: 'linear-gradient(145deg, #16213e, #1e2a45)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(245,166,35,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <i className="bi bi-question-circle-fill" style={{ color: '#f5a623', fontSize: '1.4rem' }}></i>
                </div>
                <h5
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#fff',
                    letterSpacing: '1px',
                    marginBottom: '0.8rem',
                  }}
                >
                  ¿Qué es un Récord Mundial?
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  Un récord mundial es la mejor marca registrada oficialmente en una disciplina deportiva,
                  reconocida por la federación internacional correspondiente. Para ser válido, debe cumplir
                  estrictos requisitos de cronometraje, antidopaje y condiciones de competición.
                </p>
              </div>
            </div>

            {/* Card: Federaciones */}
            <div className="col-md-6">
              <div
                style={{
                  background: 'linear-gradient(145deg, #16213e, #1e2a45)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(233,69,96,0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <i className="bi bi-building-fill" style={{ color: '#e94560', fontSize: '1.4rem' }}></i>
                </div>
                <h5
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#fff',
                    letterSpacing: '1px',
                    marginBottom: '0.8rem',
                  }}
                >
                  Federaciones Internacionales
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    'World Athletics',
                    'World Aquatics',
                    'UCI (Ciclismo)',
                    'IWF (Pesas)',
                    'FIG (Gimnasia)',
                    'COI',
                  ].map((fed, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.8rem',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {fed}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Records
