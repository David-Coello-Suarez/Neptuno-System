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
    putRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu, ...body }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: irespuesta) => response,
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    deleteRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'DELETE',
      }),
      transformResponse: (response: irespuesta) => response,
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    patchRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu, ...body }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (response: irespuesta) => response,
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
  }),
})

export const {
  useDeleteRolusuMutation,
  usePatchRolusuMutation,
  usePutRolusuMutation,
  usePostRolusuMutation,
  useGetRoulusuQuery,
} = Rolusu
