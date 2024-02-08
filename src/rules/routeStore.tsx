import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Private, Public } from '../layout'
import { RoutePublic } from '../views'

const storeRoute = createBrowserRouter([
  { path: '/auth', element: <Public />, children: RoutePublic },
  { path: '/dash', element: <Private /> },
  { path: '*', element: <Navigate to={'auth'} replace /> },
])

export default storeRoute
