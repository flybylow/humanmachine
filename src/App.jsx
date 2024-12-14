import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Human Machine - player profile - admin</div>

      <ul>
        <li><Link to="/game1">play game 1</Link></li>
        <li><Link to="/game2">play game 2</Link></li>
        <li><Link to="/game3">play game 3</Link></li>
      </ul>
    </>
  )
}

export default App
