import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Disciplinas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalActividadOpen, setIsModalActividadOpen] = useState(false);
  const [disciplinaSeleccionada, setDisciplinaSeleccionada] = useState(null);
  const [modoNuevo, setModoNuevo] = useState(false);

  const [formDisciplina, setFormDisciplina] = useState({
    nombre: "",
    descripcion: "",
    profesor: "",
    cupoMaximo: "",
    alumnosActuales: 0,
    activo: true,
  });

  const [formActividad, setFormActividad] = useState({
    nombre: "",
    profesor: "",
    cupoMaximo: "",
    alumnosActuales: 0,
    activo: true,
  });

  const [modalPrecios, setModalPrecios] = useState(false);
  const [modalHorarios, setModalHorarios] = useState(false);
  const [editandoPrecios, setEditandoPrecios] = useState(false);
  const [editandoHorarios, setEditandoHorarios] = useState(false);

  const [precios, setPrecios] = useState(null);
  const [horarios, setHorarios] = useState([]);

  const disciplinas = [
    {
      id: 1,
      nombre: "Natación",
      descripcion: "Clases de natación para todas las edades y niveles.",
      precio: "$30000",
      activo: true,
    },
    {
      id: 2,
      nombre: "Funcional",
      descripcion: "Entrenamiento funcional de alta intensidad.",
      precio: "$60000",
      activo: true,
    },
    {
      id: 3,
      nombre: "Pilates",
      descripcion: "Ejercicios de fortalecimiento y flexibilidad.",
      precio: "$45000",
      activo: false,
    },
  ];

  const actividades = [
    {
      id: 1,
      disciplinaId: 1,
      nombre: "Pileta libre",
      profesor: "Carlos Gómez",
      cupoMaximo: 30,
      alumnosActuales: 24,
      activo: true,
    },
    {
      id: 2,
      disciplinaId: 1,
      nombre: "Aquagym",
      profesor: "Laura Fernández",
      cupoMaximo: 20,
      alumnosActuales: 18,
      activo: true,
    },
    {
      id: 3,
      disciplinaId: 2,
      nombre: "Funcional mañanas",
      profesor: "María López",
      cupoMaximo: 15,
      alumnosActuales: 15,
      activo: false,
    },
  ];

  const preciosMock = {
    1: {
      semanal: { 1: 8000, 2: 12000, 3: 16000, 4: 19000, 5: 22000, 6: 25000 },
      porDia: 3500,
    },
    2: {
      semanal: { 1: 7000, 2: 11000, 3: 15000, 4: 18000, 5: 21000, 6: 24000 },
      porDia: 3000,
    },
  };

  const horariosMock = {
    1: [
      { dia: "Lunes", hora: "18:00" },
      { dia: "Miércoles", hora: "18:00" },
      { dia: "Viernes", hora: "18:00" },
    ],
    2: [
      { dia: "Martes", hora: "19:00" },
      { dia: "Jueves", hora: "19:00" },
    ],
  };

  const filasPorPagina = 5;
  const inicio = (paginaActual - 1) * filasPorPagina;
  const disciplinasPagina = disciplinas.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(disciplinas.length / filasPorPagina);

  const actividadesFiltradas = actividades.filter(
    (a) => a.disciplinaId === disciplinaSeleccionada?.id
  );

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Gestión de Disciplinas</h3>
        <button
          className="btn btn-admin"
          onClick={() => {
            setModoNuevo(true);
            setFormDisciplina({
              nombre: "",
              descripcion: "",
              profesor: "",
              cupoMaximo: "",
              alumnosActuales: 0,
              activo: true,
            });
            setIsModalOpen(true);
          }}
        >
          <i className="ri-add-line"></i> Nueva disciplina
        </button>
      </div>

      {/* TABLA DISCIPLINAS */}
      <div className="table-responsive">
        <table className="table table-hover align-middle table-disciplinas">
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Activo</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {disciplinasPagina.map((d) => (
              <tr key={d.id} onClick={() => setDisciplinaSeleccionada(d)}>
                <td>{d.nombre}</td>
                <td>{d.descripcion}</td>
                <td>{d.precio}</td>
                <td>
                  <span className={`badge ${d.activo ? "bg-success" : "bg-danger"}`}>
                    {d.activo ? "Sí" : "No"}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDisciplinaSeleccionada(d);
                      setPrecios(preciosMock[d.id]);
                      setEditandoPrecios(false);
                      setModalPrecios(true);
                    }}
                  >
                    <i className="ri-money-dollar-circle-line"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModoNuevo(false);
                      setDisciplinaSeleccionada(d);
                      setFormDisciplina({
                        nombre: d.nombre,
                        descripcion: d.descripcion,
                        profesor: "",
                        cupoMaximo: "",
                        alumnosActuales: 0,
                        activo: d.activo,
                      });
                      setIsModalOpen(true);
                    }}
                  >
                    <i className="ri-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      Swal.fire({
                        title: "¿Deshabilitar disciplina?",
                        text: "La disciplina dejará de estar disponible",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Sí, deshabilitar",
                        cancelButtonText: "Cancelar",
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
              <button className="nav-link" onClick={() => setPaginaActual(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ACTIVIDADES */}
      {disciplinaSeleccionada && (
        <>
          <div className="d-flex justify-content-between mt-4 mb-2">
            <h4>Actividades de {disciplinaSeleccionada.nombre}</h4>
            <button
              className="btn btn-admin"
              onClick={() => {
                setModoNuevo(true);
                setFormActividad({
                  nombre: "",
                  profesor: "",
                  cupoMaximo: "",
                  alumnosActuales: 0,
                  activo: true,
                });
                setIsModalActividadOpen(true);
              }}
            >
              <i className="ri-add-line"></i> Nueva actividad
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle table-disciplinas">
              <thead className="table-light">
                <tr>
                  <th>Nombre</th>
                  <th>Profesor</th>
                  <th>Cupo máx.</th>
                  <th>Alumnos</th>
                  <th>Activo</th>
                  <th className="text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {actividadesFiltradas.map((a) => (
                  <tr key={a.id}>
                    <td>{a.nombre}</td>
                    <td>{a.profesor}</td>
                    <td>{a.cupoMaximo}</td>
                    <td>{a.alumnosActuales}</td>
                    <td>
                      <span className={`badge ${a.activo ? "bg-success" : "bg-danger"}`}>
                        {a.activo ? "Sí" : "No"}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-secondary me-1"
                        onClick={() => {
                          setHorarios(horariosMock[a.id] || []);
                          setEditandoHorarios(false);
                          setModalHorarios(true);
                        }}
                      >
                        <i className="ri-time-line"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-secondary me-1"
                        onClick={() => {
                          setModoNuevo(false);
                          setFormActividad(a);
                          setIsModalActividadOpen(true);
                        }}
                      >
                        <i className="ri-pencil-fill"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          Swal.fire({
                            title: "¿Eliminar actividad?",
                            text: "La actividad se eliminará de los registros",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#dc3545",
                            confirmButtonText: "Sí, eliminar",
                            cancelButtonText: "Cancelar",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              console.log("Actividad eliminada:", a.id);
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
        </>
      )}

      {/* MODAL DISCIPLINAS */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">
            {modoNuevo ? "Nueva disciplina" : "Editar disciplina"}
          </h5>
          <button className="close" onClick={() => setIsModalOpen(false)}>
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body mt-2">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              value={formDisciplina.nombre}
              onChange={(e) =>
                setFormDisciplina({ ...formDisciplina, nombre: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows="2"
              value={formDisciplina.descripcion}
              onChange={(e) =>
                setFormDisciplina({ ...formDisciplina, descripcion: e.target.value })
              }
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Precio</label>
              <input
                type="text"
                className="form-control"
                value={formDisciplina.precio || ""}
                onChange={(e) =>
                  setFormDisciplina({ ...formDisciplina, precio: e.target.value })
                }
              />
            </div>

            <div className="col-md-6 mb-3 d-flex align-items-center">
              <div className="form-check form-switch mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formDisciplina.activo}
                  onChange={(e) =>
                    setFormDisciplina({ ...formDisciplina, activo: e.target.checked })
                  }
                />
                <label className="form-check-label ms-2">
                  {formDisciplina.activo ? "Activo" : "Inactivo"}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary me-2" onClick={() => setIsModalOpen(false)}>
            Cancelar
          </button>
          <button className="btn btn-admin" onClick={() => setIsModalOpen(false)}>
            Guardar
          </button>
        </div>
      </Modal>

      {/* MODAL ACTIVIDADES */}
      <Modal
        isOpen={isModalActividadOpen}
        onRequestClose={() => setIsModalActividadOpen(false)}
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">
            {modoNuevo ? "Nueva actividad" : "Editar actividad"}
          </h5>
          <button className="close" onClick={() => setIsModalActividadOpen(false)}>
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body mt-2">
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              value={formActividad.nombre}
              onChange={(e) =>
                setFormActividad({ ...formActividad, nombre: e.target.value })
              }
            />
          </div>

          {/* Profesor */}
          <div className="mb-3">
            <label className="form-label">Profesor</label>
            <input
              className="form-control"
              value={formActividad.profesor}
              onChange={(e) =>
                setFormActividad({ ...formActividad, profesor: e.target.value })
              }
            />
          </div>

          {/* Cupo y alumnos */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Cupo máximo</label>
              <input
                type="number"
                className="form-control"
                value={formActividad.cupoMaximo}
                onChange={(e) =>
                  setFormActividad({ ...formActividad, cupoMaximo: e.target.value })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Alumnos actuales</label>
              <input
                type="number"
                className="form-control"
                value={formActividad.alumnosActuales}
                onChange={(e) =>
                  setFormActividad({
                    ...formActividad,
                    alumnosActuales: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Toggle activo */}
          <div className="mb-3 d-flex align-items-center">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={formActividad.activo}
                onChange={(e) =>
                  setFormActividad({
                    ...formActividad,
                    activo: e.target.checked,
                  })
                }
              />
              <label className="form-check-label ms-2">
                {formActividad.activo ? "Activo" : "Inactivo"}
              </label>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary me-2"
            onClick={() => setIsModalActividadOpen(false)}
          >
            Cancelar
          </button>

          <button
            className="btn btn-admin"
            onClick={() => {
              console.log("Guardar actividad:", formActividad);
              setIsModalActividadOpen(false);
            }}
          >
            Guardar
          </button>
        </div>
      </Modal>

      {/* MODAL PRECIOS */}
      <Modal
        isOpen={modalPrecios}
        onRequestClose={() => setModalPrecios(false)}
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Precios – {disciplinaSeleccionada?.nombre}</h5>
          <button className="close" onClick={() => setModalPrecios(false)}>
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body mt-2">
          {precios &&
            Object.entries(precios.semanal).map(([dias, valor]) => (
              <div className="row mb-2" key={dias}>
                <div className="col-md-6">
                  <label>{dias} día(s) por semana</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    value={valor}
                    disabled={!editandoPrecios}
                    onChange={(e) =>
                      setPrecios({
                        ...precios,
                        semanal: {
                          ...precios.semanal,
                          [dias]: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary me-2" onClick={() => setModalPrecios(false)}>
            Cerrar
          </button>
          <button
            className="btn btn-admin"
            onClick={() => setEditandoPrecios(!editandoPrecios)}
          >
            {editandoPrecios ? "Guardar cambios" : "Editar"}
          </button>
        </div>
      </Modal>

      {/* MODAL HORARIOS */}
      <Modal
        isOpen={modalHorarios}
        onRequestClose={() => setModalHorarios(false)}
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">Horarios</h5>
          <button className="close" onClick={() => setModalHorarios(false)}>
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body mt-2">
          {horarios.map((h, index) => (
            <div className="row mb-2" key={index}>
              <div className="col">
                <input
                  className="form-control"
                  value={h.dia}
                  disabled={!editandoHorarios}
                  onChange={(e) => {
                    const copia = [...horarios];
                    copia[index].dia = e.target.value;
                    setHorarios(copia);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="time"
                  className="form-control"
                  value={h.hora}
                  disabled={!editandoHorarios}
                  onChange={(e) => {
                    const copia = [...horarios];
                    copia[index].hora = e.target.value;
                    setHorarios(copia);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary me-2" onClick={() => setModalHorarios(false)}>
            Cerrar
          </button>
          <button
            className="btn btn-admin"
            onClick={() => setEditandoHorarios(!editandoHorarios)}
          >
            {editandoHorarios ? "Guardar cambios" : "Editar"}
          </button>
        </div>
      </Modal>
    </>
  );
}