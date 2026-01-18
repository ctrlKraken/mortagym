import { useState } from "react";

export default function Profesores() {
  const [paginaActual, setPaginaActual] = useState(1);
  const alumnos = [
    {
      id: 1,
      nombre: "Juan Pérez",
      dni: "34567890",
      disciplinas: "Musculación, Boxeo",
    },
    {
      id: 2,
      nombre: "María López",
      dni: "30123456",
      disciplinas: "Funcional",
    },
  ];

  const filasPorPagina = 15;
  const inicio = (paginaActual - 1) * filasPorPagina;
  const alumnosPagina = alumnos.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(alumnos.length / filasPorPagina);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Profesores</h3>
        <button className="btn btn-admin">
          <i class="ri-add-line"></i>Nuevo profesor
        </button>
      </div>

      {/* TABLA */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Nombre completo</th>
              <th>DNI</th>
              <th>Disciplinas</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosPagina.map((a) => (
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.dni}</td>
                <td>{a.disciplinas}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <i class="ri-eye-fill"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <i class="ri-pencil-fill"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i class="ri-delete-bin-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINACIÓN */}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <li
              key={i}
              className={`nav-item ${paginaActual === i + 1 ? "active" : ""}`}
            >
              <button
                className="nav-link"
                onClick={() => setPaginaActual(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
