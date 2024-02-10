import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../../components'
import { irolusu } from '../../../interfaces'
import { useGetRoulusuQuery } from '../../../resources/rolusu'

const BoxBody = () => {
  const { data, isLoading } = useGetRoulusuQuery({ pagina: 1, query: '' })

  const columns: ColumnDef<irolusu>[] = [
    {
      header: 'Editar',
      // id: 'editar',
      cell: () => (
        <button type="button" className="btn btn-sm btn-success">
          <i className="fa fa-pencil"></i>
        </button>
      ),
      size: 20,
      enableResizing: false,
    },
    {
      header: 'Borrar',
      cell: () => (
        <button type="button" className="btn btn-sm btn-danger">
          <i className="fa fa-trash"></i>
        </button>
      ),
      size: 10,
      enableResizing: false,
    },
    { accessorKey: 'rolusu_rolusu', header: 'ID', cell: (info) => info.getValue() },
    {
      accessorKey: 'rolusu_descri',
      header: 'Descripción',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'rolusu_abrevi',
      header: 'Abreviatura',
      cell: (info) => info.getValue(),
    },
    { accessorKey: 'rolusu_estado', header: 'Estado', cell: (info) => info.getValue() },
  ]

  return (
    <DataTable columns={columns} data={data?.rolusu as irolusu[]} loading={isLoading} />
  )
}

export default BoxBody
