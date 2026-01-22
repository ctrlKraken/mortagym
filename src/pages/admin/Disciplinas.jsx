import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "../../styles/Admin.css";

Modal.setAppElement("#root");

export default function Disciplinas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const preciosMock = {
    1: { // Natación
      semanal: {
        1: 8000,
        2: 12000,
        3: 16000,
        4: 19000,
        5: 22000,
        6: 25000,
      },
      porDia: 3500,
    },
    2: {
      semanal: {
        1: 7000,
        2: 11000,
        3: 15000,
        4: 18000,
        5: 21000,
        6: 24000,
      },
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
                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={() => {
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
                    onClick={() => {
                      setDisciplinaSeleccionada(d);
                      setHorarios(horariosMock[d.id] || []);
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
                      setDisciplinaSeleccionada(d);
                      setFormDisciplina({
                        nombre: d.nombre,
                        descripcion: d.descripcion,
                        profesor: d.profesor,
                        cupoMaximo: d.cupoMaximo,
                        alumnosActuales: d.alumnosActuales,
                        activo: d.activo,
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
                        title: "¿Deshabilitar disciplina?",
                        text: "La disciplina dejará de estar disponible",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Sí, deshabilitar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          console.log("Disciplina deshabilitada:", d.id);
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
              className={`nav-item ${paginaActual === i + 1 ? "navlink-active" : ""
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

      {/* MODAL DISCIPLINAS */}
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
          <h5 className="modal-title">
            {modoNuevo ? "Nueva disciplina" : "Editar disciplina"}
          </h5>

          <button
            type="button"
            className="close"
            onClick={() => setIsModalOpen(false)}
          >
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

          <div className="mb-3">
            <label className="form-label">Profesor</label>
            <input
              className="form-control"
              value={formDisciplina.profesor}
              onChange={(e) =>
                setFormDisciplina({ ...formDisciplina, profesor: e.target.value })
              }
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Cupo máximo</label>
              <input
                type="number"
                className="form-control"
                value={formDisciplina.cupoMaximo}
                onChange={(e) =>
                  setFormDisciplina({ ...formDisciplina, cupoMaximo: e.target.value })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Alumnos actuales</label>
              <input
                type="number"
                className="form-control"
                value={formDisciplina.alumnosActuales}
                disabled
              />
            </div>
          </div>

        </div>


        <div className="modal-footer">
          <button className="btn btn-secondary me-2" onClick={() => setIsModalOpen(false)}>
            Cancelar
          </button>
          <button
            className="btn btn-admin"
            onClick={() => {
              if (modoNuevo) {
                console.log("Nueva disciplina:", formDisciplina);
              } else {
                console.log("Editar disciplina:", formDisciplina);
              }
              setIsModalOpen(false);
              setModoNuevo(false);
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
          <h5 className="modal-title">
            Precios – {disciplinaSeleccionada?.nombre}
          </h5>
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

          <div className="row mb-2">
            <div className="col-md-6">
              <label>Precio por día</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                value={precios?.porDia || ""}
                disabled={!editandoPrecios}
                onChange={(e) =>
                  setPrecios({ ...precios, porDia: e.target.value })
                }
              />
            </div>

          </div>
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary me-2"
            onClick={() => setModalPrecios(false)}
          >
            Cerrar
          </button>

          <button
            className="btn btn-admin"
            onClick={() => {
              if (editandoPrecios) {
                console.log("Guardar precios:", precios);
              }
              setEditandoPrecios(!editandoPrecios);
            }}
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
          <h5 className="modal-title">
            Horarios – {disciplinaSeleccionada?.nombre}
          </h5>
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
          <button
            className="btn btn-secondary me-2"
            onClick={() => setModalHorarios(false)}
          >
            Cerrar
          </button>

          <button
            className="btn btn-admin"
            onClick={() => {
              if (editandoHorarios) {
                console.log("Guardar horarios:", horarios);
              }
              setEditandoHorarios(!editandoHorarios);
            }}
          >
            {editandoHorarios ? "Guardar cambios" : "Editar"}
          </button>
        </div>
      </Modal>

    </>
  );
}
