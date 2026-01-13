import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo_sf.png'
import { BsBoxArrowInRight } from "react-icons/bs";

import '../styles/Header.css'

export default function Navbar({ mostrarBanner = true }) {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <div className="container-fluid mx-2">
          <Link className="navbar-brand header-title" to="/">
            <img
              src={logo}
              alt="Morta Gym logo"
              height="85"
              className="me-2"
            />
          </Link>

          <button
            className={`navbar-toggler custom-toggler ${menuAbierto ? "open" : ""}`}
            type="button"


            aria-controls="navbarNav"
            aria-expanded={menuAbierto}
            aria-label="Toggle navigation"

            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <span className="navbar-toggler-icon"></span>
            <span className="close-icon">&times;</span>
          </button>

          <div className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`} id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/" onClick={cerrarMenu}>Inicio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/actividades" onClick={cerrarMenu}>Disciplinas</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/horarios" onClick={cerrarMenu}>Horarios</NavLink></li>
              <li className="nav-item" >
                <NavLink className="nav-link nav-btn px-4" to="/login" onClick={cerrarMenu}>
                  <BsBoxArrowInRight className="me-2" /> Ingresar
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {mostrarBanner && (
        <section className="banner-section">
          <h2 className="banner-text">
            Si lo crees lo creas, <br /> el cambio comienza en vos
          </h2>
        </section>
      )}
    </>

  )
}
