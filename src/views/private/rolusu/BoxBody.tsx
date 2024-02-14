import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useDebounced, useRolsus } from '../../../hooks'
import { DataTable } from '../../../components'
import { useGetRoulusuQuery } from '../../../resources/rolusu'
import UpdatedStatus from './UpdatedStatus'
import { ButtonDelete } from '.'
import { irolusu } from '../../../interfaces'

const BoxBody = () => {
  const {
    editRolusu,
    rolusuState: { query, pagina },
  } = useRolsus()

  const debounceQuery = useDebounced(query)

  const { data, isLoading } = useGetRoulusuQuery({ pagina, query: debounceQuery })

  const columns = useMemo<ColumnDef<irolusu>[]>(
    () => [
      {
        header: 'Permisos',
        columns: [
          {
            cell: (row) => (
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={() => editRolusu(row.cell.row.original)}>
                <i className="fa fa-pencil"></i>
              </button>
            ),
            header: 'Editar',
          },
          {
            header: 'Borrar',
            cell: (row) => <ButtonDelete rolusu={row.cell.row.original} />,
          },
        ],
      },
      {
        header: ' Rol para usuarios',
        columns: [
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
          {
            accessorKey: 'rolusu_estado',
            header: 'Estado',
            cell: (info) => <UpdatedStatus rolusu={info.cell.row.original} />,
          },
        ],
      },
    ],
    [],
  )

  return (
    <DataTable columns={columns} data={data?.rolusu as irolusu[]} loading={isLoading} />
  )
}

export default BoxBody
