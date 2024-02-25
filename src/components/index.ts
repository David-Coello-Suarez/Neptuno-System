import { lazy } from 'react'
import DataTable from './DataTable'
import SearchInput from './SearchInput'

const Button = lazy(() => import('./Button'))
const Pagination = lazy(() => import('./Pagination'))
const UpdateState = lazy(() => import('./UpdateState'))

export { DataTable, SearchInput, Button, UpdateState, Pagination }
