import { RouterProvider } from 'react-router-dom'
import { reduxStore, storeRoute } from './rules'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={reduxStore}>
    <RouterProvider router={storeRoute} />
  </Provider>
)

export default App
