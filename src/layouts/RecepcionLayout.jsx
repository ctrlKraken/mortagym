import { NavLink, Outlet } from "react-router-dom";

export default function RecepcionLayout() {
  return (
    <div className="container perfil">

      {/* TABS */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <NavLink
            to="/recepcion/usuarios"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Usuarios
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/recepcion/caja"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Caja
          </NavLink>
        </li>
      </ul>

      {/* CONTENIDO */}
      <Outlet />
    </div>
  );
}
