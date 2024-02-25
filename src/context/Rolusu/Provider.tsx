import { useReducer } from 'react'
import { Context, InitialState, Reducer } from '.'
import { irolusu } from '../../interfaces'

interface iprops {
  children: JSX.Element | JSX.Element[]
}

const Provider = ({ children }: iprops) => {
  const [state, dispatch] = useReducer(Reducer, InitialState)

  const EditItem = (payload: irolusu) => dispatch({ type: 'EditItem', payload })

  const CleanForm = () => dispatch({ type: 'CleanForm' })

  const clickModalCreated = () => dispatch({ type: 'openModalCreated' })

  const clickModalUpdated = () => dispatch({ type: 'openModalUpdated' })

  const value = { state, EditItem, CleanForm, clickModalCreated, clickModalUpdated }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
