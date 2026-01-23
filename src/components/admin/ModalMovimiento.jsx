import Modal from "react-modal";
import { useState, useEffect } from "react";

export default function ModalMovimiento({
  isOpen,
  onClose,
  tipoMovimiento,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    categoria: "",
    descripcion: "",
    monto: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({ categoria: "", descripcion: "", monto: "" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      fecha: new Date().toLocaleDateString(),
      tipo: tipoMovimiento,
      ...formData,
      monto: Number(formData.monto),
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registrar movimiento"
      className="modal-react"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h5 className="modal-title">
          {tipoMovimiento === "Ingreso"
            ? "Registrar ingreso"
            : "Registrar egreso"}
        </h5>
        <button type="button" className="close" onClick={onClose}>
          <span>&times;</span>
        </button>
      </div>

      <div className="modal-body">
        <p className="text-muted my-3">
          <strong>Fecha:</strong> {new Date().toLocaleDateString()} <br />
          <strong>Tipo:</strong>{" "}
          <span
            className={
              tipoMovimiento === "Ingreso"
                ? "text-success"
                : "text-danger"
            }
          >
            {tipoMovimiento}
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <input
              type="text"
              className="form-control"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Monto</label>
            <input
              type="number"
              className="form-control"
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="modal-footer px-0">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-admin">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
