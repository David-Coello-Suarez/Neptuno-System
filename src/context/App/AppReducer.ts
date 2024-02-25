import { ipaginacion } from '../../interfaces'

interface initialState {
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

type Action =
  | { type: 'setUsuarioLoggued'; payload: initialState }
  | { type: 'setPaginacion'; payload: ipaginacion }
  | { type: 'writeSearch'; payload: string }
  | { type: 'changePage'; payload: number }
  | { type: 'clearUsuarioLoggued' }
  | { type: 'openModal' }

const AppReducer = (state: initialState, action: Action): initialState => {
  switch (action.type) {
    case 'setUsuarioLoggued':
      localStorage.setItem('token', action.payload.usuarioLoggued.token_usuario)
      return {
        ...state,
        isLoggued: true,
        usuarioLoggued: action.payload.usuarioLoggued,
      }

    case 'clearUsuarioLoggued':
      localStorage.clear()
      return {
        ...state,
        isLoggued: false,
      }

    case 'writeSearch':
      return {
        ...state,
        query: action.payload,
      }

    case 'changePage':
      return {
        ...state,
        pagina: action.payload,
      }

    case 'setPaginacion':
      return {
        ...state,
        paginacion: action.payload,
      }

    default:
      return state
  }
}

export default AppReducer
