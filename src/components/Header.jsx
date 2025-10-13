import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo_sf.png'
import { BsBoxArrowInRight } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand header-title" to="/">
            <img
              src={logo}
              alt="Morta Gym logo"
              height="85"
              className="me-2"
            />
          </Link>

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
              <li className="nav-item"><NavLink className="nav-link" to="/actividades">Disciplinas</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/horarios">Horarios</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Ingresar</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="banner-section d-flex align-items-center justify-content-center text-center">
        <h2 className='banner-text fst-italic fw-bold'>Si lo crees lo creas,  <br /> el cambio comienza en vos</h2>
      </section>
    </>

  )
}
