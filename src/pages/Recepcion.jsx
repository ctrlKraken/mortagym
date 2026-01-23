import React, { useState } from "react";
import logo from "../assets/logo_sf.png";
import TablaMovimientos from "../components/admin/TablaMovimientos";
import ModalMovimiento from "../components/admin/ModalMovimiento";
import TablaPerfil from "../components/TablaPerfil";
import "../styles/perfiles.css";

/* ================= DATOS MOCK ================= */

const alumnos = [
    {
        id: 1,
        nombre: "Juan Pérez",
        dni: "34567890",
        disciplinas: "Musculación, Natación",
        cuota: true,
        ficha: true,
        matricula: true,
    },
    {
        id: 2,
        nombre: "María López",
        dni: "30123456",
        disciplinas: "Funcional",
        cuota: false,
        ficha: true,
        matricula: false,
    },
    {
        id: 3,
        nombre: "Martin Diaz",
        dni: "28995412",
        disciplinas: "Pilates",
        cuota: false,
        ficha: true,
        matricula: false,
    },
    {
        id: 4,
        nombre: "Laura Rodriguez",
        dni: "45002156",
        disciplinas: "Natación",
        cuota: false,
        ficha: true,
        matricula: true,
    },
    {
        id: 5,
        nombre: "Juan Carlos Chacón",
        dni: "35002465",
        disciplinas: "Funcional, Judo",
        cuota: false,
        ficha: true,
        matricula: false,
    },
    {
        id: 6,
        nombre: "Manuel Muñoz",
        dni: "44895777",
        disciplinas: "Natación",
        cuota: false,
        ficha: true,
        matricula: false,
    },
    {
        id: 7,
        nombre: "Antonio Suarez",
        dni: "20554698",
        disciplinas: "Pilates, Judo",
        cuota: false,
        ficha: true,
        matricula: false,
    },
];

const cuposPorDisciplina = {
    Musculación: 30,
    Natación: 20,
    Funcional: 15,
    Pilates: 12,
    Judo: 10,
};


