import ReactDOM from 'react-dom/client'
import './index.css'

import Primeira from './pages/Primeira'
import Segunda from './pages/Segunda'
import Terceira from './pages/terceira-questao/Terceira'
import PaginaBase from './PaginaBase.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Teste from './pages/Teste'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaBase />,
    children: [
      {
        path: 'primeira',
        element: <Primeira />
      },
      {
        path: 'segunda',
        element: <Segunda />
      },
      {
        path: 'terceira',
        element: <Terceira />,
      }
    ]
  },
  {
    path: 'teste',
    element: <Teste />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
