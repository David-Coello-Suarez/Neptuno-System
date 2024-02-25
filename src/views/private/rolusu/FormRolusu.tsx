import { Field } from 'formik'

const FormRolusu = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="rolusu_descri">Descripción</label>
            <Field
              id="rolusu_descri"
              name="rolusu_descri"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="rolusu_abrevi">Abreviatura</label>
            <Field
              id="rolusu_abrevi"
              name="rolusu_abrevi"
              className="form-control form-control-sm"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormRolusu
