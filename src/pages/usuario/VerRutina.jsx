import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../assets/logo_sf.png";
import Modal from 'react-modal';


export default function VerRutina() {

    const [rutinaData, setRutinaData] = useState([
        { id:1, dia: 1, ejercicio: "Sentadillas con barra", series: 4, reps: 6, carga: "15KG", 
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:2,  dia: 1, ejercicio: "Plancha", series: 4, reps: 8, carga: "15KG",
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:3, dia: 1, ejercicio: "Martillo", series: 4, reps: 8, carga: "15KG",
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:4, dia: 1, ejercicio: "Estocadas", series: 4, reps: 12, carga: "15KG",
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:5, dia: 2, ejercicio: "⁠Prensa", series: 4, reps: 6, carga: "15KG", 
             progreso: {
            1: { serie: "", reps: "", carga: "" },
            2: { serie: "", reps: "", carga: "" },
            3: { serie: "", reps: "", carga: "" },
            4: { serie: "", reps: "", carga: "" },
            }},
        { id:6, dia: 2, ejercicio: "Martillo", series: 4, reps: 8, carga: "15KG", 
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:7, dia: 3, ejercicio: "Estocadas", series: 4, reps: 8, carga: "15KG", 
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }},
        { id:8, dia: 3, ejercicio: "Martillo", series: 4, reps: 12, carga: "15KG",
             progreso: {
                1: { serie: "", reps: "", carga: "" },
                2: { serie: "", reps: "", carga: "" },
                3: { serie: "", reps: "", carga: "" },
                4: { serie: "", reps: "", carga: "" },
            }}
    ]);
    
    const [diaSeleccionado, setDiaSeleccionado] = useState("");
    const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState("");

    const ejerciciosFiltrados = rutinaData.filter(ex => ex.dia === parseInt(diaSeleccionado));

    const diasUnicos = [...new Set(rutinaData.map(item => item.dia))];

    const [filtroDia, setFiltroDia] = useState("mensual");

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

    const [showVideo, setShowVideo] = useState(false);
    const [showEditar, setShowEditar] = useState(false);
    
    const videoUrl = "https://www.youtube.com/embed/a_1gQmdwfUQ?si=zLVVO6sYe4yEKAKk";

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

        <div className="" translate="no">

            <div className="acciones-rutina d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-md-end">
                <button className="btn btn-principal btn-user" onClick={generarPDF}>
                   <i class="ri-file-text-line me-1"/>Descargar
                </button>
                <button className="btn btn-principal btn-user flex" 
                    onClick={() => setShowEditar(true)}>
                    <i className="ri-pencil-line me-1" />
                    + Progreso
                </button>
                <button className="btn btn-principal btn-user-video" 
                    onClick={() => setShowVideo(true)}>
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
            </div>
            <Modal
                isOpen={showVideo} 
                onRequestClose={() => setShowVideo(false)}
                contentLabel="Video Calentamiento"
                className="modal-react"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h5 className="modal-title">Calentamiento</h5>
                    <button type="button" className="close" onClick={() => setShowVideo(false)}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <p>Recuerda hacer tus ejercicios de calentamiento</p>
                    <div className="ratio ratio-16x9">
                        <iframe
                            src={showVideo ? videoUrl : ""}
                            title="Video Ejercicios de Calentamiento"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={() => setShowVideo(false)}>
                        Cerrar
                    </button>
                </div>
            </Modal>
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
                            <span className="desktop-label" translate="no">Repeticiones</span>
                            <span className="mobile-label" translate="no">Reps</span>
                        </th>
                        <th className="">Carga</th> 
                        {semanasVisibles.map((semana) => (
                        <React.Fragment key={semana}>
                            <th>Serie</th>
                            <th>
                                <span className="desktop-label" translate="no">Repeticiones</span>
                                <span className="mobile-label" translate="no">Reps</span>
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
                                    
                                    <input 
                                        type="number" 
                                        value={r.progreso?.[semana]?.serie || ""}
                                        onChange={(e) => handleProgresoChange(r.id, semana, "serie", e.target.value)}
                                        className="input-progreso form-control form-control-sm"
                                    />
                                    
                                </td>
                            <td>
                              
                                    <input 
                                        type="number" 
                                        className="input-progreso"
                                        value={r.progreso?.[semana]?.reps || ""} 
                                        onChange={(e) =>  handleProgresoChange(r.id, semana, "reps", e.target.value)} 
                                    />
                                
                            </td>
                            <td>
                                
                                    <input 
                                        type="text" 
                                        className="input-progreso"
                                        placeholder="0kg"
                                        value={r.progreso?.[semana]?.carga || ""} 
                                        onChange={(e) => handleProgresoChange(r.id, semana, "carga", e.target.value)} 
                                    />
                            
                            </td>
                                </React.Fragment>
                            ))}
                            </tr>
                        );
                    })}
                </tbody>
                </table>
                <Modal
                    isOpen={showEditar}
                    onRequestClose={() => setShowEditar(false)}
                    contentLabel="Progreso"
                    className="modal-react"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-header py-1">
                        <h5 className="modal-title">Agregar Progreso</h5>
                        <button type="button" className="close"
                            onClick={() => setShowEditar(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="filtros-modal row my-3">
                            <div className="col">
                                <select
                                    className="form-select"
                                >
                                    <option value="">Semana 1</option>
                                    <option value="">Semana 2</option>
                                    <option value="">Semana 3</option>
                                    <option value="">Semana 4</option>
                                </select>
                            </div>
                            <div className="col">
                                <select
                                    className="form-select"
                                    value={diaSeleccionado}
                                    onChange={(e) => {
                                        setDiaSeleccionado(e.target.value);
                                        setEjercicioSeleccionado("");
                                    }}
                                >
                                    <option value="">Elegir Día...</option>
                                    {diasUnicos.map(dia => (
                                    <option key={dia} value={dia}>Día {dia}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <select
                            className="form-select"
                            disabled={!diaSeleccionado}
                            value={ejercicioSeleccionado}
                            onChange={(e) => setEjercicioSeleccionado(e.target.value)}
                        >
                            <option value="">{diaSeleccionado ? "Elegir Ejercicio..." : "Primero elige un día"}</option>
                            {ejerciciosFiltrados.map(ex => (
                            <option key={ex.id} value={ex.id}>
                                {ex.ejercicio}
                            </option>
                            ))}
                        </select>
                        <form onSubmit={guardarProgreso} className="mt-3 row">
                            <div className="col-4 col-md-3 mb-3">
                                <label className="form-label">Series</label>
                                <input type="number" className="form-control" id="" placeholder="0" required/>
                            </div>
                            <div className=" col-4 col-md-3 mb-3">
                            <label for="" className="form-label" translate="no">Reps</label>
                                <input type="number" className="form-control" id="" placeholder="0" required/>
                            </div>
                            <div className="col-4 col-md-3 mb-3">
                                <label for="" className="form-label">Peso</label>
                                <input type="text" className="form-control" id="" placeholder="0" required/>
                            </div>
                        <div className="modal-footer px-0">
                            <button type="button" className="btn btn-secondary me-2" onClick={() => setShowEditar(false)}>Cancelar</button>
                            <button type="submit" className="btn btn-success" >Guardar</button>
                        </div>                  
                        </form>
                    </div>
                </Modal>      
            </div>

            
        </div>

        
    );
}
