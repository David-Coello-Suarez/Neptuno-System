import { useReducer } from 'react'
import { RolusuReducer } from './rolusuReducer'
import { RolusuContext } from './RolusuContext'
import { irolusu } from '../../interfaces'

const initialState = {
  rolusuState: {
    rolusu: {} as irolusu,
    modalCreated: false,
    modalUpdated: false,
  },
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const RolusuProvider = ({ children }: props) => {
  const [rolusuState, dispatch] = useReducer(RolusuReducer, initialState)

  const modalCreated = () => dispatch({ type: 'ModalCreated' })

  const modalUpdated = () => dispatch({ type: 'ModalUpdated' })

  const editRolusu = (rolusu: irolusu) =>
    dispatch({ type: 'EditRolusu', payload: rolusu })

  return (
    <RolusuContext.Provider
      value={{
        ...rolusuState,
        modalCreated,
        modalUpdated,
        editRolusu,
      }}>
      {children}
    </RolusuContext.Provider>
  )
}
