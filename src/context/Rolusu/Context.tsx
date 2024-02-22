import { createContext } from 'react'
import { irolusu } from '../../interfaces'

type ContextProps = {
  state: { item: irolusu }
  EditItem: (value: irolusu) => void
  CleanForm: () => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export default Context
