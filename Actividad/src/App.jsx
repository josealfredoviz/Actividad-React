import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
    <TableContainer component={Paper} style={{ marginTop: '24px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="tabla personas">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Apellido</strong></TableCell>
            <TableCell align="right"><strong>Edad</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const esMenor = row.edad <= 17
            return (
              <TableRow
                key={index}
                sx={{ backgroundColor: esMenor ? '#ffebee' : 'inherit' }}
              >
                <TableCell sx={{ color: esMenor ? 'red' : 'inherit' }}>
                  {row.nombre}
                </TableCell>
                <TableCell sx={{ color: esMenor ? 'red' : 'inherit' }}>
                  {row.apellido}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: esMenor ? 'red' : 'inherit', fontWeight: esMenor ? 'bold' : 'normal' }}
                >
                  {row.edad}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Validar si count supera 10
    if (count > 10) {
      alert('¡El contador no puede superar 10!')
      setCount(10)
    }
    
    // Validar si count es negativo
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
    <div>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <button className="counter" onClick={incrementar} style={{ display: 'block', margin: '10px auto' }}>
        Incrementar +
      </button>
      <button className="counter" onClick={decrementar} style={{ display: 'block', margin: '10px auto' }}>
        Decrementar -
      </button>
      {count === 0 && (
        <p style={{ fontSize: '16px', color: '#dc3545', fontWeight: 'bold', marginTop: '10px' }}>
          ⚠️ ¡Has llegado al límite mínimo (0)!
        </p>
      )}
      <BasicTable />
    </div>
  )
}

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        
        <Contador />

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
