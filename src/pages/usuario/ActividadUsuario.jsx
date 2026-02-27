import EstadoItem from "../../components/usuario/EstadoItem";
import CardActividad from "../../components/usuario/CardActividad";

export default function ActividadUsuario() {

    return(
       
        <div className="contenido-actividades text-center">
            <div className="row">
                <div className="col estado-user">
                    <EstadoItem 
                        icon="✅" 
                        titulo="Cuota al día" 
                        vencimiento="28/2" 
                    />
                    <EstadoItem 
                        icon="✅" 
                        titulo="Matrícula al día" 
                        vencimiento="20/12" 
                    />
                    <EstadoItem 
                        icon="❌" 
                        titulo="Falta Ficha Médica" 
                        vencimiento={null} 
                    />
                </div>
            </div>
            <div className="actividades-user mt-5">
                <CardActividad
                    titulo="Natación"
                    horario="Martes y Jueves - 8:00 Hs"
                    turnos="5"
                />
                <CardActividad
                    titulo="Musculación"
                    horario="Sábado - 10:00 Hs"
                    turnos="3"
                />
            </div>
        </div>
    );
};
