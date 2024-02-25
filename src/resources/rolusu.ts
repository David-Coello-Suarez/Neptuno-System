import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../services/api'
import { ipaginacion, irespuesta, irolusu } from '../interfaces'
import { toast } from 'react-toastify'

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
    getRoulusu: build.query<iresponse, { pagina: number; queryDebounced: string }>({
      query: ({ pagina, queryDebounced }) => ({
        url: `/${route}`,
        method: 'GET',
        params: { pagina, query: queryDebounced },
      }),
      transformResponse: (response: irespuesta<iresponse>): iresponse => response.data,
      transformErrorResponse: (errResponse) => {
        const responseError = errResponse.data as irespuesta
        return responseError
      },
      providesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    postRolusu: build.mutation<irespuesta, irolusu>({
      query: (body) => ({ url: `/${route}`, method: 'POST', body }),
      transformErrorResponse: (errResponse) => {
        const responseError = errResponse.data as irespuesta
        if (responseError.estado === 2) {
          toast.warning(responseError.mensaje)
        }
        return responseError
      },
      transformResponse: (response: irespuesta) => {
        if (response.estado === 1) {
          toast.success(response.mensaje)
        } else {
          toast.warning(response.mensaje)
        }

        return response
      },
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    putRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu, ...body }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: irespuesta) => {
        if (response.estado === 1) {
          toast.success(response.mensaje)
        } else {
          toast.warning(response.mensaje)
        }

        return response
      },
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    deleteRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu, ...body }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'DELETE',
        body,
      }),
      transformResponse: (response: irespuesta) => {
        if (response.estado === 1) {
          toast.success(response.mensaje)
        } else {
          toast.warning(response.mensaje)
        }

        return response
      },
      invalidatesTags: [{ type: 'Rolusu', id: 'LIST' }],
    }),
    patchRolusu: build.mutation<irespuesta, irolusu>({
      query: ({ rolusu_rolusu, ...body }) => ({
        url: `/${route}/${rolusu_rolusu}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (response: irespuesta) => {
        if (response.estado === 1) {
          toast.success(response.mensaje)
        } else {
          toast.warning(response.mensaje)
        }

        return response
      },
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
