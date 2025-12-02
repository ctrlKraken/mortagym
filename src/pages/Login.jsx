import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo_sf.png";
import { usuarios } from "../data/usuarios";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dni = e.target.dni.value.trim();
    const password = e.target.password.value.trim();

    const usuarioEncontrado = usuarios.find(
      (u) => u.dni === dni && u.password === password
    );

    if (!usuarioEncontrado) {
      alert("Credenciales incorrectas");
      return;
    }

    // Guardar usuario logueado
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

    // Redirección según rol
    if (usuarioEncontrado.rol === "admin") navigate("/admin");
    else if (usuarioEncontrado.rol === "profesor") navigate("/profesor");
    else if (usuarioEncontrado.rol === "usuario") navigate("/perfil");
    else navigate("/recepcion");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center mt-5">
      <div className="card shadow p-4 login-card">
        <div className="text-center mb-4">
          <img src={logo} alt="Morta Gym logo" height="100" />
        </div>

        <h3 className="text-center titulo-pagina mb-2">Ingresar</h3>

        {error && (
          <div className="alert alert-danger text-center py-2">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label fw-semibold">
              DNI
            </label>
            <input
              type="text"
              name="dni"
              className="form-control"
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
              name="password"
              className="form-control"
              placeholder="********"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary login-btn">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
