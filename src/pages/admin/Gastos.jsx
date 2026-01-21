import { useState } from "react";
import "../../styles/Admin.css";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from "recharts";

export default function Gastos() {
  const [paginaActual, setPaginaActual] = useState(1);

  /* ================= DATOS MOCK ================= */

  const movimientos = [
    { id: 1, fecha: "2025-01-02", tipo: "Ingreso", categoria: "Cuotas", descripcion: "Cuotas enero", monto: 250000 },
    { id: 2, fecha: "2025-01-05", tipo: "Egreso", categoria: "Servicios", descripcion: "Luz", monto: 40000 },
    { id: 3, fecha: "2025-01-10", tipo: "Egreso", categoria: "Sueldos", descripcion: "Profesorado", monto: 120000 },
    { id: 4, fecha: "2025-01-15", tipo: "Ingreso", categoria: "Inscripciones", descripcion: "Nuevos alumnos", monto: 80000 },
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

  /* ================= JSX ================= */

  return (
    <>
      {/* BOTONES */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-success">
          <i className="ri-add-line"></i> Registrar ingreso
        </button>
        <button className="btn btn-danger">
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
      <div className="table-responsive mb-5">
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
      <nav className="d-flex justify-content-center mb-5">
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

      {/* GRÁFICOS */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h6 className="text-center">Gastos por categoría</h6>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={gastosPorCategoria} dataKey="value" nameKey="name" outerRadius={100}>
                {gastosPorCategoria.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="col-md-6">
          <h6 className="text-center">Balance mensual</h6>
          <ResponsiveContainer width="100%" height={300}>
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

      {/* RESUMENES */}
      <div className="row">
        {["Diario", "Mensual", "Anual"].map((tipo) => (
          <div className="col-md-4" key={tipo}>
            <div className="card admin-card text-center">
              <h6>Balance {tipo}</h6>
              <h4>$150.000</h4>
              <small className="text-success">Ingresos: $200.000</small><br />
              <small className="text-danger">Egresos: $50.000</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
