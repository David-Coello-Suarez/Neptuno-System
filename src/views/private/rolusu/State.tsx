import { FC } from 'react'
import { usePatchRolusuMutation } from '../../../resources/rolusu'
import { UpdateState } from '../../../components'
import { irolusu } from '../../../interfaces'

const State: FC<{ item: irolusu }> = ({ item }) => {
  const [updateState, { isLoading }] = usePatchRolusuMutation()

  const stateValue = item.rolusu_estado === 'A'

  const handleClick = async () => {
    const dataItem = Object.assign({}, item)

    dataItem.rolusu_estado = item.rolusu_estado === 'A' ? 'I' : 'A'

    await updateState(dataItem)
  }

  return (
    <div className="text-center">
      {isLoading ? (
        <i className="fa fa-spin fa-spinner" />
      ) : (
        <UpdateState stateText={stateValue} handleClick={handleClick} />
      )}
    </div>
  )
}

export default State
