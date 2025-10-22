import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root'); 


export default function Disciplina({ 
  titulo, 
  descripcion, 
  subactividad, 
  precios, 
  fotos, 
  reverse = false,
  modalData = [],
 }) {

  const [dias, setDias] = useState(1);
  const [central, setCentral] = useState(fotos[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(modalData[0]?.id || '');

  const cambiarCentral = (foto) => {
    setCentral(foto);
  };

  const navigate = useNavigate();

  const irAHorarios = () => {
    navigate("/horarios", { state: { filtro: titulo } });
  };

  return (
    
    <>
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
                <div className="btns">
                  <button className="btn-principal btn btn-sm" type="button"
                  onClick={irAHorarios}>
                    <span>HORARIO</span>
                  </button>
                  {modalData && modalData.length > 0 && (
                    <>
                      <button type="button" className="btn-secundario btn btn-sm" 
                        onClick={() => setIsModalOpen(true)}>
                        Actividades
                      </button>
                      <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        contentLabel="Actividades"
                        className="modal-react"
                        overlayClassName="modal-overlay"
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="">{titulo} - Actividades</h6>
                          <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="nav nav-tabs">
                            {modalData.map((tab) => (
                              <li key={tab.id} className="nav-item">
                                <button
                                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                  onClick={() => setActiveTab(tab.id)}
                                >
                                  {tab.titulo}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <div className="tab-content mt-4">
                            {modalData.map(
                              (tab) =>
                                activeTab === tab.id && (
                                  <div key={tab.id} className="tab-actividad">
                                    <p>{tab.descripcion}</p>
                                  </div>
                                )
                            )}
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                            Cerrar
                          </button>
                        </div>
                        
                      </Modal>

                    </>
                  )}
                </div>
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

      
  </>
  )
}

