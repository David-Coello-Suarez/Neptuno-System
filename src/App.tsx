import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { storeRoute } from './rules'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={storeRoute} />
  </QueryClientProvider>
)

export default App
