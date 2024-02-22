import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const LayoutRolusu = lazy(() => import('./rolusu/Layout'))

const RouterPrivate: RouteObject[] = [{ path: 'rolusu', element: <LayoutRolusu /> }]

export default RouterPrivate
