import { useState } from 'react'
import { searchPlayers } from '../services/sportsApi'

function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleKeyDown = async (e) => {
    if (e.key !== 'Enter' || !query.trim()) return
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const players = await searchPlayers(query.trim())
      setResults(players)
    } catch (err) {
      setError('No se pudo conectar con la API.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-wrapper">

      <div className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            <span>Buscar</span> Atletas
          </h1>
        </div>
      </div>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Escribe el nombre de un atleta y presiona Enter..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {loading && (
            <div className="status-box">
              <div className="big-spinner"></div>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Buscando...</p>
            </div>
          )}

          {error && !loading && (
            <div className="error-box">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <p>{error}</p>
            </div>
          )}

          {searched && !loading && !error && results.length === 0 && (
            <div className="status-box">
              <p>No se encontraron atletas para <strong style={{ color: '#f5a623' }}>"{query}"</strong></p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="row g-4">
              {results.map((player) => (
                <div key={player.idPlayer} className="col-lg-4 col-md-6">
                  <div className="player-card">
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
          )}

        </div>
      </section>
    </div>
  )
}

export default Search
