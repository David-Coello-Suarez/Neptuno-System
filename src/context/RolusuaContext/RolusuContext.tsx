import { createContext } from 'react'
import { irolusu } from '../../interfaces'

type RolusuContextProps = {
  rolusuState: {
    rolusu: irolusu
    modalCreated: boolean
    modalUpdated: boolean
    query: string
    pagina: number
  }
  modalCreated: () => void
  modalUpdated: () => void
  limpiarFormulario: () => void
  setQuery: (payload: string) => void
  setPagina: (payload: number) => void
  editRolusu: (rolusu: irolusu) => void
}

export const RolusuContext = createContext<RolusuContextProps>({} as RolusuContextProps)
