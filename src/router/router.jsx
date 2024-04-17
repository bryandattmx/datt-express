import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainApp } from '@layouts/MainApp'
import { NewShipping } from '@views/Shipping'

const baseURL = import.meta.env.VITE_BASE_URL

export const router = createBrowserRouter([
  {
    path: baseURL,
    element: <Navigate to='auth' />
  },
  {
    path: `${baseURL}/auth`,
    element: <p>Login</p>
  },
  {
    path: `${baseURL}/app`,
    element: <MainApp />,
    children: [
      {
        path: 'dashboard',
        element: <p>ESTE DASHBOARD</p>
      },
      {
        path: 'new-shipping',
        element: <NewShipping />
      },
      {
        path: 'my-shipping',
        element: <p>Mis envios</p>
      }
    ]
  }
])
