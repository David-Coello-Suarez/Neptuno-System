import { irolusu } from '../../interfaces'

interface RolusuState {
  rolusu: irolusu
  modalCreated: boolean
  modalUpdated: boolean
  query: string
  pagina: number
}

type Action =
  | { type: 'EditRolusu'; payload: irolusu }
  | { type: 'SetPagina'; payload: number }
  | { type: 'Search'; payload: string }
  | { type: 'LimpiarFormulario' }
  | { type: 'ModalCreated' }
  | { type: 'ModalUpdated' }

export const RolusuReducer = (state: RolusuState, action: Action) => {
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

    default:
      return state
  }
}
