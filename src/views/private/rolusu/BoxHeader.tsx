import { useDispatch } from 'react-redux'
import { useRolsus } from '../../../hooks'
import { Rolusu } from '../../../resources/rolusu'

const BoxHeader = () => {
  const dispatch = useDispatch()

  const { modalCreated } = useRolsus()

  const handleClickUpdated = () => {
    dispatch(Rolusu.util.invalidateTags([{ type: 'Rolusu', id: 'LIST' }]))
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-9" style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          title="Actualizar"
          onClick={handleClickUpdated}
          className="btn btn-sm btn-success margin-r-5">
          <i className="fa fa-refresh"></i>
        </button>
        <button
          type="button"
          title="Añadir"
          onClick={modalCreated}
          className="btn btn-sm btn-success margin-r-5">
          <i className="fa fa-plus"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success margin-r-5"
          title="Descargar Excel">
          <i className="fa fa-file-excel-o"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success margin-r-5"
          title="Descargar PDF">
          <i className="fa fa-file-pdf-o"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success margin-r-5"
          title="Imprimir">
          <i className="fa fa-print"></i>
        </button>
      </div>
      <div className="col-xs-12 col-md-3" style={{ marginBottom: '1rem' }}>
        <div className="input-group-sm">
          <input
            type="text"
            name="table_search"
            className="form-control pull-right"
            placeholder="Search"
          />
          {/* 
          <div className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <i className="fa fa-search"></i>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BoxHeader
