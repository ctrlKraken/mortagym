import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../assets/logo_sf.png";
import Modal from 'react-modal';


export default function VerRutina() {

    const [rutinaData, setRutinaData] = useState([
        { id:1, dia: 1, ejercicio: "Bíceps", series: 4, reps: 6, carga: "15KG", 
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:2,  dia: 1, ejercicio: "Piernas", series: 4, reps: 8, carga: "15KG",
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:3, dia: 1, ejercicio: "Pecho", series: 4, reps: 8, carga: "15KG",
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  } },
        { id:4, dia: 1, ejercicio: "Espalda", series: 4, reps: 12, carga: "15KG",
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  }},
        { id:5, dia: 2, ejercicio: "Bíceps", series: 4, reps: 6, carga: "15KG", 
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  } },
        { id:6, dia: 2, ejercicio: "Piernas", series: 4, reps: 8, carga: "15KG", 
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  }},
        { id:7, dia: 3, ejercicio: "Pecho", series: 4, reps: 8, carga: "15KG", 
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  } },
        { id:8, dia: 3, ejercicio: "Espalda", series: 4, reps: 12, carga: "15KG",
             progreso: {
    1: { serie: "", reps: "", carga: "" },
    2: { serie: "", reps: "", carga: "" },
    3: { serie: "", reps: "", carga: "" },
    4: { serie: "", reps: "", carga: "" },
  } }
    ]);
    
    const [filtroDia, setFiltroDia] = useState("mensual");

    const [modoEdicion, setModoEdicion] = useState(false);

    const handleProgresoChange = (id, semana, campo, valor) => {
        setRutinaData((prev) =>
            prev.map((item) => {
            if (item.id !== id) return item;

            return {
                ...item,
                progreso: {
                ...item.progreso,
                [semana]: {
                    ...item.progreso?.[semana],
                    [campo]: valor,
                },
                },
            };
            })
        );
    };


    const rutinaFiltrada =
        filtroDia === "mensual"
        ? rutinaData
        : rutinaData.filter(r => r.dia === Number(filtroDia));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rangoSemana, setRangoSemana] = useState(1);

    const semanasVisibles = {
        1: [1, 2],
        2: [2, 3],
        3: [3, 4],
    }[rangoSemana];


    const guardarProgreso = () => {
        
    };


    const generarPDF = async () => {
        const pdf = new jsPDF("landscape", "pt", "a3");
        pdf.addImage(logo, "PNG", 15, 10, 60, 60);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.text(`Rutina Mensual`, 100, 55);
        const startY = 100;
        const todasLasSemanas = [1, 2, 3, 4]; 

        const head = [
            [
                { content: "RUTINA", colSpan: 5, styles: { halign: "center" } },
                ...todasLasSemanas.map(() => ({
                content: "PROGRESO",
                colSpan: 3,
                styles: { halign: "center" }
                }))
            ],
            [
                "DÍA",
                "EJERCICIO",
                "SERIES",
                "REPETICIONES",
                "CARGA",
                ...todasLasSemanas.flatMap((semana) => ([
                `S${semana} - Serie`,
                `S${semana} - Reps`,
                `S${semana} - Carga`
                ]))
            ]
        ];

        const filas = rutinaData.map((item) => {
            const fila = [
                `Día ${item.dia}`,
                item.ejercicio,
                item.series,
                item.reps,
                item.carga,
            ];
            todasLasSemanas.forEach((semana) => {
                fila.push(
                    item.progreso?.[semana]?.serie || "",
                    item.progreso?.[semana]?.reps || "",
                    item.progreso?.[semana]?.carga || ""
                );
            });
            return fila;

        });

        autoTable(pdf, {
            head: head,
            body: filas,
            startY: startY,
            theme: "grid",
            styles: {
                fontSize: 9,
                cellPadding: { top: 8, bottom: 8, left: 4, right: 4 },
                halign: "center",
                valign: "middle",
            },
            headStyles: {
                fillColor: [32, 104, 190],
                textColor: 255,
                fontStyle: "bold",
            },
            tableWidth: "auto",
            margin: { left: 20, right: 20 },
        }); 
        const blob = pdf.output("blob");
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    }
    
    return(

        <div className="">

            <div className="acciones-rutina d-flex gap-2 mb-4">
                <button className="btn btn-principal w-auto" onClick={generarPDF}>
                   <i class="ri-file-text-line me-1"/>Descargar Rutina
                </button>

                {modoEdicion ? (
                    <div className="d-flex gap-2">
                        <button className="btn btn-success w-auto" onClick={guardarProgreso}>
                        <i className="ri-check-line me-1" />
                        Guardar
                        </button>
                        <button className="btn btn-outline-secondary w-auto" onClick={() => setModoEdicion(false)}>
                        Cancelar
                        </button>
                    </div>
                    ) : (
                    <button className="btn btn-principal w-auto" onClick={() => setModoEdicion(true)}>
                        <i className="ri-pencil-line me-1" />
                        Agregar Progreso
                    </button>
                )}

                <button className="btn btn-principal w-auto" onClick={generarPDF}>
                   <i class="ri-open-arm-fill me-1"/>Calentamiento
                </button>

            </div>
            <div className="row mb-3 align-items-center filtros-rutina">
                <div className="col-md-4">
                    <select 
                        className="form-select"
                        value={filtroDia}
                        onChange={(e) => setFiltroDia(e.target.value)}
                    >
                        <option value="mensual">Rutina Mensual</option>
                        <option value="1">Rutina Día 1</option>
                        <option value="2">Rutina Día 2</option>
                        <option value="3">Rutina Día 3</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={rangoSemana}
                        onChange={(e) => setRangoSemana(Number(e.target.value))}
                    >
                        <option value={1}>Semana 1 y 2</option>
                        <option value={2}>Semana 2 y 3</option>
                        <option value={3}>Semana 3 y 4</option>
                    </select>
                </div>
                <p>Acuerdate de hacer tu ejercicio de Calentamiento</p>
            </div>
{/* */}
            <div className="tabla-container">
                <table className="table table-bordered text-center align-middle tabla-rutinas"  rutinaData={rutinaFiltrada} >
                <thead className="table-head">
                    <tr className="">
                        <th colSpan={5} className="grupo-rutina">
                            <p className="titulo-grupo-rutina">Rutina</p>
                        </th>
                        {semanasVisibles.map((semana) => (
                            <th key={semana} colSpan={3} className="grupo-progreso">
                                <p className="titulo-grupo-progreso">Progreso - Semana {semana}</p>
                            </th>
                        ))}
                    </tr>
                    <tr className="sub-head">
                        <th>Día</th>
                        <th className="">Ejercicio</th>
                        <th className="-">Serie</th>
                        <th className="-">
                            <span className="desktop-label">Repeticiones</span>
                            <span className="mobile-label">Reps</span>
                        </th>
                        <th className="">Carga</th>
                        
                        {semanasVisibles.map((semana) => (
                        <React.Fragment key={semana}>
                            <th>Serie</th>
                            <th>
                                <span className="desktop-label">Repeticiones</span>
                                <span className="mobile-label">Reps</span>
                            </th>
                            <th>Carga</th>
                        </React.Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rutinaFiltrada.map((r, index) => {
                        const filasPorDia = rutinaFiltrada.filter(item => item.dia === r.dia).length;
                        const esPrimerEjercicioDelDia = index === 0 || rutinaFiltrada[index - 1].dia !== r.dia;
                        return (
                            <tr key={index}>
                            {esPrimerEjercicioDelDia && (
                                <td
                                    rowSpan={filasPorDia}
                                    className="grupo-dia"
                                >
                                Día {r.dia}
                                </td>
                            )}
                            <td className="text-start">{r.ejercicio}</td>
                            <td className="">{r.series}</td>
                            <td className="">{r.reps}</td>
                            <td className="">{r.carga}</td>
                            
                            {semanasVisibles.map((semana) => (
                                <React.Fragment key={semana}>
                                <td>
                                    {modoEdicion ? (
                                        <input 
                                            type="number" 
                                            value={r.progreso?.[semana]?.serie || ""}
                                            onChange={(e) => handleProgresoChange(r.id, semana, "serie", e.target.value)}
                                            className="input-progreso form-control form-control-sm"
                                        />
                                    ):(
                                         r.progreso?.[semana]?.serie || ""
                                    )}
                                </td>
                            <td>
                                {modoEdicion ? (
                                    <input 
                                        type="number" 
                                        className="input-progreso"
                                        value={r.progreso?.[semana]?.reps || ""} 
                                        onChange={(e) =>  handleProgresoChange(r.id, semana, "reps", e.target.value)} 
                                    />
                                ):(
                                    r.progreso?.[semana]?.reps || ""
                                )}
                            </td>
                            <td>
                                {modoEdicion ? (
                                    <input 
                                        type="text" 
                                        className="input-progreso"
                                        placeholder="0kg"
                                        value={r.progreso?.[semana]?.carga || ""} 
                                        onChange={(e) => handleProgresoChange(r.id, semana, "carga", e.target.value)} 
                                    />
                                ):(
                                    r.progreso?.[semana]?.carga || ""
                                )}
                            </td>
                                </React.Fragment>
                            ))}
                            </tr>

                        );
                    })}
                </tbody>
                </table>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Progreso"
                    className="modal-react"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Progreso</h5>
                        <button type="button" className="close"
                            onClick={() => setIsModalOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div className="modal-body">
                            <p className="text-muted my-3">Semana 1</p>
                             <form onSubmit={guardarProgreso}>

                                <div className="mb-3">
                                    <label className="form-label">Series</label>
                                    <input type="number" className="form-control" id="" placeholder="0" required/>
                                </div>
                                <div className="mb-3">
                                <label for="" className="form-label">Repeticiones</label>
                                    <input type="number" className="form-control" id="" placeholder="0" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Peso</label>
                                    <input type="text" className="form-control" id="" placeholder="0" required/>
                                </div>

                        <div className="modal-footer px-0">
                            <button type="button" className="btn btn-secondary me-2" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                            <button type="submit" className="btn btn-principal" >Guardar</button>
                        </div>                  
                        </form>
                    </div>
                </Modal>      
            </div>
        </div>
    );
}
