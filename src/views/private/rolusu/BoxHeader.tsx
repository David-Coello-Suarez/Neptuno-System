import { useDispatch } from 'react-redux'
import { Button, SearchInput } from '../../../components'
import { Rolusu } from '../../../resources/rolusu'
import { useApp, useRolusu } from '../../../hooks'

const BoxHeader = () => {
  const dispatch = useDispatch()

  const handleClickInvalidate = () =>
    dispatch(Rolusu.util.invalidateTags([{ type: 'Rolusu', id: 'LIST' }]))

  const { state, writeSearch } = useApp()

  const { clickModalCreated } = useRolusu()

  const { query } = state

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8" style={{ marginBottom: '1rem' }}>
        <Button
          icon={'fa-refresh'}
          title={'ACTUALIZAR TABLA'}
          handleClick={handleClickInvalidate}
        />
        <Button
          icon={'fa-plus'}
          title={'AGREGAR NUEVO ROL'}
          handleClick={clickModalCreated}
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <SearchInput value={query} onChange={writeSearch} />
      </div>
    </div>
  )
}

export default BoxHeader
