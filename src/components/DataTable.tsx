import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

interface iprops<T> {
  columns: ColumnDef<T, unknown>[]
  data: T[]
  loading: boolean
}

const DataTable = <T,>({ columns, data, loading }: iprops<T>) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const dataTable = useReactTable({
    columns,
    data,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const totalColumns =
    dataTable.getHeaderGroups()[dataTable.getHeaderGroups().length - 1]['headers'].length

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          {dataTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  title={headerGroup.headers.length > 2 ? 'Click para ordernar' : ''}
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                  className={`${header.colSpan > 1 && 'text-center'}`}
                  style={{ width: header.getSize() }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: (
                      <span className="pull-right">
                        <i className="fa fa-sort-amount-asc" />
                      </span>
                    ),
                    desc: (
                      <span className="pull-right">
                        <i className="fa fa-sort-amount-desc" />
                      </span>
                    ),
                  }[header.column.getIsSorted() as string] ??
                    (headerGroup.headers.length > 2 && header.index > 1 && (
                      <span className="pull-right">
                        <i className="fa fa-sort" />
                      </span>
                    ))}
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
    </div>
  )
}

export default DataTable
