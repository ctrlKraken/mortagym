import { NavLink, Outlet } from "react-router-dom";

export default function UsuarioLayout() {
  return (

    <div className="container perfil">
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <NavLink
            to="/perfil/actividad-horario"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Actividades
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/perfil/horario-usuario"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Horarios
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/perfil/ver-rutina"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Rutinas
          </NavLink>
        </li>

      </ul>

      {/* CONTENIDO */}
      <Outlet />
    </div>
  );
}