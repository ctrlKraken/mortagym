import { useState } from "react";

export default function Horarios() {
  // ----- Datos simulados -----
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

  // ----- Estado del filtro -----
  const [filtro, setFiltro] = useState("Todas");

  const filtrarClases = (dia) => {
    if (filtro === "Todas") return dia.clases;
    return dia.clases.filter((c) => c.disciplina === filtro);
  };

  // ----- Render -----
  return (
    <section className="pages-section">
      <h2 className="titulo-pagina text-center mb-4">Horarios</h2>

      <div className="text-center mb-4">
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

      <div className="tabla-container">
        <table className="table table-bordered table-striped text-center align-middle tabla-horarios">
          <thead className="table-head">
            <tr>
              <th>Día</th>
              <th>Hora</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((dia) =>
              filtrarClases(dia).map((clase, i) => (
                <tr key={`${dia.dia}-${i}`}>
                  <td>{dia.dia}</td>
                  <td>{clase.hora}</td>
                  <td>{clase.disciplina}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
