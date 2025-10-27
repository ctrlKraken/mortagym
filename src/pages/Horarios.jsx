import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Horarios() {
  const disciplinas = [
    "Musculación",
    "Pilates",
    "Funcional",
    "Spinning",
    "Entrenamiento Deportivo",
    "Natación",
  ];

  const horarios = [
    {
      dia: "Lunes",
      clases: [
        { hora: "07:00", disciplina: "Musculación" },
        { hora: "09:00", disciplina: "Pilates" },
        { hora: "11:00", disciplina: "Funcional" },
        { hora: "14:00", disciplina: "Spinning" },
        { hora: "18:00", disciplina: "Entrenamiento Deportivo" },
        { hora: "20:00", disciplina: "Natación" },
      ],
    },
    {
      dia: "Martes",
      clases: [
        { hora: "07:00", disciplina: "Musculación" },
        { hora: "10:00", disciplina: "Spinning" },
        { hora: "12:00", disciplina: "Pilates" },
        { hora: "17:00", disciplina: "Natación" },
        { hora: "19:00", disciplina: "Funcional" },
      ],
    },
    {
      dia: "Miércoles",
      clases: [
        { hora: "08:00", disciplina: "Pilates" },
        { hora: "09:00", disciplina: "Musculación" },
        { hora: "11:00", disciplina: "Natación" },
        { hora: "18:00", disciplina: "Funcional" },
      ],
    },
    {
      dia: "Jueves",
      clases: [
        { hora: "07:00", disciplina: "Musculación" },
        { hora: "09:00", disciplina: "Spinning" },
        { hora: "12:00", disciplina: "Pilates" },
        { hora: "19:00", disciplina: "Entrenamiento Deportivo" },
      ],
    },
    {
      dia: "Viernes",
      clases: [
        { hora: "08:00", disciplina: "Musculación" },
        { hora: "10:00", disciplina: "Funcional" },
        { hora: "14:00", disciplina: "Pilates" },
        { hora: "18:00", disciplina: "Natación" },
      ],
    },
    {
      dia: "Sábado",
      clases: [
        { hora: "09:00", disciplina: "Spinning" },
        { hora: "10:00", disciplina: "Musculación" },
        { hora: "11:00", disciplina: "Entrenamiento Deportivo" },
      ],
    },
  ];

  const location = useLocation();
  const [filtro, setFiltro] = useState("Todas");

  useEffect(() => {
    if (location.state?.filtro) {
      setFiltro(location.state.filtro);
    }
  }, [location.state]);

  // Obtener todas las horas únicas (ordenadas)
  const todasLasHoras = [
    ...new Set(
      horarios.flatMap((d) => d.clases.map((c) => c.hora))
    ),
  ].sort((a, b) => a.localeCompare(b));

  // Obtener días
  const dias = horarios.map((d) => d.dia);

  // Buscar clase por día y hora
  const getClase = (dia, hora) => {
    const diaData = horarios.find((d) => d.dia === dia);
    if (!diaData) return "";
    const clase = diaData.clases.find((c) => c.hora === hora);
    if (!clase) return "";
    if (filtro !== "Todas" && clase.disciplina !== filtro) return "";
    return clase.disciplina;
  };

  return (
    <section className="pages-section">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
          <h2 className="titulo-pagina mb-3 mb-md-0">Horarios</h2>
          <div className="mb-4 text-center text-md-start">
            <select
              className="form-select d-inline-block w-auto"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            >
              <option value="Todas">Todas las disciplinas</option>
              {disciplinas.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="tabla-container">
          <table className="table table-bordered text-center align-middle tabla-horarios">
            <thead className="table-head">
              <tr>
                <th>Hora</th>
                {dias.map((dia) => (
                  <th key={dia}>{dia}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {todasLasHoras.map((hora) => (
                <tr key={hora}>
                  <td className="fw-bold celda-hora">{hora}</td>
                  {dias.map((dia) => (
                    <td key={`${dia}-${hora}`}>
                      {getClase(dia, hora) || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
