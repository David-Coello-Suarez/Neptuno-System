import { RouteObject } from 'react-router-dom'
import RouterRolusu from './rolusu/RouterRolusu'

const RouterPrivate: RouteObject[] = [{ path: 'rolusu', children: RouterRolusu }]

export default RouterPrivate
