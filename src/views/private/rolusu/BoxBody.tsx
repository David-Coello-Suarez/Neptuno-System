import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../../../components'
import { irolusu } from '../../../interfaces'
import { useGetRoulusuQuery } from '../../../resources/rolusu'
import { useMemo } from 'react'
import { useRolsus } from '../../../hooks'
import { ButtonDelete } from '.'
import UpdatedStatus from './UpdatedStatus'

const BoxBody = () => {
  const { editRolusu } = useRolsus()
  const { data, isLoading } = useGetRoulusuQuery({ pagina: 1, query: '' })

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
