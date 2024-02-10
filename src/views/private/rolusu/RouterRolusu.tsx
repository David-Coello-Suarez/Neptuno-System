import { RouteObject } from 'react-router-dom'
import Layout from './Layout'
import { RolusuProvider } from '../../../context/RolusuaContext/'

const RouterRolusu: RouteObject[] = [
  {
    index: true,
    element: (
      <RolusuProvider>
        <Layout />
      </RolusuProvider>
    ),
  },
]

export default RouterRolusu
