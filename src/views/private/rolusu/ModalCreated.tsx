import { Field, Form, Formik, FormikHelpers } from 'formik'
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import { usePostRolusuMutation } from '../../../resources/rolusu'
import { useRolsus } from '../../../hooks'
import { irolusu } from '../../../interfaces'
import { toast } from 'react-toastify'

const ModalCreated = () => {
  const { rolusuState, modalCreated } = useRolsus()

  const [created, { isLoading }] = usePostRolusuMutation()

  const createdRol = async (data: irolusu, options: FormikHelpers<irolusu>) => {
    console.log(data)
    const response = await created(data).unwrap()

    if (response.estado === 1) {
      toast.success(response.mensaje)
      options.resetForm()
    } else {
      toast.warn(response.mensaje)
    }
  }

  return (
    <Formik initialValues={rolusuState.rolusu} onSubmit={createdRol}>
      <Modal
        bsSize="sm"
        backdrop="static"
        onHide={modalCreated}
        show={rolusuState.modalCreated}>
        <Form>
          <ModalHeader closeButton>
            <ModalTitle>Rol</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label htmlFor="rolusu_descri">Descripción</label>
              <Field
                id="rolusu_descri"
                name="rolusu_descri"
                placeholder="Descripción"
                className="form-control form-control-sm"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="rolusu_abrevi">Abreviatura</label>
              <Field
                id="rolusu_abrevi"
                name="rolusu_abrevi"
                placeholder="Abreviatura"
                className="form-control form-control-sm"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              type="reset"
              disabled={isLoading}
              onClick={modalCreated}
              className="btn btn-default pull-left">
              Cerrar
            </button>
            <button type="submit" disabled={isLoading} className="btn btn-primary">
              {isLoading ? <i className="fa fa-spin fa-spiner" /> : 'Crear'}
            </button>
          </ModalFooter>
        </Form>
      </Modal>
    </Formik>
  )
}

export default ModalCreated
