import { SearchInput } from '../../../components'
import { useRolsus } from '../../../hooks'

const SearchQuery = () => {
  const {
    setQuery,
    rolusuState: { query },
  } = useRolsus()

  return <SearchInput value={query} onChange={setQuery} />
}

export default SearchQuery
