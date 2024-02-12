import { toast } from 'react-toastify'
import { irolusu } from '../../../interfaces'
import { useDeleteRolusuMutation } from '../../../resources/rolusu'

interface iprops {
  rolusu: irolusu
}

const ButtonDelete = ({ rolusu }: iprops) => {
  const [deleted, { isLoading }] = useDeleteRolusuMutation()

  const handleClick = async () => {
    const response = await deleted(rolusu).unwrap()

    if (response.estado == 1) {
      toast.success(response.mensaje)
    } else {
      toast.warn(response.mensaje)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="btn btn-sm btn-danger">
      {isLoading ? (
        <i className="fa fa-spin fa-spinner" />
      ) : (
        <i className="fa fa-trash"></i>
      )}
    </button>
  )
}

export default ButtonDelete
