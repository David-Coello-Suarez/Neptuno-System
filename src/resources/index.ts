import { Rolusu } from './rolusu'

export const reducer = {
  [Rolusu.reducerPath]: Rolusu.reducer,
}

export const middleware = [Rolusu.middleware]
