import { Link } from 'react-router-dom'

/**
 * Componente SportCard - Tarjeta individual de deporte.
 * Muestra imagen, nombre, descripción y botón para ver récords.
 *
 * @param {Object} sport - Objeto con datos del deporte
 */
function SportCard({ sport }) {
  return (
    <div className="sport-card">
      {/* ── Imagen del deporte ── */}
      <div className="sport-card-img-wrapper">
        <img
          src={sport.image}
          alt={`Deporte: ${sport.name}`}
          className="sport-card-img"
          loading="lazy"
          onError={(e) => {
            // Imagen de respaldo si falla la carga
            e.target.src =
              'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80'
          }}
        />
        {/* Overlay degradado */}
        <div className="sport-card-overlay"></div>

        {/* Ícono del deporte */}
        <div className="sport-card-icon">
          <span role="img" aria-label={sport.name}>
            {sport.icon}
          </span>
        </div>
      </div>

      {/* ── Cuerpo de la tarjeta ── */}
      <div className="sport-card-body">
        {/* Nombre del deporte */}
        <h3 className="sport-card-title">{sport.name}</h3>

        {/* Descripción */}
        <p className="sport-card-info">{sport.description}</p>

        {/* Contador de récords */}
        <div className="sport-card-records-count">
          <i className="bi bi-trophy-fill"></i>
          {sport.recordsCount} récords mundiales
        </div>

        {/* Highlights / disciplinas */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {sport.highlights.map((h, index) => (
            <span
              key={index}
              style={{
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.75rem',
                padding: '2px 10px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Botón ver récords */}
        <Link
          to="/records"
          className="btn-sport"
          state={{ filter: sport.key }}
        >
          <i className="bi bi-bar-chart-fill me-2"></i>
          Ver Récords
        </Link>
      </div>
    </div>
  )
}

export default SportCard
