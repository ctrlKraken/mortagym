import FichaInscripcion from "../../components/admin/FichaInscripcion";

const mockAlumno = {
  nombre: "Juan Pérez",
  dni: "34567890",
  disciplina: "Natación",
};

export default function Renovacion() {
  return <FichaInscripcion datosIniciales={mockAlumno} />;
}
