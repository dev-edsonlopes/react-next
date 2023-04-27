import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './routes/main.jsx'
import Repositorio from './routes/Repositorio.jsx'

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/repositorio:repositorio",
        element: <Repositorio />
      }
    
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
