import { useState } from 'react'
import AthleteCard from '../components/AthleteCard'
import { athletesData } from '../data/athletes'

/**
 * Página de Atletas.
 * Muestra cards de atletas con récords mundiales.
 * Incluye filtro por deporte usando estado de React.
 */
function Athletes() {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('todos')

  // Obtener deportes únicos para los filtros
  const sportFilters = [
    { key: 'todos', label: 'Todos' },
    ...Array.from(new Set(athletesData.map((a) => a.sportKey))).map((key) => ({
      key,
      label: athletesData.find((a) => a.sportKey === key)?.sport || key,
    })),
  ]

  // Filtrar atletas según el deporte seleccionado
  const filteredAthletes =
    activeFilter === 'todos'
      ? athletesData
      : athletesData.filter((a) => a.sportKey === activeFilter)

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
              background: 'rgba(245,166,35,0.15)',
              color: '#f5a623',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              border: '1px solid rgba(245,166,35,0.3)',
              marginBottom: '1rem',
            }}
          >
            <i className="bi bi-person-fill"></i>
            Leyendas del Deporte
          </div>
          <h1 className="page-header-title">
            <span>Atletas</span> Récord
          </h1>
          <p className="page-header-subtitle">
            Los deportistas que han reescrito la historia olímpica
          </p>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">

          {/* Título de sección */}
          <h2 className="section-title mb-2">
            Nuestros <span>Campeones</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Atletas que han alcanzado lo imposible y dejado su huella en la historia
          </p>

          {/* ── Filtros por deporte ── */}
          <div className="filter-bar mb-4">
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

          {/* Contador de resultados */}
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.88rem',
              marginBottom: '2rem',
              letterSpacing: '1px',
            }}
          >
            Mostrando{' '}
            <span style={{ color: '#f5a623', fontWeight: 700 }}>
              {filteredAthletes.length}
            </span>{' '}
            atleta{filteredAthletes.length !== 1 ? 's' : ''}
          </p>

          {/* ── Grid de cards de atletas ── */}
          {filteredAthletes.length > 0 ? (
            <div className="row g-4">
              {filteredAthletes.map((athlete, index) => (
                <div
                  key={athlete.id}
                  className={`col-lg-3 col-md-6 animate-fade-in animate-delay-${(index % 5) + 1}`}
                >
                  <AthleteCard athlete={athlete} />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              <i
                className="bi bi-person-x"
                style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}
              ></i>
              <p>No se encontraron atletas para este deporte.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Athletes
