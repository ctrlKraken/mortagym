import { NavLink } from "react-router-dom";
import "../styles/AdminSidebar.css";
import logo from "../assets/logo_sf.png";

export default function AdminSidebar() {
  return (
    <>
      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="Morta Gym" />
        <span>Administrador</span>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">
        <NavLink to="/admin/alumnos" className="sidebar-item">
          <i className="ri-user-3-line"></i>
          <span>Alumnos</span>
        </NavLink>

        <NavLink to="/admin/profesores" className="sidebar-item">
          <i className="ri-team-line"></i>
          <span>Profesores</span>
        </NavLink>

        <NavLink to="/admin/gastos" className="sidebar-item">
          <i className="ri-money-dollar-circle-line"></i>
          <span>Gastos</span>
        </NavLink>

        <NavLink to="/admin/disciplinas" className="sidebar-item">
          <i class="ri-run-fill"></i>
          <span>Disciplinas</span>
        </NavLink>

        <NavLink to="/admin/servicios" className="sidebar-item">
          <i className="ri-boxing-line"></i>
          <span>Servicios</span>
        </NavLink>

        <NavLink hidden to="/admin/molinete" className="sidebar-item">
          <i className="ri-door-lock-line"></i>
          <span>Molinete</span>
        </NavLink>
      </nav>
    </>
  );
}
