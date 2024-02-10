import { BoxBody, BoxHeader, ModalCreated } from '.'

const Layout = () => {
  return (
    <>
      <ModalCreated />

      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header with-border">
              <BoxHeader />
            </div>
            <div className="box-body table-responsive">
              <BoxBody />
            </div>
            <div className="box-footer clearfix"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
