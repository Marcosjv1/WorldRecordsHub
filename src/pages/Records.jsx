import RecordTable from '../components/RecordTable'
import { worldRecords } from '../data/records'

/**
 * Página de Récords Mundiales.
 * Muestra la tabla completa de récords sin filtros.
 */
function Records() {
  return (
    <div className="page-wrapper">
      {/* ── Encabezado de página ── */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            Récords <span>Mundiales</span>
          </h1>
        </div>
      </div>

      {/* ── Tabla de récords ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title mb-2">
            Tabla de <span>Récords</span>
          </h2>
          <div className="section-divider"></div>

          {/* Componente de tabla sin filtros */}
          <RecordTable />
        </div>
      </section>

    </div>
  )
}

export default Records
