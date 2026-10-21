// Peticiones a la API de TMDB (https://developer.themoviedb.org/docs)
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

// Base de las imágenes: tamaño w500 para los pósters
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

// Función común: hace la petición y lanza un error si la respuesta no es correcta
async function fetchFromApi(path, params = {}) {
  if (!API_KEY) {
    throw new Error('Falta la API Key: añade VITE_TMDB_API_KEY al archivo .env')
  }

  const query = new URLSearchParams({ api_key: API_KEY, language: 'es-ES', ...params })
  const response = await fetch(`${BASE_URL}${path}?${query}`)

  if (!response.ok) {
    throw new Error(`Error al conectar con TMDB (código ${response.status})`)
  }

  const data = await response.json()
  return data.results
}

export function getPopularMovies() {
  return fetchFromApi('/movie/popular')
}

export function searchMovies(query) {
  return fetchFromApi('/search/movie', { query })
}
