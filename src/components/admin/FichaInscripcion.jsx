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

    // HISTORIA CLÍNICA
    altura: "",
    peso: "",
    grupoSanguineo: "",

    patologiaColumna: false,
    otrasPatologias: false,
    otrasPatologiasDetalle: "",

    enfermedadCardiaca: false,
    enfermedadCardiacaDetalle: "",

    lesiones: false,
    lesionesDetalle: "",

    practicaDeportes: false,
    practicaDeportesDetalle: "",

    mareos: false,
    dolorCabeza: false,
    desmayos: false,
    hemorragias: false,
    dolorArticulaciones: false,
    piePlano: false,
    rodillaTobillo: false,
    cirugias: false,
    convulsiones: false,
    problemasRespiratorios: false,

    medicacion: false,
    medicacionDetalle: "",

    alergico: false,
    alergicoDetalle: "",
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

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };


  {/* Permite guardar solamente los problemas marcados */ }
  const problemas = Object.entries(formData)
    .filter(([_, value]) => value === true)
    .map(([key]) => key);


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


      {/* HISTORIA CLÍNICA */}
      <h6 className="fw-bold mb-3">Historia clínica</h6>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Altura (cm)</label>
          <input
            type="number"
            className="form-control"
            name="altura"
            value={formData.altura}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Peso (kg)</label>
          <input
            type="number"
            className="form-control"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Grupo sanguíneo</label>
          <input
            type="text"
            className="form-control"
            name="grupoSanguineo"
            value={formData.grupoSanguineo}
            onChange={handleChange}
          />
        </div>
      </div>

      <label className="mb-2"> Marque lo que corresponda:</label>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          name="patologiaColumna"
          checked={formData.patologiaColumna}
          onChange={handleCheckbox}
        />
        <label className="form-check-label">Patología de columna</label>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="otrasPatologias"
            checked={formData.otrasPatologias}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Otras patologías óseas
          </label>
        </div>

        {formData.otrasPatologias && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="otrasPatologiasDetalle"
            value={formData.otrasPatologiasDetalle}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="enfermedadCardiaca"
            checked={formData.enfermedadCardiaca}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Enfermedades cardíacas
          </label>
        </div>

        {formData.enfermedadCardiaca && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="enfermedadCardiacaDetalle"
            value={formData.enfermedadCardiacaDetalle}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="lesiones"
            checked={formData.lesiones}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Lesiones recientes
          </label>
        </div>

        {formData.lesiones && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="lesionesDetalle"
            value={formData.lesionesDetalle}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="practicaDeportes"
            checked={formData.practicaDeportes}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Practica otros deportes
          </label>
        </div>

        {formData.practicaDeportes && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="practicaDeportesDetalle"
            value={formData.practicaDeportesDetalle}
            onChange={handleChange}
          />
        )}
      </div>

      {[
        ["mareos", "Sufre mareos"],
        ["dolorCabeza", "Dolor de cabeza frecuente"],
        ["desmayos", "Ha sufrido desmayos"],
        ["hemorragiasNasales", "Hemorragias nasales"],
        ["doloresArticulaciones", "Dolores articulares"],
        ["piePlano", "Pie plano u otra alteración"],
        ["problemasRodillaTobillo", "Problemas de rodilla/tobillo"],
        ["cirugias", "Intervenciones quirúrgicas"],
        ["convulsiones", "Convulsiones"],
        ["problemasRespiratorios", "Problemas respiratorios"],
      ].map(([name, label]) => (
        <div className="form-check mb-3" key={name}>
          <input
            type="checkbox"
            className="form-check-input"
            name={name}
            checked={formData[name]}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">{label}</label>
        </div>
      ))}

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="medicacion"
            checked={formData.medicacion}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Toma medicación con frecuencia
          </label>
        </div>

        {formData.medicacion && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="medicacionDetalle"
            value={formData.medicacionDetalle}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="alergico"
            checked={formData.alergico}
            onChange={handleCheckbox}
          />
          <label className="form-check-label">
            Es alérgico
          </label>
        </div>

        {formData.alergico && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Especifique"
            name="alergicoDetalle"
            value={formData.alergicoDetalle}
            onChange={handleChange}
          />
        )}
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
