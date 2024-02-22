import { useContext } from 'react'
import { AppContext } from '../context/App'

const useApp = () => {
  const hook = useContext(AppContext)

  return { ...hook }
}

export default useApp
