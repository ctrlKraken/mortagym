import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Servicios() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [modoNuevo, setModoNuevo] = useState(false);

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

  const [formServicio, setFormServicio] = useState({
    nombre: "",
    descripcion: "",
    extra: "",
    redes: "",
    activo: true,
  });


  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Servicios</h3>
        <button
          className="btn btn-admin"
          onClick={() => {
            setModoNuevo(true);
            setFormServicio({
              nombre: "",
              descripcion: "",
              extra: "",
              redes: "",
              activo: true,
            });
            setIsModalOpen(true);
          }}
        >
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
                      setModoNuevo(false);
                      setServicioSeleccionado(s);
                      setFormServicio({
                        nombre: s.nombre,
                        descripcion: s.descripcion,
                        extra: s.extra,
                        redes: s.redes,
                        activo: s.activo,
                      });
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="ri-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Deshabilitar servicio?",
                        text: "El servicio dejará de estar disponible en la página web",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Sí, deshabilitar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          console.log("Servicio deshabilitado:", s.id);
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
          setServicioSeleccionado(null);
        }}
        contentLabel="Editar servicio"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">
            {modoNuevo ? "Nuevo servicio" : "Editar servicio"}
          </h5>

          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={formServicio.nombre}
              onChange={(e) =>
                setFormServicio({ ...formServicio, nombre: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows="3"
              value={formServicio.descripcion}
              onChange={(e) =>
                setFormServicio({ ...formServicio, descripcion: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Extra</label>
            <input
              type="text"
              className="form-control"
              value={formServicio.extra}
              onChange={(e) =>
                setFormServicio({ ...formServicio, extra: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Redes sociales</label>
            <input
              type="text"
              className="form-control"
              value={formServicio.redes}
              onChange={(e) =>
                setFormServicio({ ...formServicio, redes: e.target.value })
              }
            />
          </div>

        </div>


        <div className="modal-footer">
          <button className="btn btn-secondary me-2" onClick={() => setIsModalOpen(false)}>
            Cerrar
          </button>
          <button
            className="btn btn-admin"
            onClick={() => {
              if (modoNuevo) {
                console.log("Nuevo servicio:", formServicio);
              } else {
                console.log("Editar servicio:", formServicio);
              }
              setModoNuevo(false);
              setIsModalOpen(false);
            }}

          >
            Guardar cambios
          </button>
        </div>

      </Modal>
    </>
  );
}
