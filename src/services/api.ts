import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = import.meta.env.VITE_API_URL

const baseQuery = fetchBaseQuery({
  baseUrl,
})

export default baseQuery
