import { useState } from "react";


export default function Reagendar() {

    const HORARIO_INICIO = 9;
    const HORARIO_FIN = 20;

    const horas = Array.from(
        { length: HORARIO_FIN - HORARIO_INICIO },
        (_, i) => `${HORARIO_INICIO + i}:00`
    );

    const obtenerSemanaActual = () => {
        const hoy = new Date();
        const diaSemana = hoy.getDay() || 7;
        const lunes = new Date(hoy);
        lunes.setDate(hoy.getDate() - diaSemana + 1);

        return Array.from({ length: 5 }, (_, i) => {
            const d = new Date(lunes);
            d.setDate(lunes.getDate() + i);
            return d;
        });
    };

    const semana = obtenerSemanaActual();

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

    const [turnosOcupados, setTurnosOcupados] = useState([
        { dia: "2026-01-22", hora: "10:00" },
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
    const crearFechaLocal = (fechaISO, hora) => {
        const [year, month, day] = fechaISO.split("-").map(Number);
        const [h, m] = hora.split(":").map(Number);

        return new Date(year, month - 1, day, h, m);
        };


    return(
        <div className="pages-section reagendar">
            <h5 className="titulo-seccion">Reagendar Turno</h5>
            <table className="table table-bordered text-center align-middle tabla-perfiles">
                <thead className="table-head">
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
                            return (
                                <td
                                    key={fecha + hora}
                                    className={
                                        bloqueado
                                            ? "bloqueado"
                                            : ocupado
                                            ? "ocupado"
                                            : "disponible"
                                    }
                                    onClick={() => {
                                        if (!ocupado && !bloqueado) {
                                        console.log("Reagendar:", fecha, hora);
                                        }
                                    }}
                                >
                                    {bloqueado ? "No disponible" : ocupado ? "Ocupado" : "Disponible"}
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
