import { Link } from 'react-router-dom'

const LogginView = () => {
  return (
    <div className="login-box">
      <div className="login-logo">
        <Link to={'/'}>
          <b>Admin</b>LTE
        </Link>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Ingrese sus credenciales para iniciar sesion</p>

        <form action="/dash">
          <div className="form-group has-feedback">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electronico"
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Contraseña" />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-7"></div>

            <div className="col-xs-5">
              <button type="submit" className="btn btn-primary btn-block btn-flat">
                Iniciar Sesion
              </button>
            </div>
          </div>
        </form>

        {/* <Link to={'recoverPassword'}>Olvidé mi contraseña</Link> */}
      </div>
    </div>
  )
}

export default LogginView
