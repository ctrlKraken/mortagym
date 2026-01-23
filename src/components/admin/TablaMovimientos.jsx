import "../../styles/Admin.css";

export default function TablaMovimientos({
  movimientos,
  paginaActual,
  setPaginaActual,
  filasPorPagina = 5,
}) {
  const inicio = (paginaActual - 1) * filasPorPagina;
  const movimientosPagina = movimientos.slice(inicio, inicio + filasPorPagina);
  const totalPaginas = Math.ceil(movimientos.length / filasPorPagina);

  return (
    <div className="card admin-card">
      <div className="card-body">
        <h5 className="card-title">Registro de Movimientos</h5>

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
                    <span
                      className={`badge ${
                        m.tipo === "Ingreso" ? "bg-success" : "bg-danger"
                      }`}
                    >
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
              <li
                key={i}
                className={`nav-item ${
                  paginaActual === i + 1 ? "navlink-active" : ""
                }`}
              >
                <button
                  className="nav-link"
                  onClick={() => setPaginaActual(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
