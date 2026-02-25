import { useState } from 'react'
import { worldRecords, sportFilters } from '../data/records'

/**
 * Componente RecordTable - Tabla de récords mundiales con filtro por deporte.
 * Usa estado de React para filtrar los récords dinámicamente.
 *
 * @param {string} initialFilter - Filtro inicial (opcional)
 */
function RecordTable({ initialFilter = 'todos' }) {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState(initialFilter)

  // Filtrar récords según el deporte seleccionado
  const filteredRecords =
    activeFilter === 'todos'
      ? worldRecords
      : worldRecords.filter((r) => r.sportKey === activeFilter)

  return (
    <div className="records-section">
      {/* ── Barra de filtros ── */}
      <div className="filter-bar">
        {sportFilters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ── Contador de resultados ── */}
      <p
        style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.88rem',
          marginBottom: '1.5rem',
          letterSpacing: '1px',
        }}
      >
        Mostrando{' '}
        <span style={{ color: '#f5a623', fontWeight: 700 }}>
          {filteredRecords.length}
        </span>{' '}
        récord{filteredRecords.length !== 1 ? 's' : ''}
        {activeFilter !== 'todos' && (
          <span> en {sportFilters.find((f) => f.key === activeFilter)?.label}</span>
        )}
      </p>

      {/* ── Tabla de récords ── */}
      <div className="records-table-wrapper">
        {filteredRecords.length > 0 ? (
          <table className="records-table">
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <i className="bi bi-grid-fill me-2"></i>
                  Deporte
                </th>
                <th>
                  <i className="bi bi-flag-fill me-2"></i>
                  Prueba
                </th>
                <th>
                  <i className="bi bi-trophy-fill me-2"></i>
                  Récord
                </th>
                <th>
                  <i className="bi bi-person-fill me-2"></i>
                  Atleta
                </th>
                <th>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  País
                </th>
                <th>
                  <i className="bi bi-calendar-fill me-2"></i>
                  Año
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr key={record.id}>
                  {/* Número de fila */}
                  <td>
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </td>

                  {/* Deporte */}
                  <td>
                    <span className="record-sport-badge">
                      <span role="img" aria-label={record.sport}>
                        {record.icon}
                      </span>
                      {record.sport}
                    </span>
                  </td>

                  {/* Prueba */}
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {record.event}
                    </span>
                  </td>

                  {/* Récord */}
                  <td>
                    <span className="record-value">{record.record}</span>
                  </td>

                  {/* Atleta */}
                  <td>
                    <span className="record-athlete-name">{record.athlete}</span>
                  </td>

                  {/* País */}
                  <td>
                    <span>
                      <span className="record-country-flag">{record.flag}</span>
                      {record.country}
                    </span>
                  </td>

                  {/* Año */}
                  <td>
                    <span className="record-year-badge">{record.year}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          /* Mensaje cuando no hay resultados */
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <i
              className="bi bi-search"
              style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}
            ></i>
            <p>No se encontraron récords para este deporte.</p>
          </div>
        )}
      </div>

      {/* ── Nota al pie de la tabla ── */}
      <p
        style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.78rem',
          marginTop: '1.5rem',
          letterSpacing: '0.5px',
        }}
      >
        <i className="bi bi-info-circle me-1"></i>
        Datos basados en récords oficiales reconocidos por federaciones internacionales.
        Algunos datos son simulados con coherencia histórica.
      </p>
    </div>
  )
}

export default RecordTable
