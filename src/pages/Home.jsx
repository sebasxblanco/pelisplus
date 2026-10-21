import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getPopularMovies, searchMovies } from '../services/api'
import '../css/Home.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Hace una petición a la API y actualiza la lista, el indicador de carga y el error
  async function loadMovies(request) {
    setLoading(true)
    setError(null)
    try {
      const results = await request()
      setMovies(results)
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  // Al montar Home: cargar las películas populares
  useEffect(() => {
    loadMovies(getPopularMovies)
  }, [])

  function handleSearch(event) {
    event.preventDefault() // evita que el formulario recargue la página
    const query = searchQuery.trim()
    // Con la búsqueda vacía se vuelve a las populares
    if (query) loadMovies(() => searchMovies(query))
    else loadMovies(getPopularMovies)
  }

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar películas por título..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      {loading && <div className="loading">Cargando películas...</div>}

      {error && <div className="error-message">{error}</div>}

      {!loading && !error && movies.length === 0 && (
        <p className="no-results">No se han encontrado películas.</p>
      )}

      {!loading && !error && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
