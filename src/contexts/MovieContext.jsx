import { createContext, useContext, useEffect, useState } from 'react'

// Contexto que comparte la lista de favoritos con toda la aplicación
const MovieContext = createContext()

// Custom hook para usar el contexto desde cualquier componente
export const useMovieContext = () => useContext(MovieContext)

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  // Al iniciar: recuperar los favoritos guardados en localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) setFavorites(JSON.parse(stored))
  }, [])

  // Cada vez que cambian los favoritos: guardarlos en localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId)

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
