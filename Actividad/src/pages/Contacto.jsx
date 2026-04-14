function Contacto() {
  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '28px',
        padding: '32px',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        boxShadow: '0 22px 60px rgba(15, 23, 42, 0.08)'
      }}>
        <h1 style={{
          margin: '0 0 16px',
          fontSize: '2.4rem',
          color: '#0f172a'
        }}>
          Contacto
        </h1>
        <p style={{
          margin: '0 0 28px',
          color: '#475569',
          fontSize: '1rem',
          lineHeight: '1.75'
        }}>
          Déjame tu nombre, correo y mensaje. Te responderé lo antes posible.
        </p>

        <form style={{ display: 'grid', gap: '22px' }}>
          <label style={{ display: 'grid', gap: '8px', color: '#334155', fontWeight: '600' }}>
            Nombre
            <input
              type="text"
              name="nombre"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                border: '1px solid rgba(148, 163, 184, 0.45)',
                fontSize: '1rem',
                color: '#0f172a'
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: '8px', color: '#334155', fontWeight: '600' }}>
            Email
            <input
              type="email"
              name="email"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                border: '1px solid rgba(148, 163, 184, 0.45)',
                fontSize: '1rem',
                color: '#0f172a'
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: '8px', color: '#334155', fontWeight: '600' }}>
            Mensaje
            <textarea
              name="mensaje"
              rows="6"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                border: '1px solid rgba(148, 163, 184, 0.45)',
                fontSize: '1rem',
                color: '#0f172a',
                resize: 'vertical'
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: '14px 22px',
              borderRadius: '16px',
              border: 'none',
              backgroundColor: '#4f46e5',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 14px 28px rgba(79, 70, 229, 0.25)'
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
