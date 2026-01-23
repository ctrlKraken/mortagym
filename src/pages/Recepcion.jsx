import React, { useState } from "react";
import logo from "../assets/logo_sf.png";
import TablaMovimientos from "../components/admin/TablaMovimientos";
import ModalMovimiento from "../components/admin/ModalMovimiento";
import "../styles/perfiles.css";

export default function Recepcion() {
  const [tabActiva, setTabActiva] = useState("usuarios");

  /* ================= DATOS MOCK (luego API) ================= */

  const [movimientos, setMovimientos] = useState([
    {
      id: 1,
      fecha: "2025-01-17",
      tipo: "Ingreso",
      categoria: "Cuotas",
      descripcion: "Cuota mensual",
      monto: 15000,
    },
    {
      id: 2,
      fecha: "2025-01-17",
      tipo: "Egreso",
      categoria: "Servicios",
      descripcion: "Luz",
      monto: 8000,
    },
  ]);

  const [paginaActual, setPaginaActual] = useState(1);

  /* ================= MODAL ================= */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipoMovimiento, setTipoMovimiento] = useState("");

  const abrirModal = (tipo) => {
    setTipoMovimiento(tipo);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setTipoMovimiento("");
  };

  const registrarMovimiento = (nuevoMovimiento) => {
    setMovimientos((prev) => [
      ...prev,
      { ...nuevoMovimiento, id: Date.now() },
    ]);
  };

  return (
    <div className="container perfil">

      {/* ENCABEZADO */}
      <div hidden className="text-center mb-4">
        <img src={logo} alt="Morta Gym" className="perfil-logo mb-3" />
        <span className="fw-bold fs-2 ms-2">Recepción</span>
      </div>

      {/* TABS */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${tabActiva === "usuarios" ? "active" : ""}`}
            onClick={() => setTabActiva("usuarios")}
          >
            Usuarios
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tabActiva === "caja" ? "active" : ""}`}
            onClick={() => setTabActiva("caja")}
          >
            Caja
          </button>
        </li>
      </ul>

      {/* TAB USUARIOS */}
      {tabActiva === "usuarios" && (
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h4 className="fw-bold mb-3">Usuarios</h4>
            <button className="btn btn-principal w-75 mb-2">
              Inscripción / Renovación
            </button>
            <button className="btn btn-principal w-75 mb-2">
              Ver Listados
            </button>
            <button className="btn btn-principal w-75">
              Molinete
            </button>
          </div>
        </div>
      )}

      {/* TAB CAJA */}
      {tabActiva === "caja" && (
        <>
          {/* BOTONES */}
          <div className="d-flex justify-content-end gap-2 mb-4">
            <button
              className="btn btn-success"
              onClick={() => abrirModal("Ingreso")}
            >
              <i className="ri-add-line me-1"></i>
              Registrar ingreso
            </button>

            <button
              className="btn btn-danger"
              onClick={() => abrirModal("Egreso")}
            >
              <i className="ri-subtract-line me-1"></i>
              Registrar egreso
            </button>
          </div>

          {/* TABLA */}
          <TablaMovimientos
            movimientos={movimientos}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
          />
        </>
      )}

      {/* MODAL */}
      <ModalMovimiento
        isOpen={isModalOpen}
        onClose={cerrarModal}
        tipoMovimiento={tipoMovimiento}
        onSubmit={registrarMovimiento}
      />
    </div>
  );
}
