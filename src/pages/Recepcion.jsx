import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo_sf.png'

export default function Recepcion() {
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    console.log("Guardado en localStorage:", localStorage.getItem("usuarioLogueado"));


    return (
        <div className="container perfil mt-5">

            {/* Encabezado */}
            <div className="text-center mb-5">
                <img src={logo} alt="Morta Gym" className="hero-logo mb-3" />
                <h2 className="fw-bold">{usuario?.nombre}</h2>
            </div>

            {/* Cards */}
            <div className="row g-4 justify-content-center">

                {/* Card Actividades */}
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-1 text-center h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="card-title fw-bold mb-3">Instructivos</h4>
                            </div>
                            <button className="btn btn-principal w-75 mx-auto my-auto">
                                Perfil
                            </button>
                            <button className="btn btn-principal w-75 mx-auto my-auto">
                                Cambio de horario
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Rutinas */}
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-1 text-center h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="card-title fw-bold mb-3">Usuarios</h4>
                            </div>
                            <button className="btn btn-principal w-75 mx-auto my-auto">
                                Inscripción
                            </button>
                            <button className="btn btn-principal w-75 mx-auto my-auto">
                                Renovación
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Horarios */}
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-1 text-center h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="card-title fw-bold mb-3">Caja</h4>
                            </div>
                            <button className="btn btn-principal w-75 mx-auto" onClick={() => navigate("/horarios")}>
                                Ingresos
                            </button>
                            <button className="btn btn-principal w-75 mx-auto mt-2" onClick={() => navigate("/horarios")}>
                                Egresos
                            </button>
                            <button className="btn btn-principal w-75 mx-auto mt-2" onClick={() => navigate("/horarios")}>
                                Resumen del día
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
