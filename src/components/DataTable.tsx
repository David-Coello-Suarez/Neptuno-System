import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface iprops<T> {
  columns: ColumnDef<T, unknown>[]
  data: T[]
  loading: boolean
}

const DataTable = <T,>({ columns, data, loading }: iprops<T>) => {
  const dataTable = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="table table-bordered">
      <thead>
        {dataTable.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
        ) : data.length == 0 ? (
          <tr>
            <td colSpan={columns.length}>No hay datos para mostrar</td>
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
