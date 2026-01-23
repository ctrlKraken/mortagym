import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../assets/logo_sf.png";

export default function VerRutina() {

    const rutinaData = [
        { ejercicio: "Bíceps", series: 4, reps: 6, carga: "15KG" },
        { ejercicio: "Piernas", series: 4, reps: 8, carga: "15KG" },
        { ejercicio: "Pecho", series: 4, reps: 8, carga: "15KG" },
        { ejercicio: "Espalda", series: 4, reps: 12, carga: "15KG" },
    ];

    const rutinasPorDia = {
        martes: rutinaData,
        jueves: rutinaData,
    };

    const [diaSeleccionado, setDiaSeleccionado] = useState("martes");


    const generarPDF = async () => {
        const pdf = new jsPDF("landscape", "pt", "a4");
        pdf.addImage(logo, "PNG", 15, 10, 60, 60);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.text(`Rutina Mensual`, 100, 55);
        const startY = 100; 
        const columnas = ["EJERCICIO", "SERIES", "REPETICIONES", "CARGA" ];

        const filas = rutinaData.map((item) => [
            item.ejercicio.toUpperCase(),
            item.series,
            item.reps,
            item.carga,
        ]);

        autoTable(pdf, {
            head: [columnas],
            body: filas,
            startY: startY,
            theme: "grid",
            styles: {
                fontSize: 11,
                cellPadding: 5,
                halign: "center",
                valign: "middle",
            },
            headStyles: {
                fillColor: [32, 104, 190],
                textColor: 255,
                fontStyle: "bold",
            },
            columnStyles: {
                0: { halign: "left" }, 
            },
            tableWidth: "auto",
            margin: { left: 20, right: 20 },
        }); 
        
        const blob = pdf.output("blob");
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    }
    
    
    return(

        <div className="pages-section ver-rutina">
            <h5 className="titulo-seccion">Rutina Mensual</h5>
            <div className="filtro-pdf text-center text-md-start my-4">
              <select
                className="form-select d-inline-block w-auto dias-rutina"
                value={diaSeleccionado}
                onChange={(e) => setDiaSeleccionado(e.target.value)}
              >
                {Object.keys(rutinasPorDia).map((dia) => (
                    <option key={dia} value={dia}>
                        {dia.charAt(0).toUpperCase() + dia.slice(1)}
                    </option>
                ))}
                <option translate="no">Rutina Mensual</option>
                <option translate="no">Rutina Día 1</option>
                <option translate="no">Rutina Día 2</option>
              </select>
              <div>
                <button className="btn btn-principal btn-rutina-pdf" onClick={generarPDF}>
                    Descargar Rutina
                </button>
                <button className="btn btn-secundario btn-agregar-progreso">
                    Agregar Progreso
                </button>
              </div>
            </div>
            <div className="tabla-container">
                <table className="table table-bordered text-center align-middle tabla-perfiles">
                <thead className="table-head">
                    <tr className="a">
                        <th colSpan={4} className="grupo-rutina">RUTINA</th>
                        <th colSpan={3} className="grupo-progreso">PROGRESO</th>
                    </tr>
                    <tr className="sub-head">
                        <th className="celda-hora">Ejercicio</th>
                        <th className="celda-hora">Serie</th>
                        <th className="celda-hora">Repeticiones</th>
                        <th className="celda-hora">Carga</th>
                        <th className="celda-hora">Serie</th>
                        <th className="celda-hora">Repeticiones</th>
                        <th className="celda-hora">Carga</th>
                    </tr>
                </thead>
                <tbody>
                    {rutinaData.map((r, index) => (
                        <tr key={index}>
                            <td className="">{r.ejercicio}</td>
                            <td className="">{r.series}</td>
                            <td className="">{r.reps}</td>
                            <td className="">{r.carga}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                    
                
                </tbody>
                </table>
            </div>
          
        </div>


    );
}
