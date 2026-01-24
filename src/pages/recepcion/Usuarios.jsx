import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TablaPerfil from "../../components/TablaPerfil";

/* ===== MOCK ===== */

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

const cuposPorDisciplina = {
  Musculación: 30,
  Natación: 20,
  Funcional: 15,
  Pilates: 12,
  Judo: 10,
};

const columnas = [
  { key: "nombre", label: "Nombre", ordenable: true },
  { key: "dni", label: "DNI", ordenable: true },
  { key: "disciplinas", label: "Disciplina", ordenable: false },
  { key: "cuota", label: "Cuota al día", ordenable: true },
  { key: "ficha", label: "Ficha médica", ordenable: false },
];

export default function Usuarios() {
  const navigate = useNavigate();

  const [datos, setDatos] = useState(alumnos);
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const manejarOrdenar = (key) => {
    setDatos([...datos].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };

  useEffect(() => setPaginaActual(1), [busqueda, disciplina]);

  const disciplinasDisponibles = [
    ...new Set(
      alumnos.flatMap(a => a.disciplinas.split(",").map(d => d.trim()))
    ),
  ];

  const filtrados = datos.filter(a =>
    (a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      a.dni.includes(busqueda)) &&
    (!disciplina ||
      a.disciplinas.toLowerCase().includes(disciplina.toLowerCase()))
  );

  const inscriptos = alumnos.filter(a =>
    disciplina
      ? a.disciplinas.toLowerCase().includes(disciplina.toLowerCase())
      : false
  );

  const cupoMaximo = cuposPorDisciplina[disciplina] || 0;
  const cupoDisponible = cupoMaximo - inscriptos.length;

  return (
    <>
      {/* BOTONES */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-perfil" onClick={() => navigate("/recepcion/inscripcion")}>
          <i className="ri-profile-line me-1" /> Inscripción
        </button>

        <button className="btn btn-perfil" onClick={() => navigate("/recepcion/renovacion")}>
          <i className="ri-loop-right-line me-1" /> Renovación
        </button>

        <button className="btn btn-perfil" onClick={() => navigate("/recepcion/molinete")}>
          <i class="ri-lock-unlock-line"></i>
          Molinete
        </button>
      </div>

      {/* FILTROS */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Nombre o DNI"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={disciplina}
            onChange={e => setDisciplina(e.target.value)}
          >
            <option value="">Todas</option>
            {disciplinasDisponibles.map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      {disciplina && (
        <div className="alert info-cupo d-flex justify-content-between align-items-center">
          <span>
            <strong>{disciplina}</strong> —
            {inscriptos.length} inscriptos
          </span>

          <span>
            Cupo: {inscriptos.length}/{cupoMaximo} (
            {cupoDisponible > 0 ? `${cupoDisponible} disponibles` : "Completo"})
          </span>
        </div>
      )}

      <TablaPerfil
        columnas={columnas}
        datos={filtrados}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        onOrdenar={manejarOrdenar}
      />
    </>
  );
}
