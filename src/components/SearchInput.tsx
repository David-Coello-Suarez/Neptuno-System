import { ChangeEvent } from 'react'

interface iprops {
  value: string
  onChange: (value: string) => void
}

const SearchInput = ({ value, onChange }: iprops) => {
  const handleClickValue = ({ target }: ChangeEvent<HTMLInputElement>) =>
    onChange(target.value)

  return (
    <div className="input-group-sm">
      <input
        type="text"
        value={value}
        name="table_search"
        onChange={handleClickValue}
        className="form-control pull-right"
        placeholder="Buscar Coincidencias"
      />
    </div>
  )
}

export default SearchInput
