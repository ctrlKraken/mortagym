import React, { useState } from 'react'

export default function Disciplina({ titulo, descripcion, subactividad, precios, fotos, reverse = false }) {

  const [dias, setDias] = useState(1);

  const [central, setCentral] = useState(fotos[0]);

  const cambiarCentral = (foto) => {
    setCentral(foto);
  };


  return (
    
      <section className="contenedor-disciplina py-12 py-lg-24 py-xl-32">
       
          <div className="row align-items-center">
            <div className={`col-lg-6 ${reverse ? "order-lg-2" : "order-lg-1"}`}>
              <div className="info mw-lg mx-auto mx-lg-0">
                <h3 className="titulo-actividad mb-8">{titulo}</h3>
                <div className="descripcion-actividad d-sm-flex mb-14">
                  <p>{descripcion}</p>
                </div>
                <div className="sub-actividad">
                  <p>{subactividad}</p>
                </div>
                <div className="precios">
                  <table className='tabla-precios table table-borderless'>
                    <thead>
                      <tr>
                        <th>Cantidad de dias por semana</th>
                        <th>Debito/Transferencia</th>
                        <th>Efectivo </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <select name="" id="" value={dias} onChange={(e) => setDias(Number(e.target.value))}>
                            {Object.keys(precios).map((dia) => (
                                <option key={dia} value={dia}>{dia} vez/veces por semana</option>
                            ))}
                          </select>
                        </th>
                        <td><span>${precios[dias].debito.toLocaleString()} </span></td>
                        <td><span>${precios[dias].efectivo.toLocaleString()} </span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="btn-principal btn btn-sm" type="submit">
                  <span>HORARIO</span>
                </button>
              </div>
            </div>
              
            <div className={`carrusel-actividad col-lg-6 ${reverse ? "order-lg-1" : "order-lg-2"}`}>
              
                <div className="foto grande">
                  <img src={central.src} alt="central" />
                  <div className="overlay"></div>
                </div>
                <div className="laterales">
                    {fotos
                      .filter((f) => f.id !== central.id)
                      .map((f) => (
                        <div
                          key={f.id}
                          className="foto chica"
                          onClick={() => cambiarCentral(f)}
                        >
                          <img src={f.src} alt={`foto-${f.id}`} />
                          <div className="overlay"></div>
                        </div>
                      ))}
                </div>
            </div>
          </div>
      </section>
  )
}