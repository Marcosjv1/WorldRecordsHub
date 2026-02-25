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
      <div style={{ backgroundColor: '#16213e', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '2rem 0' }}>
        <div className="container">
          <div className="row g-3 text-center">
            {[
              { icon: 'bi-trophy-fill', value: totalRecords, label: 'Récords' },
              { icon: 'bi-grid-fill', value: totalSports, label: 'Deportes' },
              { icon: 'bi-globe', value: totalCountries, label: 'Países' },
              { icon: 'bi-calendar-fill', value: latestYear, label: 'Año más reciente' },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <i className={`bi ${stat.icon}`} style={{ fontSize: '1.4rem', color: '#f5a623', display: 'block', marginBottom: '4px' }}></i>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
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

    </div>
  )
}

export default Records
