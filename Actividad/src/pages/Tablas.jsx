import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

function createData(nombre, apellido, edad) {
  return { nombre, apellido, edad }
}

const rows = [
  createData('Grisel', 'Silva', 16),
  createData('Leslie', 'Valenzuela', 23),
  createData('Carlos', 'Ramirez', 25),
  createData('Aime', 'Roman', 17),
  createData('Luis', 'Martinez', 30),
  createData('Jose', 'Vizcarra', 22),
]

function BasicTable() {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginTop: '24px'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '16px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
            <th style={{
              padding: '16px',
              textAlign: 'left',
              fontWeight: 'bold',
              borderBottom: '2px solid #1565c0'
            }}>
              Nombre
            </th>
            <th style={{
              padding: '16px',
              textAlign: 'left',
              fontWeight: 'bold',
              borderBottom: '2px solid #1565c0'
            }}>
              Apellido
            </th>
            <th style={{
              padding: '16px',
              textAlign: 'right',
              fontWeight: 'bold',
              borderBottom: '2px solid #1565c0'
            }}>
              Edad
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const esMenor = row.edad <= 17
            return (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white',
                  borderBottom: '1px solid #e0e0e0',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.parentElement.style.backgroundColor = '#e3f2fd'
                }}
                onMouseLeave={(e) => {
                  e.target.parentElement.style.backgroundColor = index % 2 === 0 ? '#f5f5f5' : 'white'
                }}
              >
                <td style={{
                  padding: '16px',
                  color: esMenor ? '#d32f2f' : 'inherit',
                  fontWeight: esMenor ? 'bold' : 'normal'
                }}>
                  {row.nombre}
                </td>
                <td style={{
                  padding: '16px',
                  color: esMenor ? '#d32f2f' : 'inherit',
                  fontWeight: esMenor ? 'bold' : 'normal'
                }}>
                  {row.apellido}
                </td>
                <td style={{ padding: '16px', textAlign: 'right' }}>
                  <span style={{
                    backgroundColor: esMenor ? '#ffcdd2' : '#e8f5e8',
                    color: esMenor ? '#c62828' : '#2e7d32',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    border: `2px solid ${esMenor ? '#e57373' : '#81c784'}`
                  }}>
                    {row.edad}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert('¡El contador no puede superar 10!')
      setCount(10)
    }

    if (count < 0) {
      setCount(0)
    }
  }, [count])

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '24px'
    }}>
      <h3 style={{
        color: '#1976d2',
        marginBottom: '20px',
        fontSize: '1.5rem',
        textAlign: 'center'
      }}>
        Contador Interactivo
      </h3>

      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#7b1fa2',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={incrementar}
            disabled={count >= 10}
            style={{
              padding: '12px 24px',
              backgroundColor: count >= 10 ? '#ccc' : '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: count >= 10 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              if (count < 10) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (count < 10) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
              }
            }}
          >
            ➕ Incrementar
          </button>

          <button
            onClick={decrementar}
            disabled={count <= 0}
            style={{
              padding: '12px 24px',
              backgroundColor: count <= 0 ? '#ccc' : '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: count <= 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              if (count > 0) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (count > 0) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
              }
            }}
          >
            ➖ Decrementar
          </button>
        </div>

        {count === 0 && (
          <div style={{
            backgroundColor: '#fff3e0',
            color: '#e65100',
            padding: '12px',
            borderRadius: '8px',
            marginTop: '16px',
            border: '1px solid #ff9800',
            fontWeight: 'bold'
          }}>
            ⚠️ ¡Has llegado al límite mínimo (0)!
          </div>
        )}

        {count === 10 && (
          <div style={{
            backgroundColor: '#e8f5e8',
            color: '#2e7d32',
            padding: '12px',
            borderRadius: '8px',
            marginTop: '16px',
            border: '1px solid #4caf50',
            fontWeight: 'bold'
          }}>
            🎯 ¡Has alcanzado el límite máximo (10)!
          </div>
        )}
      </div>
    </div>
  )
}

function Tablas() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <img src={heroImg} style={{ width: '80px', height: '84px' }} alt="" />
          <img src={reactLogo} style={{ width: '60px', height: '60px' }} alt="React logo" />
          <img src={viteLogo} style={{ width: '60px', height: '60px' }} alt="Vite logo" />
        </div>

        <h1 style={{
          color: '#1976d2',
          marginBottom: '16px',
          fontSize: '2.5rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Get Started with React
        </h1>

        <p style={{
          color: '#666',
          fontSize: '1.2rem',
          marginBottom: 0
        }}>
          Edit <code style={{
            backgroundColor: '#f5f5f5',
            padding: '4px 8px',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>src/App.jsx</code> and save to test <strong style={{ color: '#1976d2' }}>HMR</strong>
        </p>
      </div>

      {/* Contador Section */}
      <Contador />

      {/* Tabla Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '24px'
      }}>
        <h3 style={{
          color: '#1976d2',
          marginBottom: '16px',
          fontSize: '1.5rem'
        }}>
          Tabla de Personas
        </h3>
        <p style={{
          color: '#666',
          marginBottom: '20px'
        }}>
          Lista de personas con resaltado para menores de edad (≤17 años)
        </p>
        <BasicTable />
      </div>

      {/* Documentation Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '24px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            color: '#1976d2',
            marginBottom: '16px',
            fontSize: '1.5rem'
          }}>
            📚 Documentation
          </h3>
          <p style={{
            color: '#666',
            marginBottom: '20px'
          }}>
            Your questions, answered
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://vite.dev/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: '#f5f5f5',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e3f2fd';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f5f5f5';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <img src={viteLogo} style={{ width: '24px', height: '24px' }} alt="" />
              Explore Vite
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: '#f5f5f5',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e3f2fd';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f5f5f5';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <img src={reactLogo} style={{ width: '24px', height: '24px' }} alt="" />
              Learn React
            </a>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            color: '#1976d2',
            marginBottom: '16px',
            fontSize: '1.5rem'
          }}>
            🌐 Connect with us
          </h3>
          <p style={{
            color: '#666',
            marginBottom: '20px'
          }}>
            Join the Vite community
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { text: '🐙 GitHub', url: 'https://github.com/vitejs/vite' },
              { text: '💬 Discord', url: 'https://chat.vite.dev/' },
              { text: '🐦 X (Twitter)', url: 'https://x.com/vite_js' },
              { text: '🔵 Bluesky', url: 'https://bsky.app/profile/vite.dev' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e3f2fd';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tablas