import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../services/api'

const route = 'rolusu'

export const Rolusu = createApi({
  reducerPath: 'rolusuApi',
  baseQuery,
  endpoints: (build) => ({
    getRoulusu: build.query({
      query: () => `/${route}`,
    }),
  }),
})
