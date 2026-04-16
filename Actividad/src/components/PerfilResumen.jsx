import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div>
      <h2>Resumen del perfil</h2>
      <p>{alumno.nombre} - {alumno.carrera}</p>
    </div>
  );
}

export default PerfilResumen;