import logo from '../assets/logo_sf.png'
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

export default function Home() {
  return (
    <div>
      {/* Sección Hero */}
      <section className="hero-simple d-flex flex-column align-items-center justify-content-center text-center py-5">
        <img src={logo} alt="Morta Gym" className="hero-logo mb-3" />

        <h1 className="hero-titulo hero-title">
          Bienvenido a Morta Gym
        </h1>

        <p className="hero-sub mt-3">
          Entrená con profesionales, equipos de alta calidad y un plan pensado para vos.
        </p>
      </section>

      {/* Quiénes somos */}
      <section className="quienes-somos-section">
        <h2 className="qs-titulo">Quiénes Somos</h2>

        <div className="qs-content">
          <div className="qs-left">
            <p className="fs-5">
              En <span className="fw-bold">Morta Gym</span> creemos en el esfuerzo
              constante y la disciplina como camino a la transformación.
              Somos más que un gimnasio: un espacio pensado para motivarte e inspirarte.
            </p>
            <p className="fs-5">
              Contamos con diversas disciplinas para todos los gustos:{" "}
              <strong>Pilates, Spinning, Musculación</strong> y una{" "}
              <strong>pileta climatizada</strong> para entrenamientos funcionales y natación.
            </p>
            <p className="fs-5">
              Nuestro equipo de profesionales está listo para acompañarte en cada paso hacia tu mejor versión.
            </p>
          </div>

          <div className="qs-right">
            <div className="qs-foto chica">
              <img src={foto1} alt="actividad 1" />
            </div>
            <div className="qs-foto grande">
              <img src={foto2} alt="actividad central" />
            </div>
            <div className="qs-foto chica">
              <img src={foto3} alt="actividad 3" />
            </div>
          </div>
        </div>
      </section>


      {/* Mapa */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="qs-titulo mb-4">Dónde Estamos</h2>
          <div className="map-wrapper">
            <iframe
              title="Ubicación Morta Gym"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.0994395432651!2d-67.53350274930453!3d-46.43829936486683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde5df0017c63c93%3A0x4015e9afe045e2e3!2sMORTA%20GYM!5e1!3m2!1ses-419!2sar!4v1759701364443!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
