import { useState } from 'react'
import { searchPlayers } from '../services/sportsApi'

/**
 * Página de Búsqueda de Atletas.
 * Consume TheSportsDB API para buscar atletas en tiempo real.
 */
function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setSearched(true)

    try {
      const players = await searchPlayers(query.trim())
      setResults(players)
    } catch (err) {
      setError('No se pudo conectar con la API. Intenta de nuevo más tarde.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setError(null)
    setSearched(false)
  }

  return (
    <div className="page-wrapper">

      {/* Encabezado */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            <span>Buscar</span> Atletas
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">

          {/* Formulario de búsqueda */}
          <div className="search-box">
            <form onSubmit={handleSearch}>
              <div className="search-input-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Ej: Usain Bolt, Michael Phelps, Simone Biles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="search-btn"
                  disabled={loading || !query.trim()}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Buscando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-search me-1"></i>
                      Buscar
                    </>
                  )}
                </button>
              </div>
            </form>

            {searched && (
              <button className="clear-btn" onClick={handleClear}>
                <i className="bi bi-x-circle me-1"></i>
                Limpiar búsqueda
              </button>
            )}
          </div>

          {/* Sugerencias iniciales */}
          {!searched && !loading && (
            <div className="status-box">
              <i className="bi bi-search" style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)' }}></i>
              <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Escribe el nombre de un atleta y presiona Buscar
              </p>
              <div className="suggestions">
                {['Usain Bolt', 'Michael Phelps', 'Simone Biles', 'Eliud Kipchoge'].map((name) => (
                  <button
                    key={name}
                    className="suggestion-chip"
                    onClick={() => setQuery(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cargando */}
          {loading && (
            <div className="status-box">
              <div className="big-spinner"></div>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>
                Buscando atletas...
              </p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="error-box">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <div>
                <strong>Error al conectar con la API</strong>
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* Sin resultados */}
          {searched && !loading && !error && results.length === 0 && (
            <div className="status-box">
              <i className="bi bi-person-x" style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)' }}></i>
              <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>
                No se encontraron atletas para <strong style={{ color: '#f5a623' }}>"{query}"</strong>
              </p>
            </div>
          )}

          {/* Resultados */}
          {!loading && results.length > 0 && (
            <>
              <p className="results-count">
                <span style={{ color: '#f5a623', fontWeight: 700 }}>{results.length}</span>{' '}
                resultado{results.length !== 1 ? 's' : ''} para "{query}"
              </p>

              <div className="row g-4">
                {results.map((player) => (
                  <div key={player.idPlayer} className="col-lg-4 col-md-6">
                    <div className="player-card">

                      {/* Imagen */}
                      <div className="player-card-img-wrapper">
                        {player.strThumb || player.strCutout ? (
                          <img
                            src={player.strThumb || player.strCutout}
                            alt={player.strPlayer}
                            className="player-card-img"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div
                          className="player-card-img-placeholder"
                          style={{ display: player.strThumb || player.strCutout ? 'none' : 'flex' }}
                        >
                          <i className="bi bi-person-fill"></i>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="player-card-body">
                        <h5 className="player-name">{player.strPlayer}</h5>

                        {player.strSport && (
                          <span className="player-sport-tag">{player.strSport}</span>
                        )}

                        <a
                          href={`https://www.thesportsdb.com/player/${player.idPlayer}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="player-link"
                        >
                          Ver perfil completo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  )
}

export default Search
