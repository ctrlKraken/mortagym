import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/perfiles.css'

export default function Profesor() {
    const navigate = useNavigate();

    
    const irAFormRutina = () => {
        navigate("/form-rutina");
    };

    const irAAlumnos = () => {
        navigate("/alumnos-profesor");
    };

    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    console.log("Guardado en localStorage:", localStorage.getItem("usuarioLogueado"));

    return (
        <div className="container perfil mt-5">

            {/* Encabezado */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">Hola, {usuario?.nombre}</h2>

                {/* Disciplinas del profesor */}
                {usuario.rol === "profesor" && usuario.disciplinas && (
                    <div className="mt-3">
                        <p className="fw-bold mb-2">Disciplinas que dicta:</p>

                        {usuario.disciplinas.map((disciplina, index) => (
                            <span key={index} className="badge badgeDisciplinas bg-primary me-2 p-2 fs-6">
                                {disciplina}
                            </span>
                        ))}
                    </div>
                )}

            </div>

            {/* Cards */}
            <div className="row g-4 justify-content-center">

                <div className="col-12 col-md-6">
                    <div className="card shadow-sm border-1 text-center h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="card-title fw-bold mb-3">Mis Alumnos</h4>
                                <p className="card-text text-muted mb-4">
                                    Ver el listado de alumnos inscriptos a tus disciplinas.
                                </p>
                            </div>
                            <button className="btn btn-principal w-75 mx-auto my-auto" onClick={irAAlumnos}>
                                Ver alumnos
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Rutinas */}
                <div className="col-12 col-md-6">
                    <div className="card shadow-sm border-1 text-center h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="card-title fw-bold mb-3">Mis rutinas</h4>
                                <p className="card-text text-muted mb-4">
                                    Carga los planes de entrenamiento para tus alumnos.
                                </p>
                            </div>
                            <button className="btn btn-principal w-75 mx-auto my-auto" onClick={irAFormRutina}>
                                Cargar rutina
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
