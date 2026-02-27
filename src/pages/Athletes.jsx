import AthleteCard from '../components/AthleteCard'
import { athletesData } from '../data/athletes'

/**
 * Página de Atletas.
 * Muestra cards simples de atletas con récords mundiales.
 */
function Athletes() {
  return (
    <div className="page-wrapper">
      {/* Encabezado */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            <span>Atletas</span>
          </h1>
        </div>
      </div>

      {/* Grid de atletas */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="row g-4">
            {athletesData.map((athlete) => (
              <div key={athlete.id} className="col-lg-3 col-md-6">
                <AthleteCard athlete={athlete} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Athletes
