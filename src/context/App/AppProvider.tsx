import { useReducer } from 'react'
import { AppContext, AppReducer, InitialState } from '.'
import { ipaginacion } from '../../interfaces'

interface ipayload {
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

interface iprops {
  children: JSX.Element | JSX.Element[]
}

const AppProvider = ({ children }: iprops) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState)

  const setUsuarioLoggued = (payload: ipayload) =>
    dispatch({ type: 'setUsuarioLoggued', payload })

  const clearUsuarioLoggued = () => dispatch({ type: 'clearUsuarioLoggued' })

  const writeSearch = (payload: string) => dispatch({ type: 'writeSearch', payload })

  const setPaginacion = (payload: ipaginacion) =>
    dispatch({ type: 'setPaginacion', payload })

  const changePage = (payload: number) => dispatch({ type: 'changePage', payload })


  const value = {
    state,
    changePage,
    writeSearch,
    setPaginacion,
    setUsuarioLoggued,
    clearUsuarioLoggued,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
