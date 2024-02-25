import { Pagination } from '../../../components'
import { useApp } from '../../../hooks'

const BoxFooter = () => {
  const { changePage, state } = useApp()

  const { paginacion } = state

  return <Pagination changePage={changePage} paginacion={paginacion} />
}

export default BoxFooter
