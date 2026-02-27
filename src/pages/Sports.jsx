import AthleteCard from '../components/AthleteCard'
import { sportsData } from '../data/sports'
import { athletesData } from '../data/athletes'

/**
 * Página combinada: muestra cada deporte con sus atletas.
 * Sin imagen de deporte — solo fotos de atletas.
 */
function Sports() {
  return (
    <div className="page-wrapper">
      {/* Encabezado */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            <span>Deportes</span> y Atletas
          </h1>
        </div>
      </div>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          {sportsData.map((sport) => {
            // Filtrar atletas que pertenecen a este deporte
            const athletes = athletesData.filter(
              (a) => a.sport === sport.name
            )

            // Solo mostrar deportes que tienen atletas
            if (athletes.length === 0) return null

            return (
              <div key={sport.id} style={{ marginBottom: '3.5rem' }}>
                {/* Nombre y descripción del deporte */}
                <h2
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span style={{ color: '#f5a623' }}>{sport.name}</span>
                </h2>
                <div className="section-divider" style={{ margin: '0 0 1.5rem' }}></div>

                {/* Grid de atletas del deporte (máx. 2) */}
                <div className="row g-4">
                  {athletes.slice(0, 2).map((athlete) => (
                    <div key={athlete.id} className="col-lg-3 col-md-6">
                      <AthleteCard athlete={athlete} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Sports
