import { lazy } from 'react'
import DataTable from './DataTable'
import SearchInput from './SearchInput'

const Button = lazy(() => import('./Button'))

export { DataTable, SearchInput, Button }
