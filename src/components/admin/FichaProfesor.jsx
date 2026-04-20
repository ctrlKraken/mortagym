import { useState } from "react";

export default function FichaProfesor({ onSubmit }) {
  const [formData, setFormData] = useState({
    apellidoNombre: "",
    dni: "",
    direccion: "",
    telefono1: "",
    telefonoEmergencia: "",
    fechaNacimiento: "",
    edad: "",
    planElegido: "",
    valorMensual: "",
    dias: "",
    horarios: "",
  });

  const planes = [
    "Musculación",
    "Pileta climatizada",
    "Spinning Center",
    "Cardio Gym",
    "Valoración Física",
    "Plan Personalizado",
    "Pilates",
  ];

  const diasDisponibles = [
    "Lunes a Viernes",
    "Lunes / Miércoles / Viernes",
    "Martes / Jueves",
    "Sábados",
  ];

  const horariosDisponibles = [
    "Mañana",
    "Tarde",
    "Noche",
    "Libre",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ficha de inscripción:", formData);

    if (onSubmit) onSubmit(formData);
  };

  return (
    <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>

      <h4 className="fw-bold mb-4 text-center">
        Ficha de Datos Profesor
      </h4>


      <div className="accordion accordion-flush" id="accordionInscripcion">

        {/* DATOS PERSONALES */}

        <div className="accordion-item">

          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#datosPersonales"
            >
              <i className="ri-user-line me-2"></i>
              Datos personales
            </button>
          </h2>

          <div
            id="datosPersonales"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionInscripcion"
          >

            <div className="accordion-body">

              <div className="row mb-3">

                <div className="col-md-6">
                  <label className="form-label">Apellido y Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellidoNombre"
                    value={formData.apellidoNombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">DNI</label>
                  <input
                    type="number"
                    className="form-control"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                  />
                </div>

              </div>


              <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </div>


              <div className="row mb-3">

                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefono1"
                    value={formData.telefono1}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Teléfono de emergencia</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefonoEmergencia"
                    value={formData.telefonoEmergencia}
                    onChange={handleChange}
                  />
                </div>

              </div>


              <div className="row mb-3">

                <div className="col-md-6">
                  <label className="form-label">Fecha nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Edad</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled
                    value={formData.edad}
                  />
                </div>

              </div>

            </div>
          </div>
        </div>


        {/* ACTIVIDAD */}

        <div className="accordion-item">

          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#plan"
            >
              <i className="ri-vip-crown-line me-2"></i>
              Actividad a dictar
            </button>
          </h2>

          <div
            id="plan"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionInscripcion"
          >

            <div className="accordion-body">
              <div className="row">
                <div className="col-md-6 mb-3">

                  <label className="form-label">Disciplina</label>

                  <select
                    className="form-select"
                    name="planElegido"
                    value={formData.planElegido}
                    onChange={handleChange}
                  >

                    <option value="">Seleccionar disciplina</option>

                    {planes.map((plan) => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}

                  </select>

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">Actividad</label>

                  <select
                    className="form-select"
                    name="planElegido"
                    value={formData.planElegido}
                    onChange={handleChange}
                  >

                    <option value="">Seleccionar actividad</option>

                    {planes.map((plan) => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}

                  </select>

                </div>
              </div>

              <div className="row mb-3">

                <div className="col-md-4">
                  <label className="form-label">Días</label>

                  <select
                    className="form-select"
                    name="dias"
                    value={formData.dias}
                    onChange={handleChange}
                  >

                    <option value="">Seleccionar</option>

                    {diasDisponibles.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}

                  </select>

                </div>

                <div className="col-md-4">

                  <label className="form-label">Horarios</label>

                  <select
                    className="form-select"
                    name="horarios"
                    value={formData.horarios}
                    onChange={handleChange}
                  >

                    <option value="">Seleccionar</option>

                    {horariosDisponibles.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}

                  </select>

                </div>

                <div className="col-md-4">
                  <label className="form-label">Porcentaje</label>
                  <input
                    type="number"
                    className="form-control"
                    name="valorMensual"
                    value={formData.valorMensual}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="d-flex justify-content-start gap-2">
                <button type="button" className="btn btn-ejercicio"
                  onClick={() => agregarActividad()}>
                  + Actividad
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* HUELLA */}

        <div className="accordion-item">

          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#huella"
            >

              <i className="ri-fingerprint-line"></i>
              Datos Biométricos

            </button>

          </h2>

          <div
            id="huella"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionInscripcion"
          >

            <div className="accordion-body">

              <button className="btn btn-principal">Registrar Huella</button>

            </div>
          </div>
        </div>

      </div>


      <div className="d-flex justify-content-end mt-4 gap-2">

        <button type="reset" className="btn btn-outline-secondary">
          Limpiar
        </button>

        <button type="submit" className="btn btn-success">
          Guardar inscripción
        </button>

      </div>

    </form>
  )
}
