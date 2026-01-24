import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-modal";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Alumnos() {
  const navigate = useNavigate();
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const alumnos = [
    {
      id: 1,
      nombre: "Juan Pérez",
      dni: "34567890",
      disciplinas: "Musculación, Natación",
      cuota: true,
      ficha: true,
      matricula: true,
    },
    {
      id: 2,
      nombre: "María López",
      dni: "30123456",
      disciplinas: "Funcional",
      cuota: false,
      ficha: true,
      matricula: false,
    },
    {
      id: 3,
      nombre: "Martin Diaz",
      dni: "28995412",
      disciplinas: "Pilates",
      cuota: false,
      ficha: true,
      matricula: false,
    },
    {
      id: 4,
      nombre: "Laura Rodriguez",
      dni: "45002156",
      disciplinas: "Natación",
      cuota: false,
      ficha: true,
      matricula: true,
    },
    {
      id: 5,
      nombre: "Juan Carlos Chacón",
      dni: "35002465",
      disciplinas: "Funcional, Judo",
      cuota: false,
      ficha: true,
      matricula: false,
    },
    {
      id: 6,
      nombre: "Manuel Muñoz",
      dni: "44895777",
      disciplinas: "Natación",
      cuota: false,
      ficha: true,
      matricula: false,
    },
    {
      id: 7,
      nombre: "Antonio Suarez",
      dni: "20554698",
      disciplinas: "Pilates, Judo",
      cuota: false,
      ficha: true,
      matricula: false,
    },
  ];

  const filasPorPagina = 5; //Colocar el valor real, este es para probar
  const inicio = (paginaActual - 1) * filasPorPagina;
  const alumnosPagina = alumnos.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(alumnos.length / filasPorPagina);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Alumnos</h3>
        <button className="btn btn-admin" onClick={() => navigate("/admin/alumnos/nuevo")}>
          <i className="ri-add-line"></i> Nuevo alumno
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
              <th>Cuota al día</th>
              <th>Ficha médica</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosPagina.map((a) => (
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.dni}</td>
                <td>{a.disciplinas}</td>
                <td>
                  <span className={`badge ${a.cuota ? "bg-success" : "bg-danger"}`}>
                    {a.cuota ? "Sí" : "No"}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${a.ficha ? "bg-success" : "bg-warning text-dark"
                      }`}
                  >
                    {a.ficha ? "Sí" : "Pendiente"}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => {
                      setAlumnoSeleccionado(a);
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="ri-eye-fill"></i>
                  </button>

                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => navigate("/admin/alumnos/nuevo")}>
                    <i className="ri-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar alumno?",
                        text: "Se eliminará el alumno de los registros",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Sí, eliminar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          console.log("Alumno eliminado:", d.id);
                        }
                      });
                    }}
                  >
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
              className={`nav-item ${paginaActual === i + 1 ? "navlink-active" : ""}`}
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
          setAlumnoSeleccionado(null);
        }}
        contentLabel="Detalle del alumno"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Información del alumno</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          {alumnoSeleccionado && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre completo:</strong> {alumnoSeleccionado.nombre}
              </li>
              <li className="list-group-item">
                <strong>DNI:</strong> {alumnoSeleccionado.dni}
              </li>
              <li className="list-group-item">
                <strong>Disciplinas:</strong> {alumnoSeleccionado.disciplinas}
              </li>
              <li className="list-group-item">
                <strong>Cuota al día:</strong>{" "}
                {alumnoSeleccionado.cuota ? "Sí" : "No"}
              </li>
              <li className="list-group-item">
                <strong>Ficha médica al día:</strong>{" "}
                {alumnoSeleccionado.ficha ? "Sí" : "No"}
              </li>
              <li className="list-group-item">
                <strong>Matrícula al día:</strong>{" "}
                {alumnoSeleccionado.matricula ? "Sí" : "No"}
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
