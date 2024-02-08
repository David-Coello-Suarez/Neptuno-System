import { RouteObject } from 'react-router-dom'
import LogginView from './LogginView'
import RecorverPasswordView from './RecorverPasswordView'

const RoutePublic: RouteObject[] = [
  { index: true, element: <LogginView /> },
  { path: 'recoverPassword', element: <RecorverPasswordView /> },
]

export default RoutePublic
