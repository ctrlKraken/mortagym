import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_sf.png";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el refresco de la página

    // (Opcional) Podés agregar validaciones aquí
    // Por ahora redirigimos directamente al perfil
    navigate("/perfil");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center mt-5">
      <div className="card shadow p-4 login-card">
        <div className="text-center mb-4">
          <img src={logo} alt="Morta Gym logo" height="100" />
        </div>

        <h3 className="text-center titulo-pagina mb-2">Ingresar</h3>
        <h5 className="text-center fw-bold mb-4">Próximamente</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label fw-semibold">
              DNI
            </label>
            <input
              type="text"
              className="form-control"
              id="dni"
              placeholder="Ej: 40123456"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              required
            />
          </div>

          <div className="d-grid">
            <button disabled type="submit" className="btn btn-primary login-btn">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
