/**
 * Componente AthleteCard - Tarjeta individual de atleta.
 * Muestra imagen, nombre, país, récord y año del récord.
 *
 * @param {Object} athlete - Objeto con datos del atleta
 */
function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      {/* ── Imagen del atleta ── */}
      <div className="athlete-card-img-wrapper">
        <img
          src={athlete.image}
          alt={`Atleta: ${athlete.name}`}
          className="athlete-card-img"
          loading="lazy"
          onError={(e) => {
            // Imagen de respaldo si falla la carga
            e.target.src =
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
          }}
        />

        {/* Overlay degradado */}
        <div className="athlete-card-overlay"></div>

        {/* Badge de país */}
        <div className="athlete-card-country">
          <span role="img" aria-label={athlete.country}>
            {athlete.flag}
          </span>
          {athlete.country}
        </div>

        {/* Tag de deporte */}
        <div className="athlete-card-sport-tag">{athlete.sport}</div>
      </div>

      {/* ── Cuerpo de la tarjeta ── */}
      <div className="athlete-card-body">
        {/* Nombre del atleta */}
        <h3 className="athlete-card-name">{athlete.name}</h3>

        {/* Evento */}
        <p className="athlete-card-event">
          <i className="bi bi-flag-fill me-1" style={{ color: '#e94560' }}></i>
          {athlete.event}
        </p>

        {/* Récord */}
        <div className="athlete-card-record-label">
          <i className="bi bi-trophy-fill me-1"></i>
          Récord Mundial
        </div>
        <div className="athlete-card-record-value">{athlete.record}</div>

        {/* Año y medallas */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-2">
          <span className="athlete-card-year">
            <i className="bi bi-calendar-fill"></i>
            {athlete.year}
          </span>
          <span
            style={{
              background: 'rgba(245,166,35,0.12)',
              color: '#f5a623',
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: '50px',
              border: '1px solid rgba(245,166,35,0.25)',
            }}
          >
            <i className="bi bi-award-fill me-1"></i>
            {athlete.medals}
          </span>
        </div>

        {/* Biografía corta */}
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            marginTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '1rem',
          }}
        >
          {athlete.bio}
        </p>
      </div>
    </div>
  )
}

export default AthleteCard
