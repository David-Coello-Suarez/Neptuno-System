import { ipaginacion, irolusu } from '../../interfaces'

interface RolusuState {
  paginacion: ipaginacion
  modalCreated: boolean
  modalUpdated: boolean
  rolusu: irolusu
  pagina: number
  query: string
}

type Action =
  | { type: 'SetPaginacion'; payload: ipaginacion }
  | { type: 'EditRolusu'; payload: irolusu }
  | { type: 'SetPagina'; payload: number }
  | { type: 'Search'; payload: string }
  | { type: 'LimpiarFormulario' }
  | { type: 'ModalCreated' }
  | { type: 'ModalUpdated' }

export const RolusuReducer = (state: RolusuState, action: Action) => {
  console.log(action)
  switch (action.type) {
    case 'EditRolusu':
      return {
        ...state,
        rolusu: action.payload,
        modalUpdated: true,
      }

    case 'ModalCreated':
      return {
        ...state,
        modalCreated: !state.modalCreated,
      }

    case 'ModalUpdated':
      return {
        ...state,
        modalUpdated: !state.modalUpdated,
      }

    case 'Search':
      return {
        ...state,
        query: action.payload,
      }

    case 'SetPagina':
      return {
        ...state,
        pagina: action.payload,
      }

    case 'LimpiarFormulario':
      return {
        ...state,
        rolusu: {
          rolusu_rolusu: 0,
          rolusu_descri: '',
          rolusu_abrevi: '',
          rolusu_estado: 'A',
        },
      }

    case 'SetPaginacion':
      return {
        ...state,
        paginacion: action.payload,
      }

    default:
      return state
  }
}
