import { useContext } from 'react'
import { RolusuContext } from '../context/RolusuaContext'

export const useRolsus = () => {
  const data = useContext(RolusuContext)

  return { ...data }
}
