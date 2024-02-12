import { irolusu } from '../../interfaces'

interface RolusuState {
  rolusuState: {
    rolusu: irolusu
    modalCreated: boolean
    modalUpdated: boolean
  }
}

type Action =
  | { type: 'EditRolusu'; payload: irolusu }
  | { type: 'ModalCreated' }
  | { type: 'ModalUpdated' }

export const RolusuReducer = (state: RolusuState, action: Action) => {
  switch (action.type) {
    case 'EditRolusu':
      return {
        ...state,
        rolusuState: {
          ...state.rolusuState,
          rolusu: action.payload,
          modalUpdated: true,
        },
      }

    case 'ModalCreated':
      return {
        ...state,
        rolusuState: {
          ...state.rolusuState,
          modalCreated: !state.rolusuState.modalCreated,
        },
      }

    case 'ModalUpdated':
      return {
        ...state,
        rolusuState: {
          ...state.rolusuState,
          modalUpdated: !state.rolusuState.modalUpdated,
        },
      }

    default:
      return state
  }
}
