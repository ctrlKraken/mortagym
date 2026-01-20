import { useState } from "react";

export default function AlumnosPorProfesor() {


    const [listadoalumnos, setListadoalumnos] = useState([
      { nombre: "Julián Rodríguez", disciplina: "Funcional", horario: "Lunes y Miércoles 08:00 - 09:30", rutina: "No requerida"},
      { nombre: "Sofía Martínez", disciplina: "Musculación", horario: "Martes y Jueves 18:00 - 19:00", rutina: "No Cargada"},
      { nombre: "Valentina Gómez", disciplina: "Funcional", horario: "Lunes y Miércoles 08:00 - 09:30", rutina: "No requerida"},
      { nombre: "Mateo Casas", disciplina: "Musculación", horario: "Lunes, Miércoles y Viernes 20:00 - 21:00", rutina: "Cargada"},
      { nombre: "Diego Fernández", disciplina: "Musculación", horario: "Martes y Jueves 18:00 - 19:00", rutina: "Cargada"},
    ]);

    const disciplinas = [...new Set(listadoalumnos.map(e => e.disciplina))];

    const ordenarPor = (criterio) => {
      const listaOrdenada = [...listadoalumnos].sort((a, b) => {
        if (a[criterio] < b[criterio]) return -1;
        if (a[criterio] > b[criterio]) return 1;
        return 0;
      });
      setListadoalumnos(listaOrdenada);
    };
    
    return(
        <div className="pages-section cargar-rutina">
          <span className="breadcrumb">Inicio/Alumnos</span>
          <h5 className="titulo-seccion">Alumnos</h5>

          <div className="filtro-alumnos text-center text-md-start my-4">
            <select
              className="form-select d-inline-block w-auto" 
            >
              {disciplinas.map((d) => (
                <option key={d} value={d} translate="no">
                  {d}
                </option>
              ))}
            </select>
            <button className="btn btn-principal btn-horario">
                  Ver Horario
            </button>
          </div>
          <table className="table table-bordered text-center align-middle tabla-horarios">
              <thead className="table-head">
                <tr>
                  <th onClick={() => ordenarPor('nombre')} className="celda-hora">Nombre</th>
                  <th onClick={() => ordenarPor('disciplina')}className="celda-hora">Disciplina</th>
                  <th className="celda-hora">Horario</th>
                  <th className="celda-hora">Rutina</th>
                </tr>
              </thead>
              <tbody>
                {listadoalumnos.map((alumno) => (
                  <tr key={alumno}>
                    <td>
                        <div className="mb-1">
                          <p className="nombre-actividad" translate="no">{alumno.nombre}</p>
                        </div>             
                    </td>
                    <td>{alumno.disciplina}</td>
                    <td>{alumno.horario}</td>
                    <td>{alumno.rutina}</td>
                  </tr>
                ))}
                
              </tbody>
          </table>
        </div>
    );
    
}
