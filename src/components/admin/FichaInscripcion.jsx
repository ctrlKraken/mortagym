import { useState } from "react";

export default function FichaInscripcion({ onSubmit }) {
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
      <h4 className="fw-bold mb-4 text-center">Ficha de Datos Cliente</h4>

      {/* DATOS PERSONALES */}
      <h6 className="fw-bold mb-3">Datos personales</h6>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Apellido y Nombre</label>
          <input
            type="text"
            className="form-control"
            name="apellidoNombre"
            value={formData.apellidoNombre}
            onChange={handleChange}
            required
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
            required
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

      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Fecha de nacimiento</label>
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
          <input disabled
            type="number"
            className="form-control"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* PLANES */}
      <h6 className="fw-bold mb-3">Plan contratado</h6>

      <div className="mb-3">
        <label className="form-label">Plan elegido</label>
        <select
          className="form-select"
          name="planElegido"
          value={formData.planElegido}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar plan</option>
          {planes.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Valor mensual</label>
        <input
          type="number"
          className="form-control"
          name="valorMensual"
          value={formData.valorMensual}
          onChange={handleChange}
        />
      </div>

      {/* HORARIOS */}
      <h6 className="fw-bold mb-3">Horarios abonados</h6>

      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Días</label>
          <select
            className="form-select"
            name="dias"
            value={formData.dias}
            onChange={handleChange}
          >
            <option value="">Seleccionar días</option>
            {diasDisponibles.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Horarios</label>
          <select
            className="form-select"
            name="horarios"
            value={formData.horarios}
            onChange={handleChange}
          >
            <option value="">Seleccionar horario</option>
            {horariosDisponibles.map((horario) => (
              <option key={horario} value={horario}>
                {horario}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BOTONES */}
      <div className="d-flex justify-content-end gap-2">
        <button type="reset" className="btn btn-outline-secondary">
          Limpiar
        </button>
        <button type="submit" className="btn btn-success">
          Guardar inscripción
        </button>
      </div>
    </form>
  );
}
