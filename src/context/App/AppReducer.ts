interface initialState {
  isLoggued: boolean
  usuarioLoggued: {
    nombre_usuario: string
    fecha_miembro: string
    token_usuario: string
  }
  query: string
}

type Action =
  | { type: 'setUsuarioLoggued'; payload: initialState }
  | { type: 'writeSearch'; payload: string }
  | { type: 'clearUsuarioLoggued' }

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

    default:
      return state
  }
}

export default AppReducer
