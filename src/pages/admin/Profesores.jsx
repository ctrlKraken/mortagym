import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import ModalAsistencia from "../../components/admin/ModalAsistencia";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Profesores() {
  const navigate = useNavigate();
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profeSeleccionado, setProfeSeleccionado] = useState(null);

  const asistenciasMock = [
    { fecha: "2025-09-01", entrada: "08:15", salida: "09:30" },
    { fecha: "2025-09-03", entrada: "18:00", salida: "19:10" },
    { fecha: "2025-09-05", entrada: "08:10", salida: "09:25" },
  ];

  const [mostrarAsistencia, setMostrarAsistencia] = useState(false);

  const profes = [
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
  const profesPagina = profes.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(profes.length / filasPorPagina);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Profesores</h3>
        <button className="btn btn-admin" onClick={() => navigate("/admin/profesores/nuevoprofesor")}>
          <i className="ri-add-line"></i> Nuevo profesor
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
              <th>Porcentaje</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {profesPagina.map((a) => (
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.dni}</td>
                <td>{a.disciplinas}</td>
                <td>20%</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => {
                      setProfeSeleccionado(a);
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="ri-eye-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => setMostrarAsistencia(true)}
                  >
                    <i className="ri-calendar-2-fill"></i>
                  </button>


                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => navigate("/admin/profesores/nuevoprofesor")}>
                    <i className="ri-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar profesor?",
                        text: "Se eliminará el profesor de los registros",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Sí, eliminar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          console.log("Profesor eliminado:", d.id);
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

      {/* MODALES */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setProfeSeleccionado(null);
        }}
        contentLabel="Detalle del profesor"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Información del profesor</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          {profeSeleccionado && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre completo:</strong> {profeSeleccionado.nombre}
              </li>
              <li className="list-group-item">
                <strong>DNI:</strong> {profeSeleccionado.dni}
              </li>
              <li className="list-group-item">
                <strong>Disciplinas:</strong> {profeSeleccionado.disciplinas}
              </li>
              <li className="list-group-item">
                <strong>Porcentaje:</strong> 20%
              </li>
            </ul>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-admin me-2"> Ver Asistencia </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsModalOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>

      <ModalAsistencia
        isOpen={mostrarAsistencia}
        onClose={() => setMostrarAsistencia(false)}
        asistencias={asistenciasMock}
      />

    </>
  );
}
