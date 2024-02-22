import { Provider } from '../../../context/Rolusu'
import { BoxHeader } from '.'

const Layout = () => {
  return (
    <Provider>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="box-header">
              <BoxHeader />
            </div>
            <div className="box-body"></div>
            <div className="box-footer"></div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Layout
