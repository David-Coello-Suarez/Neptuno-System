import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Private, Public } from '../layout'
import { RoutePublic, RouterPrivate } from '../views'

const storeRoute = createBrowserRouter([
  { path: '/auth', element: <Public />, children: RoutePublic },
  { path: '/dash', element: <Private />, children: RouterPrivate },
  { path: '/', element: <Navigate to={'dash'} replace /> },
])

export default storeRoute
