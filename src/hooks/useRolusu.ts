import { useContext } from 'react'
import { Context } from '../context/Rolusu'

const useRolusu = () => {
  const hook = useContext(Context)

  return { ...hook }
}

export default useRolusu