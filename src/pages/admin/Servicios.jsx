import { useState } from "react";
import Modal from "react-modal";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Servicios() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const servicios = [
    {
      id: 1,
      nombre: "Cafetería Saludable",
      descripcion: "Disfrutá de comidas y snacks saludables diseñados para acompañar tu entrenamiento y cuidar tu nutrición.",
      extra: "Seguinos y conocé nuestros platos:",
      redes: "https://www.instagram.com/xlafuerzaco25/",
      activo: true,
    },
    {
      id: 2,
      nombre: "Revisación Médica",
      descripcion: "Realizá el control médico obligatorio en nuestras instalaciones, requisito indispensable para practicar natación de forma segura.",
      extra: "Lunes, Miércoles y Viernes - 21:00 a 22:00 Hs - Martes y Jueves - 8:00 a 9:00 Hs",
      redes: "",
      activo: true,
    },
    {
      id: 3,
      nombre: "Asesoramiento Nutricional",
      descripcion: "La Lic. en nutrición Andrea Angeloni te ayudará a lograr tus objetivos con un plan alimenticio personalizado.",
      extra: "Martes y Jueves - 14:00 a 18:00 Hs - Turnos al: 2974048254",
      redes: "https://www.instagram.com/nutricionenmovimientoaa/",
      activo: false,
    },
  ];

  const filasPorPagina = 5;
  const inicio = (paginaActual - 1) * filasPorPagina;
  const serviciosPagina = servicios.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(servicios.length / filasPorPagina);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Servicios</h3>
        <button className="btn btn-admin">
          <i className="ri-add-line"></i> Nuevo servicio
        </button>
      </div>

      {/* TABLA */}
      <div className="table-responsive">
        <table className="table table-hover align-middle table-servicios">
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Extra</th>
              <th>Redes sociales</th>
              <th>Activo</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {serviciosPagina.map((s) => (
              <tr key={s.id}>
                <td>{s.nombre}</td>
                <td>{s.descripcion}</td>
                <td>{s.extra}</td>
                <td>{s.redes}</td>
                <td>
                  <span className={`badge ${s.activo ? "bg-success" : "bg-danger"}`}>
                    {s.activo ? "Sí" : "No"}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => {
                      setServicioSeleccionado(s);
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
          setServicioSeleccionado(null);
        }}
        contentLabel="Editar servicio"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Editar servicio</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          {servicioSeleccionado && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre:</strong> {servicioSeleccionado.nombre}
              </li>
              <li className="list-group-item">
                <strong>Descripción:</strong> {servicioSeleccionado.descripcion}
              </li>
              <li className="list-group-item">
                <strong>Extra:</strong> {servicioSeleccionado.extra}
              </li>
              <li className="list-group-item">
                <strong>Redes sociales:</strong> {servicioSeleccionado.redes}
              </li>
              <li className="list-group-item">
                <strong>Activo:</strong>{" "}
                {servicioSeleccionado.activo ? "Sí" : "No"}
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
