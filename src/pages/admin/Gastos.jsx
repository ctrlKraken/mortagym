import { useState } from "react";
import "../../styles/Admin.css";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from "recharts";
import Modal from "react-modal";


export default function Gastos() {
  const [paginaActual, setPaginaActual] = useState(1);

  /* ================= DATOS MOCK ================= */

  const movimientos = [
    { id: 1, fecha: "2025-01-02", tipo: "Ingreso", categoria: "Cuotas", descripcion: "Cuotas enero", monto: 250000 },
    { id: 2, fecha: "2025-01-05", tipo: "Egreso", categoria: "Servicios", descripcion: "Luz", monto: 40000 },
    { id: 3, fecha: "2025-01-10", tipo: "Egreso", categoria: "Sueldos", descripcion: "Profesorado", monto: 120000 },
    { id: 4, fecha: "2025-01-15", tipo: "Ingreso", categoria: "Inscripciones", descripcion: "Nuevos alumnos", monto: 80000 },
    { id: 5, fecha: "2025-01-17", tipo: "Ingreso", categoria: "Inscripciones", descripcion: "Nuevos alumnos", monto: 80000 },
    { id: 6, fecha: "2025-01-17", tipo: "Egreso", categoria: "Servicios", descripcion: "Agua", monto: 50000 },
  ];

  const resumen = {
    ingresos: 330000,
    egresos: 160000,
    balance: 170000,
  };

  const gastosPorCategoria = [
    { name: "Servicios", value: 40000 },
    { name: "Sueldos", value: 120000 },
    { name: "Insumos", value: 30000 },
  ];

  const balanceMensual = [
    { mes: "Ene", ingresos: 330000, egresos: 160000 },
    { mes: "Feb", ingresos: 280000, egresos: 140000 },
    { mes: "Mar", ingresos: 350000, egresos: 200000 },
  ];

  const filasPorPagina = 5;
  const inicio = (paginaActual - 1) * filasPorPagina;
  const movimientosPagina = movimientos.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(movimientos.length / filasPorPagina);

  const COLORS = ["#dc3545", "#ffc107", "#6c757d"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipoMovimiento, setTipoMovimiento] = useState(""); // "Ingreso" | "Egreso"

  const [formData, setFormData] = useState({
    categoria: "",
    descripcion: "",
    monto: "",
  });

  const abrirModal = (tipo) => {
    setTipoMovimiento(tipo);
    setFormData({ categoria: "", descripcion: "", monto: "" });
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setTipoMovimiento("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoMovimiento = {
      fecha: new Date().toLocaleDateString(),
      tipo: tipoMovimiento,
      ...formData,
      monto: Number(formData.monto),
    };

    console.log("Movimiento registrado:", nuevoMovimiento);

    cerrarModal();
  };


  return (
    <>
      {/* BOTONES */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-success" onClick={() => abrirModal("Ingreso")}>
          <i className="ri-add-line"></i> Registrar ingreso
        </button>
        <button className="btn btn-danger" onClick={() => abrirModal("Egreso")}>
          <i className="ri-subtract-line"></i> Registrar egreso
        </button>
      </div>

      {/* TOTALES */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card admin-card text-center">
            <h6>Ingresos totales</h6>
            <h4 className="text-success">${resumen.ingresos.toLocaleString()}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card admin-card text-center">
            <h6>Egresos totales</h6>
            <h4 className="text-danger">${resumen.egresos.toLocaleString()}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card admin-card text-center">
            <h6>Balance actual</h6>
            <h4>${resumen.balance.toLocaleString()}</h4>
          </div>
        </div>
      </div>

      {/* TABLA */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card admin-card">
            <div class="card-body">
              <h5 class="card-title">Registro de Movimientos</h5>
              <div className="table-responsive border my-2">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Fecha</th>
                      <th>Tipo</th>
                      <th>Categoría</th>
                      <th>Descripción</th>
                      <th>Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movimientosPagina.map((m) => (
                      <tr key={m.id}>
                        <td>{m.fecha}</td>
                        <td>
                          <span className={`badge ${m.tipo === "Ingreso" ? "bg-success" : "bg-danger"}`}>
                            {m.tipo}
                          </span>
                        </td>
                        <td>{m.categoria}</td>
                        <td>{m.descripcion}</td>
                        <td>${m.monto.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PAGINACIÓN */}
              <nav className="d-flex justify-content-center">
                <ul className="pagination">
                  {Array.from({ length: totalPaginas }).map((_, i) => (
                    <li key={i} className={`nav-item ${paginaActual === i + 1 ? "navlink-active" : ""}`}>
                      <button className="nav-link" onClick={() => setPaginaActual(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

        </div>

        <div className="col-md-4">
          {/* GRÁFICOS */}
          <div className="card admin-card">
            <div class="card-body">
              <h5 class="card-title">Categorías de Gastos
              </h5>

              <div className="col-md-12">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={gastosPorCategoria} dataKey="value" nameKey="name" outerRadius={100}>
                      {gastosPorCategoria.map((_, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* RESUMENES */}

      <div className="card admin-card">
        <div class="card-body">
          <h5 class="card-title">Resumen de Balances</h5>
          <div className="row mt-2">
            {["Diario", "Mensual", "Anual"].map((tipo) => (
              <div className="col-md-4" key={tipo}>
                <div className="card admin-card text-center mt-2">
                  <h6>Balance {tipo}</h6>
                  <h4>$150.000</h4>
                  <small className="text-success">Ingresos: $200.000</small><br />
                  <small className="text-danger">Egresos: $50.000</small>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-12 p-5">
            <h6 className="text-start text-secondary">Balance mensual</h6>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={balanceMensual}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="egresos" fill="#dc3545" />
                <Bar dataKey="ingresos" fill="#198754" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={cerrarModal}
        contentLabel="Registrar movimiento"
        className="modal-react"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h5 className="modal-title">
            {tipoMovimiento === "Ingreso" ? "Registrar ingreso" : "Registrar egreso"}
          </h5>
          <button type="button" className="close" onClick={cerrarModal}>
            <span>&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <p className="text-muted my-3">
            <strong>Fecha:</strong> {new Date().toLocaleDateString()} <br />
            <strong>Tipo:</strong>{" "}
            <span className={tipoMovimiento === "Ingreso" ? "text-success" : "text-danger"}>
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
                required
                min="0"
              />
            </div>

            <div className="modal-footer px-0">
              <button type="button" className="btn btn-secondary me-2" onClick={cerrarModal}>
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-admin"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </Modal>

    </>
  );
}
