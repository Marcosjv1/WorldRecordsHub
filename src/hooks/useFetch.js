import { useState, useEffect } from 'react'

/**
 * Hook personalizado para manejar peticiones a APIs.
 * Maneja los estados: loading, error y data.
 *
 * @param {Function} fetchFn - Función async que hace la petición
 * @param {Array} deps - Dependencias para re-ejecutar (como useEffect)
 * @returns {{ data, loading, error, refetch }}
 */
function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      setError(err.message || 'Ocurrió un error al obtener los datos.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (fetchFn) {
      execute()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error, refetch: execute }
}

export default useFetch
