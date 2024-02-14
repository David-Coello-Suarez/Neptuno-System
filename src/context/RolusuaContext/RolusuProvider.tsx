import { useReducer } from 'react'
import { RolusuReducer } from './rolusuReducer'
import { RolusuContext } from './RolusuContext'
import { ipaginacion, irolusu } from '../../interfaces'

const initialState = {
  rolusu: {
    rolusu_rolusu: 0,
    rolusu_descri: '',
    rolusu_abrevi: '',
    rolusu_estado: 'A',
  },
  query: '',
  pagina: 1,
  modalCreated: false,
  modalUpdated: false,
  paginacion: {
    pagina: 0,
    limite: 0,
    totalItems: 0,
    totalPages: 0,
  },
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const RolusuProvider = ({ children }: props) => {
  const [rolusuState, dispatch] = useReducer(RolusuReducer, initialState)

  const modalCreated = () => dispatch({ type: 'ModalCreated' })

  const modalUpdated = () => dispatch({ type: 'ModalUpdated' })

  const editRolusu = (payload: irolusu) => dispatch({ type: 'EditRolusu', payload })

  const setQuery = (payload: string) => dispatch({ type: 'Search', payload })

  const setPagina = (payload: number) => dispatch({ type: 'SetPagina', payload })

  const limpiarFormulario = () => dispatch({ type: 'LimpiarFormulario' })

  const setPaginacion = (payload: ipaginacion) =>
    dispatch({ type: 'SetPaginacion', payload })

  return (
    <RolusuContext.Provider
      value={{
        limpiarFormulario,
        setPaginacion,
        modalCreated,
        modalUpdated,
        rolusuState,
        editRolusu,
        setPagina,
        setQuery,
      }}>
      {children}
    </RolusuContext.Provider>
  )
}
