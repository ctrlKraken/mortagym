import {useState} from "react";


export default function FormRutina() {

    const alumnos = ["Julián Rodríguez","Sofía Martínez","Lucas Ferrero", "Valentina Gómez"];

    const ejercicios = [
        {nombre: "Plancha", musculo: "Abdomen", subgrupo: "Core"},
        {nombre: "Curl Martillo", musculo: "Bíceps", subgrupo: "Braquial"},
        {nombre: "Curl con Barra", musculo: "Bíceps", subgrupo: "Cabeza larga"},
        {nombre: "Dominadas", musculo: "Espalda", subgrupo: "Dorsal"},
        {nombre: "Peso Muerto", musculo: "Espalda", subgrupo: "Lumbar"},
        {nombre: "Pájaros", musculo: "Hombros", subgrupo: "Posterior"},
        {nombre: "Sentadillas", musculo: "Piernas", subgrupo: "Cuádriceps"},
        {nombre: "Prensa de piernas", musculo: "Piernas", subgrupo: "Cuádriceps"},
        {nombre: "Elevaciones de Talones", musculo: "Piernas", subgrupo: "Gemelos"},
    ];

    const musculos = [...new Set(ejercicios.map(e => e.musculo))];

    const [musculoSeleccionado, setMusculoSeleccionado] = useState("");
    const ejerciciosFiltrados = ejercicios.filter(e => e.musculo === musculoSeleccionado);

    return(
        <div className="pages-section cargar-rutina">
            <h5 className="titulo-seccion">Cargar rutina</h5>        
            <form className="form-rutina">
                <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Alumno</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="">
                            {alumnos.map((a) => (
                                <option key={a} value={a} translate="no">
                                {a}
                                </option>
                            ))}
                        
                        </select>
                    </div>
                </div>
                <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Musculo</label>
                    <div className="col-sm-10">
                        <select 
                            className="form-select" id=""
                            value={musculoSeleccionado}
                            onChange={(e) => setMusculoSeleccionado(e.target.value)}
                        >
                            <option value="">Selecciona un músculo</option>
                            {musculos.map((m) => (
                                <option key={m} value={m} translate="no">
                                {m}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Ejercicio</label>
                    <div className="col-sm-10">
                        <select className="form-select" disabled={!musculoSeleccionado}>
                            <option value="">
                                {musculoSeleccionado ? "Elige el ejercicio" : "Primero elige un músculo"}
                            </option>
                            {ejerciciosFiltrados.map((ej, index) => (
                                <option key={index} value={ej.nombre} translate="no">
                                {ej.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Series</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="" placeholder="0"/>
                    </div>
                </div>
                 <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Repeticiones</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="" placeholder="0"/>
                    </div>
                    
                </div>
                 <div className="form-group row campo">
                    <label for="" className="col-sm-2 col-form-label">Peso</label>
                    <div className="col-sm-10"> 
                        <input type="text" className="form-control" id="" placeholder="0"/>
                    </div>
                   
                </div>

                <button type="submit" class="btn btn-guardar btn-principal mb-2">
                    GUARDAR RUTINA
                </button>
            </form>
        </div>
    );

}