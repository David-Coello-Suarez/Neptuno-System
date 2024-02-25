import { FC } from 'react'

interface iprops {
  handleClick: () => void
  stateText: boolean
}

const UpdateState: FC<iprops> = ({ stateText, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`btn btn-sm btn-${stateText ? 'success' : 'warning'}`}>
    <i className={`fa fa-${stateText ? 'check' : 'exclamation-triangle'} margin-r-5`} />
    <span>{stateText ? 'Activo' : 'Inactivo'}</span>
  </button>
)

export default UpdateState
