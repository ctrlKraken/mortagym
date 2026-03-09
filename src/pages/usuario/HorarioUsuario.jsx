
import { useNavigate } from "react-router-dom";

export default function HorarioUsuario() {

    const navigate = useNavigate();

    const horarios = [
        {
        dia: "Lunes",
        clases: [{ hora: "10:00", actividad: "Musculación"}], },
        {
        dia: "Martes",
        clases: [{ hora: "08:00", actividad: "Natación"}], 
        },
            {
        dia: "Miércoles",
        clases: [{ hora: "10:00", actividad: "Musculación"}], },
        {
        dia: "Jueves",
        clases: [{ hora: "08:00", actividad: "Natación"}], 
        },
            {
        dia: "Viernes",
        clases: [{ hora: "10:00", actividad: "-"}], },
        {
        dia: "Sábado",
        clases: [{ hora: "09:00", actividad: "-"}], 
        },
    ];

    const todasLasHoras = [
    ...new Set(
      horarios.flatMap((d) => d.clases.map((c) => c.hora))
    ),
    ].sort((a, b) => a.localeCompare(b));

    const dias = horarios.map((d) => d.dia);

    const getClase = (dia, hora) => {
        const diaData = horarios.find((d) => d.dia === dia);
        if (!diaData) return [];
        let clases = diaData.clases.filter((c) => c.hora === hora);
        return clases;  
    };

    return(
        <>
          <div className="d-flex justify-content-center justify-content-md-end gap-2 mb-4" translate="no">
              
              <button 
                  className="btn btn-principal btn-reagendar" 
                  onClick={() => navigate("/perfil/reagendar-turno")}>
                  <i className="ri-calendar-event-line me-2"></i>
                  Cambiar Turno
              </button>
          </div>
          <div className="tabla-container">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-head">
                <tr>
                  <th className="">Hora</th>
                  {dias.map((dia) => (
                    <th key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {todasLasHoras.map((hora) => (
                  <tr key={hora}>
                    <td className="fw-bold">{hora}</td>
                    {dias.map((dia) => {
                      const actividades = getClase(dia, hora);
                      return (
                    
                      <td key={`${dia}-${hora}`}>
                        {actividades.length > 0 ? (
                            actividades.map((actividad, index) => (     
                              <div key={index} className="mb-1">
                                <p className="nombre-actividad" translate="no">{actividad.actividad}</p>
                                <small className="horario-real">
                                  {actividad.horarioReal}
                                </small>
                                {actividad.profe && (
                                  <p className="profesor text-muted small">{actividad.profe}</p>
                                )}
                              </div>
                            ))
                          ) : (
                          "-"                   
                        )}
                      </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
    );
    
};
