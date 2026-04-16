import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "José Alfredo Vizcarra Tirado",
    carrera: "Ingeniería en Sistemas",
    grupo: "4-1",
    semestre: "8to"
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}