import { FC } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { useDeleteRolusuMutation } from '../../../resources/rolusu'
import { Button } from '../../../components'
import { irolusu } from '../../../interfaces'

const DeleteButton: FC<{ item: irolusu }> = ({ item }) => {
  const [deleteItem, { isLoading }] = useDeleteRolusuMutation()

  const confirmDelete = () =>
    confirmAlert({
      title: 'Eliminar Rol',
      message: '¿Está seguro de eliminar el rol?',
      buttons: [
        { label: 'Si, continuar', onClick: () => deleteItem(item) },
        { label: 'No' },
      ],

      closeOnEscape: false,
      closeOnClickOutside: false,
    })

  return (
    <div className="text-center">
      {isLoading ? (
        <i className="fa fa-spin fa-spinner" />
      ) : (
        <Button
          color="danger"
          icon="fa-trash"
          title={'Eliminar'}
          handleClick={confirmDelete}
        />
      )}
    </div>
  )
}

export default DeleteButton
