/**
 * Componente SportCard - Tarjeta individual de deporte.
 * Muestra imagen, nombre y descripción del deporte.
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
      </div>

      {/* ── Cuerpo de la tarjeta ── */}
      <div className="sport-card-body">
        {/* Nombre del deporte */}
        <h3 className="sport-card-title">{sport.name}</h3>

        {/* Descripción */}
        <p className="sport-card-info">{sport.description}</p>
      </div>
    </div>
  )
}

export default SportCard
