import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Profile from './components/Profile.jsx'
import Game1 from './components/Game1.jsx'
import Game2 from './components/Game2.jsx'
import Game3 from './components/Game3.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/game1",
    element: <Game1 />,
  },
  {
    path: "/game2",
    element: <Game2 />,
  },
  {
    path: "/game3",
    element: <Game3 />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
