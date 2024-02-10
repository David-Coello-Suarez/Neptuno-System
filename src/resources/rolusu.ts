import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../services/api'
import { ipaginacion, irespuesta, irolusu } from '../interfaces'

const route = 'rolusu'

interface iresponse {
  rolusu: irolusu[]
  paginacion: ipaginacion
}

export const Rolusu = createApi({
  reducerPath: 'rolusuApi',
  baseQuery,
  tagTypes: ['Rolusu'],
  endpoints: (build) => ({
    getRoulusu: build.query<iresponse, { pagina: number; query: string }>({
      query: ({ pagina, query }) => ({
        url: `/${route}`,
        method: 'GET',
        params: { pagina, query },
      }),
      transformResponse: (response: irespuesta<iresponse>): iresponse => response.data,
      providesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    postRolusu: build.mutation<irespuesta, irolusu>({
      query: (body) => ({ url: `/${route}`, method: 'POST', body }),
      transformResponse: (response: irespuesta) => response,
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
  }),
})

export const { usePostRolusuMutation, useGetRoulusuQuery } = Rolusu
