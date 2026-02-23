import { useState } from "react";
import TablaPerfil from "../../components/TablaPerfil";

export default function AlumnosPorProfesor() {

   const [alumnos, setAlumnos] = useState([
      { id: 1, nombre: "Julián Rodríguez", disciplina: "Funcional", horario: "Lunes y Miércoles 08:00 - 09:30", rutina: false},
      { id: 2, nombre: "Sofía Martínez", disciplina: "Musculación", horario: "Martes y Jueves 18:00 - 19:00", rutina: false},
      { id: 3, nombre: "Valentina Gómez", disciplina: "Funcional", horario: "Lunes y Miércoles 08:00 - 09:30", rutina: false},
      { id: 4, nombre: "Mateo Casas", disciplina: "Musculación", horario: "Lunes, Miércoles y Viernes 20:00 - 21:00", rutina: true},
      { id: 5, nombre: "Diego Fernández", disciplina: "Musculación", horario: "Martes y Jueves 18:00 - 19:00", rutina: true},
    ]);

    const columnas = [
    { key: "nombre", label: "Nombre", ordenable: true },
    { key: "disciplina", label: "Disciplina", ordenable: true },
    { key: "horario", label: "Horario", ordenable: false },
    { key: "rutina", label: "Rutina", ordenable: false },
  ];

    const [paginaActual, setPaginaActual] = useState(1);
    const [busqueda, setBusqueda] = useState("");
    const [disciplina, setDisciplina] = useState("");

   const disciplinas = [...new Set(alumnos.map(e => e.disciplina))];

const manejarOrdenar = (key) => {
    setAlumnos([...alumnos].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };

  const filtrados = alumnos.filter(a =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (!disciplina ||
        a.disciplina.toLowerCase().includes(disciplina.toLowerCase()))
    );


    /*const ordenarPor = (criterio) => {
      const listaOrdenada = [...alumnos].sort((a, b) => {
        if (a[criterio] < b[criterio]) return -1;
        if (a[criterio] > b[criterio]) return 1;
        return 0;
      });
      setListadoalumnos(listaOrdenada);
    };*/
    
    return(
      <div className="">

        <div className="row mb-3">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Nombre"
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
              {disciplinas.map(d => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <button className="btn btn-principal btn-horario" hidden>
                    Ver Horario
          </button>

        </div>

          <TablaPerfil
            columnas={columnas}
            datos={filtrados}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            onOrdenar={manejarOrdenar}
          />
        </div>
    );
    
}
