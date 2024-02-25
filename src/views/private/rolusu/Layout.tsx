import { Provider } from '../../../context/Rolusu'
import { BoxBody, BoxFooter, BoxHeader, ModalCreated, ModalUpdated } from '.'

const Layout = () => {
  return (
    <Provider>
      <ModalCreated />
      <ModalUpdated />

      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="box-header">
              <BoxHeader />
            </div>
            <div className="box-body">
              <BoxBody />
            </div>
            <div className="box-footer">
              <BoxFooter />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Layout
