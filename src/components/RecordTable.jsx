import { worldRecords } from '../data/records'

/**
 * Componente RecordTable - Tabla de récords mundiales.
 * Muestra todos los récords sin filtros.
 */
function RecordTable() {
  return (
    <div className="records-section">
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
          {worldRecords.length}
        </span>{' '}
        récord{worldRecords.length !== 1 ? 's' : ''}
      </p>

      {/* ── Tabla de récords ── */}
      <div className="records-table-wrapper">
        {worldRecords.length > 0 ? (
          <table className="records-table">
            <thead>
              <tr>
                <th>Deporte</th>
                <th>Prueba</th>
                <th>Récord</th>
                <th>Atleta</th>
                <th>País</th>
                <th>Año</th>
              </tr>
            </thead>
            <tbody>
              {worldRecords.map((record, index) => (
                <tr key={record.id}>
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {record.sport}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {record.event}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: '#f5a623', fontWeight: 600 }}>
                      {record.record}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                      {record.athlete}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {record.country}
                    </span>
                  </td>
                  <td>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {record.year}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.4)' }}>
            <p>No se encontraron récords.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecordTable
