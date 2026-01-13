import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";
import logo from '../assets/logo_sf.png'

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
        <h2>Dashboard</h2>
        <p>Contenido del panel</p>
      </main>
    </div>
  )
}
