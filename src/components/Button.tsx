import { FC } from 'react'

interface iprops {
  handleClick: () => void
  icon: string
  title: string
  color?: string
  loading?: boolean
}

const Button: FC<iprops> = ({ handleClick, icon, title, color = 'success' }) => {
  return (
    <button
      title={title}
      type="button"
      onClick={handleClick}
      className={`btn btn-sm btn-${color} margin-r-5`}>
      <i className={`fa ${icon} `}></i>
    </button>
  )
}

export default Button
