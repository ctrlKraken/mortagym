import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const navigate = useNavigate();

  // Datos simulados por ahora
  const usuario = {
    nombre: "Miguel López",
    cuotaAlDia: true,
    turnosRestantes: 3,
  };

  return (
    <div className="container mt-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Hola, {usuario.nombre}</h2>

        <p className="fs-5 mt-3">
          {usuario.cuotaAlDia ? (
            <span className="badge bg-success p-2 fs-6">
              ✅ Cuota al día
            </span>
          ) : (
            <span className="badge bg-danger p-2 fs-6">
              ❌ Cuota vencida
            </span>
          )}
        </p>

        <p className="fs-5">
          <strong>Turnos restantes:</strong>{" "}
          <span className="text-primary">{usuario.turnosRestantes}</span>
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4 justify-content-center">
        {/* Card Rutinas */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm border-1 text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h4 className="card-title fw-bold mb-3">Mis actividades</h4>
                <p className="card-text text-muted mb-4">
                  Ver actividades en las que estas inscripto.
                </p>
              </div>
              <button
                className="btn btn-principal w-75 mx-auto my-auto"
                onClick={() => alert("Descargando rutina...")}
              >
                Ver Actividades
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
              <button
                className="btn btn-principal w-75 mx-auto my-auto"
                onClick={() => alert("Descargando rutina...")}
              >
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
              <button
                className="btn btn-principal w-75 mx-auto"
                onClick={() => navigate("/horarios")}
              >
                Ver horarios
              </button>
              <button
                className="btn btn-principal w-75 mx-auto mt-2"
                onClick={() => navigate("/horarios")}
              >
                Reservar horarios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
