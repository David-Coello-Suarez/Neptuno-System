import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { reduxStore, storeRoute } from './rules'
import { Provider } from 'react-redux'
import { AppProvider } from './context/App'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'

const App = () => (
  <Provider store={reduxStore}>
    <ToastContainer />
    <AppProvider>
      <Suspense>
        <RouterProvider router={storeRoute} />
      </Suspense>
    </AppProvider>
  </Provider>
)

export default App
