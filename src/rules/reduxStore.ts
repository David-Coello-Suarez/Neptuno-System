import { configureStore } from '@reduxjs/toolkit'
import { middleware, reducer } from '../resources'
import { setupListeners } from '@reduxjs/toolkit/query'

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

setupListeners(reduxStore.dispatch)
