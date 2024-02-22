import { useReducer } from 'react'
import { AppContext, AppReducer, InitialState } from '.'

interface ipayload {
  isLoggued: boolean
  usuarioLoggued: {
    nombre_usuario: string
    fecha_miembro: string
    token_usuario: string
  }
  query: string
}

interface iprops {
  children: JSX.Element | JSX.Element[]
}

const AppProvider = ({ children }: iprops) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState)

  const setUsuarioLoggued = (payload: ipayload) =>
    dispatch({ type: 'setUsuarioLoggued', payload })

  const clearUsuarioLoggued = () => dispatch({ type: 'clearUsuarioLoggued' })

  const writeSearch = (payload: string) => dispatch({ type: 'writeSearch', payload })

  const value = { state, setUsuarioLoggued, clearUsuarioLoggued, writeSearch }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