export default function Recepcion() {
    const [tabActiva, setTabActiva] = useState("usuarios");
    const [datosOrdenados, setDatosOrdenados] = useState(alumnos);
    const [paginaActual, setPaginaActual] = useState(1);
    const [busqueda, setBusqueda] = useState("");
    const [disciplinaSeleccionada, setDisciplinaSeleccionada] = useState("");

    /* ================= ORDENAR TABLA ================= */

    const manejarOrdenar = (key) => {
        const nuevos = [...datosOrdenados].sort((a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] < b[key]) return -1;
            return 0;
        });

        setDatosOrdenados(nuevos);
    };

    /* ================= MOVIMIENTOS CAJA ================= */

    const [movimientos, setMovimientos] = useState([
        {
            id: 1,
            fecha: "2025-01-17",
            tipo: "Ingreso",
            categoria: "Cuotas",
            descripcion: "Cuota mensual",
            monto: 15000,
        },
        {
            id: 2,
            fecha: "2025-01-17",
            tipo: "Egreso",
            categoria: "Servicios",
            descripcion: "Luz",
            monto: 8000,
        },
    ]);

    /* ================= COLUMNAS TABLA PERFIL ================= */

    const columnas = [
        { key: "nombre", label: "Nombre", ordenable: true },
        { key: "dni", label: "DNI", ordenable: true },
        { key: "disciplinas", label: "Disciplina", ordenable: false },
        { key: "cuota", label: "Cuota al día", ordenable: true },
        { key: "ficha", label: "Ficha médica", ordenable: false },
    ];

    /* ================= MODAL ================= */

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tipoMovimiento, setTipoMovimiento] = useState("");

    const abrirModal = (tipo) => {
        setTipoMovimiento(tipo);
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
        setTipoMovimiento("");
    };

    const registrarMovimiento = (nuevoMovimiento) => {
        setMovimientos((prev) => [
            ...prev,
            { ...nuevoMovimiento, id: Date.now() },
        ]);
    };

    /* ================= FILTROS ================= */
    const disciplinasDisponibles = [
        ...new Set(
            alumnos.flatMap((a) =>
                a.disciplinas.split(",").map((d) => d.trim())
            )
        ),
    ];

    const alumnosFiltrados = datosOrdenados.filter((alumno) => {
        const coincideBusqueda =
            alumno.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            alumno.dni.includes(busqueda);

        const coincideDisciplina =
            disciplinaSeleccionada === "" ||
            alumno.disciplinas
                .toLowerCase()
                .includes(disciplinaSeleccionada.toLowerCase());

        return coincideBusqueda && coincideDisciplina;
    });

    const alumnosEnDisciplina = alumnos.filter((a) =>
        disciplinaSeleccionada
            ? a.disciplinas
                .toLowerCase()
                .includes(disciplinaSeleccionada.toLowerCase())
            : false
    );

    const cupoMaximo = cuposPorDisciplina[disciplinaSeleccionada] || 0;
    const cupoDisponible = cupoMaximo - alumnosEnDisciplina.length;




    return (
        <div className="container perfil">

            {/* ENCABEZADO */}
            <div hidden className="text-center mb-4">
                <img src={logo} alt="Morta Gym" className="perfil-logo mb-3" />
                <span className="fw-bold fs-2 ms-2">Recepción</span>
            </div>

            {/* TABS */}
            <ul className="nav nav-tabs justify-content-center mb-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${tabActiva === "usuarios" ? "active" : ""}`}
                        onClick={() => setTabActiva("usuarios")}
                    >
                        Usuarios
                    </button>
                </li>

                <li className="nav-item">
                    <button
                        className={`nav-link ${tabActiva === "caja" ? "active" : ""}`}
                        onClick={() => setTabActiva("caja")}
                    >
                        Caja
                    </button>
                </li>
            </ul>

            {/* ================= TAB USUARIOS ================= */}
            {tabActiva === "usuarios" && (
                <>
                    <div className="d-flex justify-content-end gap-2 mb-4">
                        <button className="btn btn-perfil">
                            <i className="ri-profile-line me-1"></i>
                            Inscripción
                        </button>

                        <button className="btn btn-perfil">
                            <i className="ri-loop-right-line me-1"></i>
                            Renovación
                        </button>

                        <button className="btn btn-perfil">
                            <i class="ri-lock-unlock-line"></i>
                            Molinete
                        </button>
                    </div>

                    <div className="row mb-3 align-items-end">
                        <div className="col-md-4">
                            <label className="form-label">Buscar</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre o DNI"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Disciplina</label>
                            <select
                                className="form-select"
                                value={disciplinaSeleccionada}
                                onChange={(e) => setDisciplinaSeleccionada(e.target.value)}
                            >
                                <option value="">Todas</option>
                                {disciplinasDisponibles.map((disc) => (
                                    <option key={disc} value={disc}>
                                        {disc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {disciplinaSeleccionada && (
                        <div className="alert alert-info d-flex justify-content-between align-items-center">
                            <span>
                                <strong>{disciplinaSeleccionada}</strong> —
                                {alumnosEnDisciplina.length} inscriptos
                            </span>

                            <span>
                                Cupo: {alumnosEnDisciplina.length}/{cupoMaximo} (
                                {cupoDisponible > 0 ? `${cupoDisponible} disponibles` : "Completo"})
                            </span>
                        </div>
                    )}



                    <TablaPerfil
                        columnas={columnas}
                        datos={alumnosFiltrados}
                        onOrdenar={manejarOrdenar}
                    />
                </>
            )}

            {/* ================= TAB CAJA ================= */}
            {tabActiva === "caja" && (
                <>
                    <div className="d-flex justify-content-end gap-2 mb-4">
                        <button
                            className="btn btn-success"
                            onClick={() => abrirModal("Ingreso")}
                        >
                            <i className="ri-add-line me-1"></i>
                            Registrar ingreso
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={() => abrirModal("Egreso")}
                        >
                            <i className="ri-subtract-line me-1"></i>
                            Registrar egreso
                        </button>
                    </div>

                    <TablaMovimientos
                        movimientos={movimientos}
                        paginaActual={paginaActual}
                        setPaginaActual={setPaginaActual}
                    />
                </>
            )}

            {/* MODAL */}
            <ModalMovimiento
                isOpen={isModalOpen}
                onClose={cerrarModal}
                tipoMovimiento={tipoMovimiento}
                onSubmit={registrarMovimiento}
            />
        </div>
    );
}
