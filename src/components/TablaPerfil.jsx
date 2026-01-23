const TablaPerfil = ({ columnas, datos, onOrdenar }) => {
    const renderValor = (valor) => {
        if (typeof valor === "boolean") {
            return valor ? (
                <i className="ri-checkbox-circle-fill text-success fs-5"></i>
            ) : (
                <i className="ri-close-circle-fill text-danger fs-5"></i>
            );
        }
        return valor;
    };
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
                                <td key={col.key}>{renderValor(fila[col.key])}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>


    );



}
export default TablaPerfil;