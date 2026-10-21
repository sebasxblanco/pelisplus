import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'
import '../css/Favorites.css'

function Favorites() {
  const { favorites } = useMovieContext()

  // Mensaje cuando todavía no hay favoritos
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>Todavía no tienes películas favoritas</h2>
        <p>Pulsa el corazón de cualquier película para añadirla aquí.</p>
      </div>
    )
  }

  return (
    <div className="favorites">
      <h2>Mis favoritas ({favorites.length})</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
