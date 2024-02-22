import { RouterProvider } from 'react-router-dom'
import { reduxStore, storeRoute } from './rules'
import { Provider } from 'react-redux'
import { AppProvider } from './context/App'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Provider store={reduxStore}>
    <ToastContainer />
    <AppProvider>
      <RouterProvider router={storeRoute} />
    </AppProvider>
  </Provider>
)

export default App
