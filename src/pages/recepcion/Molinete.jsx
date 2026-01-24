import { useState } from "react";

export default function Molinete() {
  const [formData, setFormData] = useState({
    dni: "",
    comentario: "",
  });

  const tipoUsuario = [
    "Alumno",
    "Profesor",
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
    <div>
      <h5 className="card-title mb-2">Apertura Manual de Molinete</h5>
      <span>Recuerde tomar nota del motivo por el cual se accedió de forma manual.</span>
      <form className="mt-4" onSubmit={handleSubmit}>

        <div className="row mb-3">
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
          <div className="col-md-6">
            <label className="form-label">Tipo de Usuario</label>
            <select
              className="form-select"
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar Tipo de Usuario</option>
              {tipoUsuario.map((tipoUsuario) => (
                <option key={tipoUsuario} value={tipoUsuario}>
                  {tipoUsuario}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Comentario</label>
          <textarea
            type="text"
            className="form-control"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
          />
        </div>

        {/* BOTONES */}
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">
            Abrir Molinete
          </button>
        </div>
      </form>
    </div>
  )
}
