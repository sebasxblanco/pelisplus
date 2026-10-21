import { useMovieContext } from '../contexts/MovieContext'
import { IMAGE_URL } from '../services/api'
import '../css/MovieCard.css'

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)

  // El año son los 4 primeros caracteres de la fecha ("2024-05-17")
  const year = movie.release_date ? movie.release_date.slice(0, 4) : 'Sin fecha'

  function handleFavoriteClick() {
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path ? (
          <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
        ) : (
          <div className="no-poster">Sin póster</div>
        )}

        {/* Overlay que aparece al pasar el ratón por encima */}
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            {favorite ? '♥' : '♡'}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default MovieCard
