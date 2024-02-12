import { usePatchRolusuMutation } from '../../../resources/rolusu'
import { toast } from 'react-toastify'
import { irolusu } from '../../../interfaces'

interface iprops {
  rolusu: irolusu
}

const UpdatedStatus = ({ rolusu }: iprops) => {
  const [deleted, { isLoading }] = usePatchRolusuMutation()

  const handleClick = async () => {
    const item = Object.assign({}, rolusu)

    item.rolusu_estado = rolusu.rolusu_estado === 'A' ? 'I' : 'A'

    const response = await deleted(item).unwrap()

    if (response.estado == 1) {
      toast.success(response.mensaje)
    } else {
      toast.warn(response.mensaje)
    }
  }

  return rolusu.rolusu_estado == 'I' ? (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="btn btn-sm btn-success">
      {isLoading ? (
        <i className="fa fa-spin fa-spinner" />
      ) : (
        <i className="fa fa-check"></i>
      )}
      <span style={{ marginLeft: '1rem' }}>Activo</span>
    </button>
  ) : (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="btn btn-sm btn-warning">
      {isLoading ? (
        <i className="fa fa-spin fa-spinner" />
      ) : (
        <i className="fa fa fa-close"></i>
      )}
      <span style={{ marginLeft: '1rem' }}>Inactivo</span>
    </button>
  )
}

export default UpdatedStatus