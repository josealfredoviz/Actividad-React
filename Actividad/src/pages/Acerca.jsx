import fotoPerfil from '../assets/foto-de-perfil.png';

function Acerca() {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚙️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🌐' },
    { name: 'Git', icon: '🔧' },
    { name: 'Dialog Flow', icon: '🤖' },
    { name: 'Python', icon: '🐍' }
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '28px',
        flexWrap: 'wrap',
        backgroundColor: '#f8fbff',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }}>
        <div style={{ flex: '1 1 420px', minWidth: '280px' }}>
          <span style={{
            display: 'inline-block',
            marginBottom: '16px',
            color: '#7c3aed',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Acerca de mí
          </span>
          <h1 style={{
            margin: '0 0 18px',
            fontSize: '2.5rem',
            lineHeight: '1.05',
            color: '#111827'
          }}>
            José Alfredo Vizcarra Tirado
          </h1>
          <p style={{
            margin: '0 0 12px',
            color: '#475569',
            fontSize: '1.05rem',
            fontWeight: '600',
            lineHeight: '1.8'
          }}>
            Carrera: Ingeniería en Sistemas
          </p>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '18px',
            padding: '20px',
            border: '1px solid rgba(148, 163, 184, 0.18)',
            boxShadow: '0 12px 28px rgba(15, 23, 42, 0.05)'
          }}>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '1.08rem', lineHeight: '1.85' }}>
              Soy estudiante de Ingeniería en Sistemas con enfoque en el desarrollo web y la creación de experiencias digitales atractivas, Trabajo con HTML, CSS y JavaScript para hacer proyectos responsivos y dinámicos, y uso React para crear aplicaciones modernas.
            </p>
            <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '1.08rem', lineHeight: '1.85' }}>
              Me enfoco en aprender nuevas herramientas y a la vez mejorar la experiencia del usuario en cada proyecto que realizo.
            </p>
          </div>
        </div>

        <div style={{ flex: '0 0 220px', textAlign: 'center', minWidth: '220px' }}>
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            style={{
              width: '100%',
              maxWidth: '220px',
              borderRadius: '24px',
              border: '3px solid rgba(99, 102, 241, 0.18)',
              boxShadow: '0 14px 24px rgba(15, 23, 42, 0.12)',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'grid', gap: '24px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '22px',
          padding: '26px',
          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.06)'
        }}>
          <h2 style={{ margin: '0 0 16px', color: '#1e293b' }}>Perfil</h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Mi objetivo es crecer como desarrollador full-stack mientras entrego aplicaciones útiles, fáciles de usar y visualmente atractivas. Cada proyecto lo veo como una oportunidad para aprender y construir algo funcional.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '22px',
          padding: '26px',
          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.06)'
        }}>
          <h3 style={{ margin: '0 0 18px', color: '#1e293b' }}>Habilidades</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {skills.map((skill) => (
              <li key={skill.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                backgroundColor: '#f5f7ff',
                color: '#111827',
                borderRadius: '16px',
                fontWeight: '600',
                boxShadow: '0 8px 18px rgba(99, 102, 241, 0.08)'
              }}>
                <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
