import { createContext } from 'react'
import { irolusu } from '../../interfaces'

type ContextProps = {
  state: { item: irolusu; openModalCreated: boolean; openModalUpdated: boolean }
  EditItem: (value: irolusu) => void
  CleanForm: () => void
  clickModalCreated: () => void
  clickModalUpdated: () => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export default Context
