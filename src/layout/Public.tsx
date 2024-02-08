import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Public = () => {
  useEffect(() => {
    $('body').removeClass().addClass('hold-transition login-page')
  }, [])

  return <Outlet />
}

export default Public
