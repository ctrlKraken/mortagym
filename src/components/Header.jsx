import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo_sf.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Morta Gym logo"
            height="85"     
            className="me-2"
          />
          Morta Gym</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/actividades">Actividades</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/horarios">Horarios</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Ingresar</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
