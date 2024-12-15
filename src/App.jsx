import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Human Machine - <Link to="/profile"> Profile</Link></div>

      <ul>
        <li><Link to="/game1">play game 1</Link></li>
        <li><Link to="/game2">play game 2</Link></li>
        <li><Link to="/game3">play game 3</Link></li>
      </ul>
    </>
  )
}

export default App