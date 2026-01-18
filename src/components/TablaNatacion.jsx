import { useState } from "react";

const preciosNatacion = {
  "Pileta libre": {
    clase: { debito: 22000, efectivo: 18000 },
    1: { debito: 66000, efectivo: 53000 },
    2: { debito: 73000, efectivo: 60000 },
    3: { debito: 81000, efectivo: 66000 },
    4: { debito: 90000, efectivo: 70000 },
    5: { debito: 97000, efectivo: 79000 },
    6: { debito: 105000, efectivo: 86000 },
  },
  "Con profesor": {
    clase: { debito: 20000, efectivo: 18000 },
    1: { debito: 66000, efectivo: 64000 },
    2: { debito: 73000, efectivo: 69000 },
    3: { debito: 81000, efectivo: 76000 },
    4: { debito: 90000, efectivo: 87000 },
    5: { debito: 97000, efectivo: 92000 },
    6: { debito: 105000, efectivo: 103000 },
  },
  Hidrogym: {
    clase: { debito: 22000, efectivo: 18000 },
    2: { debito: 80000, efectivo: 50200 },
    3: { debito: 88000, efectivo: 55800 },
    5: { debito: 103000, efectivo: 62000 },
  },
};

const TablaNatacion = ({ matricula }) => {
  const [categoria, setCategoria] = useState("Pileta libre");
  const [dias, setDias] = useState(1);

  const preciosCategoria = preciosNatacion[categoria];
  const diasDisponibles = Object.keys(preciosCategoria);

  return (
    <div className="precios">
        
        <table className="tabla-precios natacion table table-borderless">
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Días por semana</th>
            <th>Efectivo</th>
            <th>Débito/Transferencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Actividad">
              <select
                value={categoria}
                onChange={(e) => {
                  setCategoria(e.target.value);
                  setDias(1);
                }}
              >
                {Object.keys(preciosNatacion).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </td>
            <td data-label="Días por semana">
              <select
                value={dias}
                onChange={(e) => setDias(e.target.value)}
              >
                {diasDisponibles.map((d) => (
                  <option key={d} value={d}>
                    {d === "clase"
                    ? "1 clase"
                    : `${d} ${d === "1" ? "vez" : "veces"} por semana`}
                  </option>
                ))}
              </select>
            </td>
            <td data-label="Efectivo">
              {preciosCategoria[dias]?.efectivo
                ? `$${preciosCategoria[dias].efectivo.toLocaleString()}` : "--"}
            </td>
            <td data-label="Débito/Transferencia">
              {preciosCategoria[dias]?.debito
                ? `$${preciosCategoria[dias].debito.toLocaleString()}`
                : "—"}
            </td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
              <td colSpan="2">
                <p className="matricula text-muted">{matricula}</p>
              </td>
              <td colSpan="2">
                <p className="text-muted">Con tarjeta de crédito: +25%</p>
              </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TablaNatacion;
