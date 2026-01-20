import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";
import logo from '../assets/logo_sf.png'
import Alumnos from "./admin/Alumnos";
import Profesores from "./admin/Profesores";
import Gastos from "./admin/Gastos";
import Disciplinas from "./admin/Disciplinas";
import Servicios from "./admin/Servicios";

export default function Admin() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  console.log("Guardado en localStorage:", localStorage.getItem("usuarioLogueado"));

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <AdminSidebar />
      </aside>

      <main className="admin-content">
        <Routes>
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="profesores" element={<Profesores />} />
          <Route path="gastos" element={<Gastos />} />
          <Route path="disciplinas" element={<Disciplinas />} />
          <Route path="servicios" element={<Servicios />} />
        </Routes>
      </main>
    </div>
  )
}
