function Home() {
  return (
    <div style={{ padding: '24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#f8fafc',
        borderRadius: '28px',
        padding: '42px',
        boxShadow: '0 24px 70px rgba(15, 23, 42, 0.08)',
        border: '1px solid rgba(148, 163, 184, 0.18)'
      }}>
        <h1 style={{
          margin: '0 0 24px',
          fontSize: '3.4rem',
          lineHeight: '1.02',
          color: '#0f172a'
        }}>
          Bienvenido a mi portafolio
        </h1>
        <p style={{
          margin: '0 0 24px',
          color: '#334155',
          fontSize: '1.1rem',
          lineHeight: '1.85'
        }}>
          Aquí encontrarás una selección de proyectos, experiencias y habilidades en desarrollo web. Este espacio está pensado para mostrar mi trabajo con claridad y estilo.
        </p>
        <p style={{
          margin: '0 0 20px',
          color: '#334155',
          fontSize: '1.1rem',
          lineHeight: '1.75'
        }}>
          Navega por las secciones para descubrir cómo estructuro una aplicación en React, cómo organizo mis datos en tablas y cómo te puedes contactar conmigo.
        </p>
        <p style={{
          margin: 0,
          color: '#334155',
          fontSize: '1.1rem',
          lineHeight: '1.75'
        }}>
          Este portafolio está diseñado para ser claro, moderno y fácil de explorar. Si quieres conocer más sobre mí, visita la sección de Acerca de mí.
        </p>
      </div>
    </div>
  );
}

export default Home;
