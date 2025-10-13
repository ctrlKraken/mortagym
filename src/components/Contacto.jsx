import React from 'react'
import { RiCalendarScheduleFill, RiPhoneFill , RiMapPin2Fill  } from '@remixicon/react';
import Mapa from './Mapa';

export default function Contacto() {
  return (
    <section className="seccion-contacto">
        
       
        <div className="contacto">

            <div className="info-contacto col-lg-4">
                <div className="titulo-seccion">Contacto</div>
                <div className="dato-contacto">
                    <div className="icon-contacto">
                        <RiPhoneFill className="icon" size={25} color="white"/>
                    </div>
                    <div>
                        <p className="titulo-dato-contacto">Teléfono</p>
                        <p className="texto-dato-contacto">297 5014149</p>
                    </div>
                </div>
                <div className="dato-contacto">
                    <div className="icon-contacto">
                        <RiCalendarScheduleFill size={25} color="white"/>
                    </div>
                    <div>
                        <p className="titulo-dato-contacto">Horario</p>
                        <p className="texto-dato-contacto">Lunes a Viernes: 7:00 a 22:00 Hs</p>
                        <p className="texto-dato-contacto">Sábados: 10:00 a 14:00 Hs</p>
                        <p className="texto-dato-contacto">Domingos: Cerrado</p>
                    </div>
                </div>
                <div className="dato-contacto">
                    <div className="icon-contacto">
                        <RiMapPin2Fill size={25} color="white"/>
                    </div>
                    <div>
                        <p className="titulo-dato-contacto">Dirección</p>
                        <p className="texto-dato-contacto">Surinam 1190, Caleta Olivia</p>
                    </div>
                </div>
                
            </div>
            <div className="mapa col-lg-5">
                
                <Mapa/>
            </div>
        </div>
        

    </section>
    
  )
}