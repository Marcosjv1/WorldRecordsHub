/**
 * Servicio para consumir TheSportsDB API
 * URL base: https://www.thesportsdb.com/api/v1/json/3/
 * API gratuita, sin necesidad de API key
 */

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3'

/**
 * Busca atletas/jugadores por nombre
 * @param {string} name - Nombre del atleta a buscar
 * @returns {Promise<Array>} - Lista de atletas encontrados
 */
export async function searchPlayers(name) {
  const response = await fetch(`${BASE_URL}/searchplayers.php?p=${encodeURIComponent(name)}`)
  if (!response.ok) {
    throw new Error(`Error de red: ${response.status}`)
  }
  const data = await response.json()
  // La API devuelve null si no hay resultados
  return data.player || []
}

/**
 * Obtiene todos los deportes disponibles en la API
 * @returns {Promise<Array>} - Lista de deportes
 */
export async function getAllSports() {
  const response = await fetch(`${BASE_URL}/all_sports.php`)
  if (!response.ok) {
    throw new Error(`Error de red: ${response.status}`)
  }
  const data = await response.json()
  return data.sports || []
}

/**
 * Busca equipos por nombre de deporte
 * @param {string} sport - Nombre del deporte
 * @returns {Promise<Array>} - Lista de equipos
 */
export async function searchByLeague(sport) {
  const response = await fetch(`${BASE_URL}/search_all_leagues.php?s=${encodeURIComponent(sport)}`)
  if (!response.ok) {
    throw new Error(`Error de red: ${response.status}`)
  }
  const data = await response.json()
  return data.countrys || []
}
