import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Tablas from "./pages/Tablas";
import Usuarios from "./pages/Usuarios";
import { Mapa } from "./pages/Mapa";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </>
  );
}

export default App;