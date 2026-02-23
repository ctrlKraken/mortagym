import { useState } from "react";
import Swal from "sweetalert2";

export default function Reagendar() {

    const fechaInscripcion = new Date("2026-02-5");

    const [misTurnos] = useState([
        { dia: "2026-02-20", hora: "10:00" },
        { dia: "2026-02-23", hora: "10:00" },
        { dia: "2026-02-25", hora: "10:00" },
        { dia: "2026-02-27", hora: "10:00" },
    ]);

    const esMiTurno = (dia, hora) =>
        misTurnos.some(
            (t) => t.dia === dia && t.hora === hora
        );

    const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
    
    /* Calendario */

    const fechaFin = new Date(fechaInscripcion);
    fechaFin.setMonth(fechaFin.getMonth() + 1);
    fechaFin.setDate(fechaFin.getDate() - 1);

    const HORARIO_INICIO = 9;
    const HORARIO_FIN = 22;

    const horas = Array.from(
        { length: HORARIO_FIN - HORARIO_INICIO },
        (_, i) => `${HORARIO_INICIO + i}:00`
    );

    const [fechaBase, setFechaBase] = useState(new Date());

    const obtenerSemana = (fechaReferencia) => {
        //const hoy = new Date();
        const diaSemana = fechaReferencia.getDay() || 7;
        const lunes = new Date(fechaReferencia);
        lunes.setDate(fechaReferencia.getDate() - diaSemana + 1);

        return Array.from({ length: 5 }, (_, i) => {
            const d = new Date(lunes);
            d.setDate(lunes.getDate() + i);
            return d;
        });
    };

    const semana = obtenerSemana(fechaBase);

    const cambiarSemana = (dias) => {
        setFechaBase((prevFecha) => {

            const nuevaFecha = new Date(prevFecha);
            nuevaFecha.setDate(prevFecha.getDate() + dias);
            if (
                nuevaFecha >= fechaInscripcion &&
                nuevaFecha <= fechaFin
            ) {
                return nuevaFecha;
            }
            return prevFecha;
        });
    };

    const diaPasado = (fechaISO) => {
        const [y, m, d] = fechaISO.split("-").map(Number);
        const fecha = new Date(y, m - 1, d);

        const hoyLocal = new Date();
        hoyLocal.setHours(0, 0, 0, 0);

        return fecha < hoyLocal;
    };

    const horaPasadaHoy = (fechaISO, hora) => {
        const ahora = new Date();
        const [h] = hora.split(":");

        if (fechaISO !== formatearFecha(ahora)) return false;

        return parseInt(h) <= ahora.getHours();

    };

    const [turnosOcupados] = useState([
        { dia: "2026-01-28", hora: "10:00" },
        { dia: "2026-01-29", hora: "14:00" },
    ]);
    
    const formatearFecha = (date) =>{
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    };

    const estaOcupado = (dia, hora) =>
        turnosOcupados.some(
            (t) => t.dia === dia && t.hora === hora
    );
    const estaBloqueado = (fechaISO, hora) => {
            return (
                diaPasado(fechaISO) ||
                horaPasadaHoy(fechaISO, hora)
            );
        };

    const confirmarCambioTurno = ({ anterior, nuevo }) => {
        Swal.fire({
            title: "Cambiar turno",
            html: `
                <p><strong>De:</strong> ${anterior.fecha} ${anterior.hora}</p>
                <p><strong>A:</strong> ${nuevo.fecha} ${nuevo.hora}</p>
                `,
            text: "¿Querés cambiar solo por este día o todos los turnos de la semana?",
            icon: "question",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Solo este día",
            denyButtonText: "Toda la semana",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#0093D8",
            denyButtonColor: "#A54E9E",
            cancelButtonColor: "#6c757d"
        }).then((result) => {
            if (result.isConfirmed) {
            
            console.log("Cambiar solo este día", anterior, nuevo);
            } else if (result.isDenied) {
            
            console.log("Cambiar toda la semana", anterior, nuevo);
            }
        });
    };

    return(
        <div className="pages-section reagendar">
            <h5 className="card-title mb-3">Reagendar Turno</h5>
            <div className="d-flex justify-content-between mb-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => cambiarSemana(-7) }
                >
                    ← anterior
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => cambiarSemana(7) }
                >
                    siguiente →
                </button>
            </div>

            <table className="table table-bordered text-center align-middle tabla-perfiles">
                <thead className="table-light">
                    <tr className="a">
                        <th>Hora</th>
                        {semana.map((dia) => (
                            <th key={dia}>
                                {dia.toLocaleDateString("es-AR", {
                                    weekday: "short",
                                    day: "numeric",
                                })}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {horas.map((hora) => (
                    <tr key={hora}>
                        <td>{hora}</td>
                        {semana.map((dia) => {
                            const fecha = formatearFecha(dia);
                            const ocupado = estaOcupado(fecha, hora);
                            const bloqueado = estaBloqueado(fecha, hora);
                            const miTurno = esMiTurno(fecha, hora);

                            return (
                                <td
                                    key={fecha + hora}
                                    className={
                                        turnoSeleccionado?.fecha === fecha &&
                                        turnoSeleccionado?.hora === hora
                                            ? "mi-turno seleccionado"
                                            : miTurno
                                            ? "mi-turno"
                                            : bloqueado
                                            ? "bloqueado"
                                            : ocupado
                                            ? "ocupado"
                                            : "disponible"
                                    }
                                    onClick={() => {
                                        if (miTurno) {
                                            setTurnoSeleccionado({ fecha, hora });
                                        } 
                                        else if (
                                            turnoSeleccionado &&
                                            !ocupado &&
                                            !bloqueado
                                        ) {
                                            confirmarCambioTurno({
                                            anterior: turnoSeleccionado,
                                            nuevo: { fecha, hora }
                                            });
                                        }
                                    }}
                                >
                                {miTurno
                                    ? "Tu turno"
                                    : bloqueado
                                    ? "No disponible"
                                    : ocupado
                                    ? "Ocupado"
                                    : "Disponible"}
                                </td>
                            );
                        })}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};