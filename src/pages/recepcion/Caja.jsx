import { useState } from "react";
import TablaMovimientos from "../../components/admin/TablaMovimientos";
import ModalMovimiento from "../../components/admin/ModalMovimiento";

export default function Caja() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [modal, setModal] = useState(false);
  const [tipo, setTipo] = useState("");

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

  const abrir = t => { setTipo(t); setModal(true); };

  return (
    <>
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-success" onClick={() => abrir("Ingreso")}>
          + Ingreso
        </button>
        <button className="btn btn-danger" onClick={() => abrir("Egreso")}>
          − Egreso
        </button>
      </div>

      <h5 className="card-title mb-3">Registro de Movimientos Diarios</h5>
      <TablaMovimientos
        movimientos={movimientos}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      />

      <ModalMovimiento
        isOpen={modal}
        onClose={() => setModal(false)}
        tipoMovimiento={tipo}
        onSubmit={(m) => setMovimientos([...movimientos, m])}
      />
    </>
  );
}
