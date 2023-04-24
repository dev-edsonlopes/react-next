import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - Configuração do Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 2 - Import Componente

import Home from './routes/Home.jsx'
import Contato from './routes/Contato.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contato",
        element: <Contato />
      }
    ]
  }

  // {
  //   path: "/",
  //   element: <Home />
  // },
  // {
  //   path: "contato",
  //   element: <Contato />
  // }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
