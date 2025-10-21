import logo from '../assets/logo_sf.png'

export default function Login() {
  return (
    <div className="login-page d-flex align-items-center justify-content-center mt-5">
      <div className="card shadow p-4 login-card">
        <div className="text-center mb-4">
          <img src={logo} alt="Morta Gym logo" height="100" />
        </div>

        <h3 className="text-center mb-4 fw-bold">Ingresar</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label fw-semibold">DNI</label>
            <input
              type="text"
              className="form-control"
              id="dni"
              placeholder="Ej: 40123456"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
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
