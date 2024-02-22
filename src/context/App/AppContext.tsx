import { createContext } from 'react'
import { InitialState } from '.'

type AppContextProps = {
  state: {
    isLoggued: boolean
    usuarioLoggued: {
      nombre_usuario: string
      fecha_miembro: string
      token_usuario: string
    }
    query: string
  }
  setUsuarioLoggued: (value: typeof InitialState) => void
  writeSearch: (value: string) => void
  clearUsuarioLoggued: () => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export default AppContext
