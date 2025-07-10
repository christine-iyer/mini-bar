import { useState } from 'react'
import reactLogo from './assets/botanical-gin.png'
import viteLogo from './assets/rose-gin.jpg'
import melonLogo from './assets/melon-gin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={melonLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Mini-Bar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Half the alcohol, double the fun, quadruple the virtue
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>
        <p>
          Follow us on <a href="https://instagram.com/christine.iyer/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </footer>
     
    </>
  )
}

export default App
