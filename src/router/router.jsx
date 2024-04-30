import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainApp } from '@layouts/MainApp'
import { NewShipping } from '@views/Shipping'
import { LoginView } from '../views/login/Login'
import { Form } from '../views/new-shipping/Form'
import { Locations } from '../views/new-shipping/Locations'
import { Review } from '../views/new-shipping/ReviewShipping'
import { MyShippings } from '../views/my-shippings/MyShippings'

const baseURL = import.meta.env.VITE_BASE_URL

export const router = createBrowserRouter([
  {
    path: baseURL,
    element: <Navigate to='auth' />
  },
  {
    path: `${baseURL}/auth`,
    element: <LoginView />
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
        element: <NewShipping />,
        children: [
          {
            path: 'locations',
            element: <Locations />
          },
          {
            path: 'docs',
            element: <Form />
          },
          {
            path: 'review',
            element: <Review />
          }
        ]
      },
      {
        path: 'my-shipping',
        element: <MyShippings />
      },
      {
        path: 'my-quotes',
        element: <MyShippings />
      }
    ]
  }
])
