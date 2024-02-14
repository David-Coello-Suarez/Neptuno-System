import { createContext } from 'react'
import { ipaginacion, irolusu } from '../../interfaces'

type RolusuContextProps = {
  rolusuState: {
    rolusu: irolusu
    modalCreated: boolean
    modalUpdated: boolean
    query: string
    pagina: number
    paginacion: ipaginacion
  }
  modalCreated: () => void
  modalUpdated: () => void
  limpiarFormulario: () => void
  setQuery: (payload: string) => void
  setPagina: (payload: number) => void
  editRolusu: (rolusu: irolusu) => void
  setPaginacion: (paginacion: ipaginacion) => void
}

export const RolusuContext = createContext<RolusuContextProps>({} as RolusuContextProps)
