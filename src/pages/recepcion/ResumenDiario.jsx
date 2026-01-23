import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_sf.png";
import TablaMovimientos from "../../components/admin/TablaMovimientos"; 
// ajustá la ruta si tu componente está en otro lado

export default function ResumenDiario() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      {/* Header */}
      <div className="text-center mb-4">
        <img src={logo} alt="Morta Gym" className="hero-logo mb-3" />
        <h2 className="fw-bold">Resumen del día</h2>
      </div>

      {/* Botón volver */}
      <div className="mb-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>
      </div>

      {/* Tabla */}
      <div className="card shadow-sm">
        <div className="card-body">
          <TablaMovimientos />
        </div>
      </div>

    </div>
  );
}
