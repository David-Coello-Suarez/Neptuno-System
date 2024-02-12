import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import { usePostRolusuMutation } from '../../../resources/rolusu'
import { useRolsus } from '../../../hooks'
import { irolusu } from '../../../interfaces'
import { toast } from 'react-toastify'
import { RolusuValidation } from '../../../validation'

const ModalCreated = () => {
  const { rolusuState, modalCreated } = useRolsus()

  const [created, { isLoading }] = usePostRolusuMutation()

  const createdRol = async (data: irolusu, options: FormikHelpers<irolusu>) => {
    const response = await created(data).unwrap()

    if (response.estado === 1) {
      toast.success(response.mensaje)
      options.resetForm()
      modalCreated()
    } else {
      toast.warn(response.mensaje)
    }
  }

  return (
    <Modal
      bsSize="sm"
      backdrop="static"
      onHide={modalCreated}
      show={rolusuState.modalCreated}>
      <Formik
        onSubmit={createdRol}
        initialValues={rolusuState.rolusu}
        validationSchema={RolusuValidation}>
        <Form>
          <ModalHeader
            closeButton
            style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
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
              <ErrorMessage component="div" name="rolusu_descri" className="text-red" />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="rolusu_abrevi">Abreviatura</label>
              <Field
                id="rolusu_abrevi"
                name="rolusu_abrevi"
                placeholder="Abreviatura"
                className="form-control form-control-sm"
              />
              <ErrorMessage component="div" name="rolusu_abrevi" className="text-red" />
            </div>
          </ModalBody>
          <ModalFooter style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
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
      </Formik>
    </Modal>
  )
}

export default ModalCreated
