import React from 'react'
import { RiFacebookBoxFill, RiInstagramFill } from '@remixicon/react';
import { FaWhatsapp } from 'react-icons/fa';

import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-4 mt-5 footer">
        {/* Fila superior: CTA con redes a la izquierda, logo centro, WhatsApp a la derecha */}
        <div className="container">
          {/* Título CTA centrado arriba */}
          <div className="row text-center mb-3">
            <div className="col">
              <p className="fw-bold fs-4 mb-0">¡Seguinos en nuestras redes!</p>
            </div>
          </div>

          <div className="row align-items-center text-center text-md-center">
            {/* Columna izquierda: Redes sociales (FB e IG) */}
            <div className="col-12 d-flex justify-content-center gap-3 fs-4">
              <a href="https://www.facebook.com/profile.php?id=61561671207463" className="social-links text-white" target="_blank" rel="noopener noreferrer">
                <RiFacebookBoxFill size={40} />
              </a>
              <a href="https://www.instagram.com/morta_gym/" className="social-links  text-white" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill size={40} />
              </a>
            </div>


            {/* Columna derecha: WhatsApp en superior derecha */}
            <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end">
              <a
                href="https://wa.me/5492975014149"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-footer-icon text-white"
              >
                <FaWhatsapp size={45} />
              </a>
            </div>
          </div>

          {/* Separador blanco */}
          <hr className="border-white my-4" />
        </div>

        {/* Fila final: Copyright centrado */}
        <div className="container">
          <div className="row pb-3">
            <div className="col text-center small">
              &copy; {new Date().getFullYear()} | CTRL Kraken
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;