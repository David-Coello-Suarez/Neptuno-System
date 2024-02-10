import { RouterProvider } from 'react-router-dom'
import { reduxStore, storeRoute } from './rules'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Provider store={reduxStore}>
    <ToastContainer />
    <RouterProvider router={storeRoute} />
  </Provider>
)

export default App
