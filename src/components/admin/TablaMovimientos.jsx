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
    <>
      <div className="table-responsive my-2">
        <table className="table table-hover table-bordered align-middle">
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
            {movimientos.length > 0 ? (
                movimientosPagina.map((m) => (
                  <tr key={m.id}>
                    <td>{m.fecha}</td>
                    <td>
                      <span
                        className={`badge ${m.tipo === "Ingreso" ? "bg-success" : "bg-danger"
                          }`}
                      >
                        {m.tipo}
                      </span>
                    </td>
                    <td>{m.categoria}</td>
                    <td>{m.descripcion}</td>
                    <td>${m.monto.toLocaleString()}</td>
                  </tr>
                ))
                ) : (
              <tr>
                <td colSpan={5} className="text-muted py-4">
                  No hay datos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINACIÓN */}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <li
              key={i}
              className={`nav-item ${paginaActual === i + 1 ? "navlink-active" : ""
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

    </>

  );
}
