import { useEffect, useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useApp, useDebounced } from '../../../hooks'
import { useGetRoulusuQuery } from '../../../resources/rolusu'
import { DataTable } from '../../../components'
import { DeleteButton, EditButton, State } from '.'
import { irolusu } from '../../../interfaces'

const BoxBody = () => {
  const { state, setPaginacion } = useApp()

  const { query, pagina } = state

  const queryDebounced = useDebounced(query)

  const { data, isLoading } = useGetRoulusuQuery({ queryDebounced, pagina })

  const columns = useMemo<ColumnDef<irolusu, unknown>[]>(
    () => [
      {
        header: () => <div className="text-center">EDITAR</div>,
        id: 'editar',
        cell: (info) => (
          <div className="text-center">
            <EditButton item={info.cell.row.original} />
          </div>
        ),
      },
      {
        header: () => <div className="text-center">BORRAR</div>,
        id: 'borrar',
        cell: (info) => <DeleteButton item={info.cell.row.original} />,
      },
      {
        header: () => 'ID',
        accessorKey: 'rolusu_rolusu',
        cell: (info) => info.getValue(),
      },
      {
        header: () => 'Descripción',
        accessorKey: 'rolusu_descri',
        cell: (info) => info.getValue(),
      },
      {
        header: () => 'Abreviatura',
        accessorKey: 'rolusu_abrevi',
        cell: (info) => info.getValue(),
      },
      {
        header: () => 'Estado',
        accessorKey: 'rolusu_estado',
        cell: (info) => <State item={info.cell.row.original} />,
      },
    ],

    [],
  )

  useEffect(() => {
    if (data?.paginacion) {
      setPaginacion(data.paginacion)
    } else {
      setPaginacion({ pagina: 0, limite: 0, totalItems: 0, totalPages: 0 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.paginacion])

  return (
    <DataTable columns={columns} loading={isLoading} data={data?.rolusu as irolusu[]} />
  )
}

export default BoxBody
