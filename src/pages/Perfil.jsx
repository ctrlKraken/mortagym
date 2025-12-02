import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profesor() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  console.log("Guardado en localStorage:", localStorage.getItem("usuarioLogueado"));


  return (
    <div className="container perfil mt-5">

      {/* Encabezado */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Hola, {usuario?.nombre}</h2>

        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <p className="fs-5 mt-3">
              {usuario?.cuotaAlDia ? (
                <span className="badge bg-success p-2 fs-6">✅ Cuota al día</span>
              ) : (
                <span className="badge bg-danger p-2 fs-6">❌ Cuota vencida</span>
              )}
            </p>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <p className="fs-5 mt-3">
              {usuario?.fichaMedica ? (
                <span className="badge bg-success p-2 fs-6">✅ Presento Ficha Médica</span>
              ) : (
                <span className="badge bg-danger p-2 fs-6">❌ Falta Ficha Médica</span>
              )}
            </p>
          </div>
        </div>


        <p className="fs-5">
          <strong>Turnos restantes:</strong>{" "}
          <span className="text-primary">{usuario?.turnosRestantes}</span>
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4 justify-content-center">

        {/* Card Actividades */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-1 text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h4 className="card-title fw-bold mb-3">Mis actividades</h4>
                <p className="card-text text-muted mb-4">
                  Ver actividades en las que estás inscripto.
                </p>
              </div>
              <button className="btn btn-principal w-75 mx-auto my-auto">
                Ver actividades
              </button>
            </div>
          </div>
        </div>

        {/* Card Rutinas */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-1 text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h4 className="card-title fw-bold mb-3">Mis rutinas</h4>
                <p className="card-text text-muted mb-4">
                  Descargá tu plan de entrenamiento personalizado.
                </p>
              </div>
              <button className="btn btn-principal w-75 mx-auto my-auto">
                Descargar rutina
              </button>
            </div>
          </div>
        </div>

        {/* Card Horarios */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-1 text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h4 className="card-title fw-bold mb-3">Mis horarios</h4>
                <p className="card-text text-muted mb-4">
                  Consultá y reservá tus próximos horarios de entrenamiento.
                </p>
              </div>
              <button className="btn btn-principal w-75 mx-auto" onClick={() => navigate("/horarios")}>
                Ver horarios
              </button>
              <button className="btn btn-principal w-75 mx-auto mt-2" onClick={() => navigate("/horarios")}>
                Reservar horarios
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
