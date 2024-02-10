import { createContext } from 'react'
import { irolusu } from '../../interfaces'

type RolusuContextProps = {
  rolusuState: {
    rolusu: irolusu
    modalCreated: boolean
    modalUpdated: boolean
  }
  modalCreated: () => void
  modalUpdated: () => void
  editRolusu: (rolusu: irolusu) => void
}

export const RolusuContext = createContext<RolusuContextProps>({} as RolusuContextProps)
