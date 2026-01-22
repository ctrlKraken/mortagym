import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";

import Alumnos from "./admin/Alumnos";
import Profesores from "./admin/Profesores";
import Gastos from "./admin/Gastos";
import Disciplinas from "./admin/Disciplinas";
import Servicios from "./admin/Servicios";

export default function Admin() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
        <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>

      <main className={`admin-content ${collapsed ? "collapsed" : ""}`}>
        <Routes>
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="profesores" element={<Profesores />} />
          <Route path="gastos" element={<Gastos />} />
          <Route path="disciplinas" element={<Disciplinas />} />
          <Route path="servicios" element={<Servicios />} />
        </Routes>
      </main>
    </div>
  );
}
