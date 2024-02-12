import {
  ColumnDef,
  GroupingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

interface iprops<T> {
  columns: ColumnDef<T, unknown>[]
  data: T[]
  loading: boolean
}

const DataTable = <T,>({ columns, data, loading }: iprops<T>) => {
  const [grouping, setGrouping] = useState<GroupingState>([])

  const dataTable = useReactTable({
    columns,
    data,
    state: {
      grouping,
    },
    onGroupingChange: setGrouping,
    getCoreRowModel: getCoreRowModel(),
  })

  const totalColumns =
    dataTable.getHeaderGroups()[dataTable.getHeaderGroups().length - 1]['headers'].length

  return (
    <table className="table table-bordered">
      <thead>
        {dataTable.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={`${header.colSpan > 1 && 'text-center'}`}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={columns.length}>
              <i className="fa fa-spi fa-spiner"></i>
            </td>
          </tr>
        ) : !data ? (
          <tr>
            <td colSpan={totalColumns} className="text-center">
              No hay datos para mostrar
            </td>
          </tr>
        ) : (
          dataTable.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default DataTable
