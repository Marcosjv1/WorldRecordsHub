const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3'

export async function searchPlayers(name) {
  const res = await fetch(`${BASE_URL}/searchplayers.php?p=${encodeURIComponent(name)}`)
  if (!res.ok) throw new Error('Error en la respuesta de la API')
  const data = await res.json()
  return data.player || []
}
