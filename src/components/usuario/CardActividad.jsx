
const CardActividad = ({ titulo, horario, turnos }) => {

  return (
    <div className="card">
        <div className="card-body">
            <h5 class="card-title">{titulo}</h5>
            <h6 class="card-subtitle mb-2">{horario}</h6>
            <p class="card-text">
                Turnos restantes:{" "}
                <span className="text-primary"><strong>{turnos}</strong></span>
            </p>
        </div>
    </div>
    );
};

export default CardActividad;