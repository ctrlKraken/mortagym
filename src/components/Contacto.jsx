import React from 'react'
import { RiCalendarScheduleFill, RiPhoneFill, RiMapPin2Fill } from '@remixicon/react';
import Mapa from './Mapa';

export default function Contacto() {
    return (
        <section className="home-section">
            <div className="contacto-content">
                <div className="row">
                    <div className="col-12 col-md-6 px-4">
                        <h2 className="qs-titulo">Contacto</h2>
                       
                        <div className="dato-contacto">
                            <div className="icon-contacto">
                                <RiPhoneFill className="icon" size={25} color="white" />
                            </div>
                            <div>
                                <p className="titulo-dato-contacto">Teléfono</p>
                                <p className="texto-dato-contacto">297 5014149</p>
                            </div>
                        </div>
                        <div className="dato-contacto">
                            <div className="icon-contacto">
                                <RiCalendarScheduleFill size={25} color="white" />
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
                                <RiMapPin2Fill size={25} color="white" />
                            </div>
                            <div>
                                <p className="titulo-dato-contacto">Dirección</p>
                                <p className="texto-dato-contacto">Surinam 1190, Caleta Olivia</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6838.010047574578!2d-67.54018115240513!3d-46.4383044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5df0017c63c93%3A0x4015e9afe045e2e3!2sMORTA%20GYM!5e1!3m2!1ses-419!2sar!4v1760648444773!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

    )
}