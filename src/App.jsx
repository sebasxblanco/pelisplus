import { BrowserRouter, Routes, Route } from 'react-router'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  return (
    // El provider envuelve toda la app para que cualquier componente acceda a los favoritos
    <MovieProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </MovieProvider>
  )
}

export default App
