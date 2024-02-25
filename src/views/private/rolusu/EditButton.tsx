import { FC } from 'react'
import { useRolusu } from '../../../hooks'
import { Button } from '../../../components'
import { irolusu } from '../../../interfaces'

interface iprops {
  item: irolusu
}

const EditButton: FC<iprops> = ({ item }) => {
  const { EditItem } = useRolusu()

  const handleClickEdit = () => EditItem(item)

  return (
    <>
      <Button handleClick={handleClickEdit} icon={'fa-edit'} title={'EDITAR'} />
    </>
  )
}

export default EditButton
