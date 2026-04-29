// Importaciones principales
import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexto
import { AlumnoProvider } from "./context/AlumnoContext";

// Componentes - App principal con su propio sistema de rutas
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AlumnoProvider>

        {/* Rutas - App maneja todas las rutas internas */}
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>

      </AlumnoProvider>
    </BrowserRouter>
  </React.StrictMode>
);