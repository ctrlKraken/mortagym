const TablaPerfil = ({columnas, datos, onOrdenar}) =>  {

    return (

        <div>
            <table className="table table-bordered text-center align-middle tabla-perfiles">
              <thead className="table-head">
                <tr>
                    {columnas.map((col) => (
                        <th
                            key={col.key}
                            className="celda-hora"
                            onClick={col.ordenable ? () => onOrdenar(col.key) : undefined} 
                        >
                            {col.label}
                        </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {datos.map((fila, index) => (
                  <tr key={index}>
                    {columnas.map((col) => (
                        

                        <td>{fila[col.key]}</td>
                    ))}
                  </tr>
                ))}
                
              </tbody>
          </table>

        </div>

                
    );


                    
}
export default TablaPerfil;