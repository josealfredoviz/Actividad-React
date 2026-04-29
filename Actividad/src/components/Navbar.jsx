import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    padding: '12px 20px',
    backgroundColor: location.pathname === path ? 'rgba(255,255,255,0.23)' : 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontWeight: '700',
    transition: 'all 0.25s ease',
    border: location.pathname === path ? '2px solid white' : '2px solid transparent',
    boxShadow: location.pathname === path ? '0 0 16px rgba(255,255,255,0.28)' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  });

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #3f51b5 0%, #7b1fa2 100%)',
      padding: '16px 0',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '18px',
        padding: '0 20px'
      }}>
        <div style={{ flex: '1 1 220px', minWidth: '220px' }}>
          <h2 style={{
            margin: 0,
            color: 'white',
            fontSize: '1.55rem',
            fontWeight: '800',
            textShadow: '1px 1px 3px rgba(0,0,0,0.25)'
          }}>
            Mi Portafolio
          </h2>
        </div>

        <div style={{
          flex: '2 1 520px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <Link to="/" style={linkStyle("/")}>🏠 Inicio</Link>
          <Link to="/acerca" style={linkStyle("/acerca")}>👤 Acerca de mí</Link>
          <Link to="/contacto" style={linkStyle("/contacto")}>📧 Contacto</Link>
          <Link to="/tablas" style={linkStyle("/tablas")}>📊 Tablas</Link>
          <Link to="/usuarios" style={linkStyle("/usuarios")}>👥 Usuarios</Link>
          <Link to="/mapa" style={linkStyle("/mapa")}>🗺️ Mapa</Link>
          <Link to="/ruta" style={linkStyle("/ruta")}>🚗 Ruta</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;