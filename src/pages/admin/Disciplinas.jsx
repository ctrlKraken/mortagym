import { useState } from "react";
import Modal from "react-modal";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Disciplinas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disciplinaSeleccionada, setDisciplinaSeleccionada] = useState(null);

  const disciplinas = [
    {
      id: 1,
      nombre: "Natación",
      descripcion: "Clases de natación para todas las edades y niveles.",
      profesor: "Carlos Gómez",
      cupoMaximo: 30,
      alumnosActuales: 24,
      activo: true,
    },
    {
      id: 2,
      nombre: "Funcional",
      descripcion: "Entrenamiento funcional de alta intensidad.",
      profesor: "Laura Fernández",
      cupoMaximo: 20,
      alumnosActuales: 18,
      activo: true,
    },
    {
      id: 3,
      nombre: "Pilates",
      descripcion: "Ejercicios de fortalecimiento y flexibilidad.",
      profesor: "María López",
      cupoMaximo: 15,
      alumnosActuales: 15,
      activo: false,
    },
  ];

  const filasPorPagina = 5;
  const inicio = (paginaActual - 1) * filasPorPagina;
  const disciplinasPagina = disciplinas.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(disciplinas.length / filasPorPagina);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Disciplinas</h3>
        <button className="btn btn-admin">
          <i className="ri-add-line"></i> Nueva disciplina
        </button>
      </div>

      {/* TABLA */}
      <div className="table-responsive">
        <table className="table table-hover align-middle table-disciplinas">
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Profesor</th>
              <th>Cupo máx.</th>
              <th>Alumnos</th>
              <th>Activo</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {disciplinasPagina.map((d) => (
              <tr key={d.id}>
                <td>{d.nombre}</td>
                <td>{d.descripcion}</td>
                <td>{d.profesor}</td>
                <td className="text-center">{d.cupoMaximo}</td>
                <td className="text-center">{d.alumnosActuales}</td>
                <td>
                  <span
                    className={`badge ${d.activo ? "bg-success" : "bg-danger"}`}
                  >
                    {d.activo ? "Sí" : "No"}
                  </span>
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-outline-secondary me-1">
                    <i className="ri-money-dollar-circle-line"></i>
                  </button>

                  <button className="btn btn-sm btn-outline-secondary me-1">
                    <i className="ri-time-line"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={() => {
                      setDisciplinaSeleccionada(d);
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="ri-pencil-fill"></i>
                  </button>

                  <button className="btn btn-sm btn-outline-danger">
                    <i className="ri-close-circle-fill"></i>
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
              className={`nav-item ${
                paginaActual === i + 1 ? "navlink-active" : ""
              }`}
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

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setDisciplinaSeleccionada(null);
        }}
        contentLabel="Editar disciplina"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Editar disciplina</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          {disciplinaSeleccionada && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre:</strong> {disciplinaSeleccionada.nombre}
              </li>
              <li className="list-group-item">
                <strong>Descripción:</strong>{" "}
                {disciplinaSeleccionada.descripcion}
              </li>
              <li className="list-group-item">
                <strong>Profesor:</strong>{" "}
                {disciplinaSeleccionada.profesor}
              </li>
              <li className="list-group-item">
                <strong>Cupo máximo:</strong>{" "}
                {disciplinaSeleccionada.cupoMaximo}
              </li>
              <li className="list-group-item">
                <strong>Alumnos actuales:</strong>{" "}
                {disciplinaSeleccionada.alumnosActuales}
              </li>
              <li className="list-group-item">
                <strong>Activo:</strong>{" "}
                {disciplinaSeleccionada.activo ? "Sí" : "No"}
              </li>
            </ul>
          )}
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => setIsModalOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}
