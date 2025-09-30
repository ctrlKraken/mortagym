// src/components/Navbar.jsx
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Morta Gym</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
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
