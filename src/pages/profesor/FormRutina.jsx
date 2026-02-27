import {useState, useEffect} from "react";
import { ejercicios } from "../../data/ejercicios";

import '../../styles/Profesor.css'

export default function FormRutina() {

    const alumnos = ["Julián Rodríguez","Sofía Martínez","Lucas Ferrero", "Valentina Gómez"];

    const musculos = [...new Set(ejercicios.map(e => e.musculo))];

    const [rutina, setRutina] = useState([
        {
            dia: 1,
            ejercicios: [
            {
                musculo: "",
                ejercicio: "",
                series: 0,
                repeticiones: 0,
                peso: 0
            }
            ]
        }
    ]);

    const diasCliente = 3;

    const agregarEjercicio = (diaIndex) => {
        setRutina(prev =>
            prev.map((d, i) =>
            i === diaIndex
                ? {
                    ...d,
                    ejercicios: [
                    ...d.ejercicios,
                    {
                        musculo: "",
                        ejercicio: "",
                        series: 0,
                        repeticiones: 0,
                        peso: 0
                    }
                    ]
                }
                : d
            )
        );
    };

    useEffect(() => {
        const diasIniciales = Array.from({ length: diasCliente }, (_, i) => ({
            dia: i + 1,
            ejercicios: [
            {
                musculo: "",
                ejercicio: "",
                series: 0,
                repeticiones: 0,
                peso: 0
            }
            ]
        }));

        setRutina(diasIniciales);
    }, [diasCliente]);

    const actualizarCampo = (diaIndex, ejIndex, campo, valor) => {
        setRutina(prev =>
            prev.map((dia, i) =>
            i === diaIndex
                ? {
                    ...dia,
                    ejercicios: dia.ejercicios.map((ej, j) =>
                    j === ejIndex ? { ...ej, [campo]: valor } : ej
                    )
                }
                : dia
            )
        );
    };

    return(
        <div>
            <form className="card p-4 shadow-sm" >
                <h4 className="fw-bold mb-4 text-center">Cargar rutina</h4>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <label className="form-label">Alumno</label>
                        <select className="form-select" id="">
                            {alumnos.map((a) => (
                                <option key={a} value={a} translate="no">
                                {a}
                                </option>
                            ))}
                        </select>
                    </div>
                     <div className="col-md-6">
                        <label className="form-label">Patologías</label>
                        <input type="text" disabled className="form-control input-patologias" 
                            value="No presenta patologías"
                            placeholder="0"/>
                    </div>
                </div>
                {rutina.map((dia, diaIndex) => {
                    const collapseId = `flush-collapse-${diaIndex}`;
                    const headingId = `flush-heading-${diaIndex}`;
                    return(
                        <div key={dia.dia} className="mb-4">
                            <div className="accordion accordion-flush rutina-accordion" id="accordionRutina">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={headingId}>
                                    <button 
                                        className={`accordion-button ${diaIndex !== 0 ? "collapsed" : ""}`}
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#${collapseId}`} aria-expanded={diaIndex === 0 ? "true" : "false"} aria-controls={collapseId}>
                                        Dia de Rutina: {dia.dia}
                                    </button>
                                    </h2>
                                    <div 
                                        id={collapseId}
                                        className={`accordion-collapse collapse ${diaIndex === 0 ? "show" : ""}`}
                                        aria-labelledby={headingId}
                                        data-bs-parent="#accordionRutina"
                                    >
                                    <div className="accordion-body">
                                        {dia.ejercicios.map((ej, ejIndex) => {
                                            const ejerciciosFiltrados = ejercicios.filter(e => e.musculo === ej.musculo);
                                            return(
                                                <div key={ejIndex}  className="row g-3 mb-3 align-items-end">
                                                    <div className="col-12 col-lg-4">
                                                        <label for="" className="col col-form-label">Músculo</label>
                                                        <select 
                                                            className="form-select" id=""
                                                            value={ej.musculo}
                                                            onChange={(e) => 
                                                                actualizarCampo(diaIndex, ejIndex, "musculo", e.target.value)}
                                                        >
                                                            <option value="">Selecciona un músculo</option>
                                                            {musculos.map((m) => (
                                                                <option key={m} value={m} translate="no">{m}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-lg-4">
                                                        <label for="" className="col col-form-label">Ejercicio</label>
                                                        <select className="form-select" 
                                                            disabled={!ej.musculo}  
                                                            value={ej.ejercicio}onChange={(e) =>
                                                                actualizarCampo(diaIndex, ejIndex, "ejercicio", e.target.value)
                                                                }>
                                                            <option value="">
                                                                {ej.musculo ? "Elige el ejercicio" : "Primero elige un músculo"}
                                                            </option>
                                                            {ejerciciosFiltrados.map((ej, index) => (
                                                                <option key={index} value={ej.nombre} translate="no">
                                                                {ej.nombre}
                                                                </option>
                                                            ))}
                                                        </select>
                                                
                                                    </div>
                                                    <div className="col-4 col-md-2 col-lg-1">
                                                        <label for="" className="form-label">Series</label>
                                                        <input type="number" className="form-control" 
                                                            value={ej.series}
                                                            onChange={(e) =>
                                                            actualizarCampo(diaIndex, ejIndex, "series", e.target.value)}
                                                        placeholder="0"/>
                                                    </div>
                                                    <div className="col-4 col-md-2 col-lg-1">
                                                 
                                                    <label className="form-label">Reps</label>
                                                        <input type="number" className="form-control" 
                                                            value={ej.repeticiones}
                                                            onChange={(e) =>
                                                            actualizarCampo(diaIndex, ejIndex, "repeticiones", e.target.value)
                                                            }
                                                            placeholder="0"/>
                                                    </div>
                                                    <div className="col-4 col-md-2 col-lg-1">
                                                        <label for="" className="form-label">Peso</label>
                                                        <input type="number" className="form-control"
                                                            value={ej.peso}
                                                            onChange={(e) =>
                                                            actualizarCampo(diaIndex, ejIndex, "peso", e.target.value)
                                                            }
                                                            placeholder="0"/>
                                                    </div>
                                                </div>
                                            );                           
                                            
                                        })}
                                        <div className="d-flex justify-content-start gap-2">
                                            <button type="button" className="btn btn-ejercicio"
                                            onClick={() => agregarEjercicio(diaIndex)}>
                                                + Ejercicio
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}               
                <div className="d-flex flex-column flex-md-row justify-content-end gap-2">
                    <button type="reset" className="btn btn-outline-secondary">
                        Limpiar
                    </button>
                    <button type="submit" className="btn btn-success">
                        GUARDAR RUTINA
                    </button>
                </div>
            </form>
        </div>
    );
}