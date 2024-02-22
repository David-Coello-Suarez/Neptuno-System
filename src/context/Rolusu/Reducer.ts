import { InitialState } from '.'
import { irolusu } from '../../interfaces'

interface initialState {
  item: irolusu
}

type Action = { type: 'EditItem'; payload: irolusu } | { type: 'CleanForm' }

const Reducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case 'EditItem':
      return {
        ...state,
        item: action.payload,
      }

    case 'CleanForm':
      return {
        ...state,
        item: InitialState.item,
      }

    default:
      return state
  }
}

export default Reducer
