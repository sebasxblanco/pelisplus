import { Link, NavLink } from 'react-router'
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Explorador de películas
      </Link>
      <div className="navbar-links">
        {/* NavLink añade la clase "active" al enlace de la página actual */}
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
