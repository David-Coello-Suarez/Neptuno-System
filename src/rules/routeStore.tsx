import { createBrowserRouter } from 'react-router-dom'
import { Private, Public } from '../layout'

const storeRoute = createBrowserRouter([
  { path: '/auth', element: <Public />, children: [] },
  { index: true, element: <Private /> },
])

export default storeRoute
