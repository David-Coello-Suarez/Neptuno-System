import { BoxBody, BoxHeader, ModalCreated, ModalUpdated } from '.'
import { useRolsus } from '../../../hooks'

const Layout = () => {
  const { rolusuState } = useRolsus()
  return (
    <>
      <ModalCreated />
      <ModalUpdated />

      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header with-border">
              <BoxHeader />
            </div>
            <div className="box-body table-responsive">
              <BoxBody />
            </div>
            <div className="box-footer clearfix">
              {JSON.stringify(rolusuState.paginacion, null, 2)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
