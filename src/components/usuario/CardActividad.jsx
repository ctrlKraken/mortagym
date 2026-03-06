
const CardActividad = ({ titulo, horario, turnos, cuota, vencimiento }) => {

  return (
    <div className="card">
        <div className="card-body">
            <h5 class="card-title">{titulo}</h5>
            <h6 class="card-subtitle mb-2">{horario}</h6>
            <p class="card-text">
                Turnos restantes:{" "}
                <span className="text-primary"><strong>{turnos}</strong></span>
            </p>
             <div className="cuota-text d-flex align-items-center gap-1 text-start">
                <span className="fs-6">{cuota}</span>
                <small className="text-muted">
                - Vencimiento: {vencimiento || "---"}
                </small>
            </div>
        </div>
    </div>
    );
};

export default CardActividad;