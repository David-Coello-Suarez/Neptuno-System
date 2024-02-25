import { InitialState } from '.'
import { irolusu } from '../../interfaces'

interface initialState {
  item: irolusu
  openModalCreated: boolean
  openModalUpdated: boolean
}

type Action =
  | { type: 'EditItem'; payload: irolusu }
  | { type: 'CleanForm' }
  | { type: 'openModalCreated' }
  | { type: 'openModalUpdated' }

const Reducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case 'EditItem':
      return {
        ...state,
        item: action.payload,
        openModalUpdated: true,
      }

    case 'CleanForm':
      return {
        ...state,
        item: InitialState.item,
      }

    case 'openModalCreated':
      return {
        ...state,
        openModalCreated: !state.openModalCreated,
      }

    case 'openModalUpdated':
      return {
        ...state,
        openModalUpdated: !state.openModalUpdated,
      }

    default:
      return state
  }
}

export default Reducer
