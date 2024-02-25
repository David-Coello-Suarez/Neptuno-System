import { createContext } from 'react'
import { InitialState } from '.'
import { ipaginacion } from '../../interfaces'

type AppContextProps = {
  state: {
    isLoggued: boolean
    usuarioLoggued: {
      nombre_usuario: string
      fecha_miembro: string
      token_usuario: string
    }
    query: string
    pagina: number
    paginacion: ipaginacion
  }
  setUsuarioLoggued: (value: typeof InitialState) => void
  setPaginacion: (pagina: ipaginacion) => void
  writeSearch: (value: string) => void
  changePage: (page: number) => void
  clearUsuarioLoggued: () => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export default AppContext
