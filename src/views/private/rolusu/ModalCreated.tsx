import { Modal } from 'react-bootstrap'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRolusu } from '../../../hooks'
import { usePostRolusuMutation } from '../../../resources/rolusu'
import { FormRolusu } from '.'
import { RolusuValidation } from '../../../validation'
import { irolusu } from '../../../interfaces'

const ModalCreated = () => {
  const { state, clickModalCreated, CleanForm } = useRolusu()

  const [created, { isLoading }] = usePostRolusuMutation()

  const { openModalCreated, item } = state

  const handleClick = async (item: irolusu, optionForm: FormikHelpers<irolusu>) => {
    const response = await created(item).unwrap()

    if (response.estado === 1) {
      optionForm.resetForm()
      clickModalCreated()
    }
  }

  const cleanForm = () => {
    clickModalCreated()
    CleanForm()
  }

  return (
    <Modal bsSize="small" backdrop="static" show={openModalCreated} onHide={cleanForm}>
      <Formik
        initialValues={item}
        onSubmit={handleClick}
        validationSchema={RolusuValidation}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Crear Perfil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormRolusu />
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              onClick={cleanForm}
              disabled={isLoading}
              data-dismiss="modal"
              className="btn btn-default pull-left">
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? <i className="fa fa-spin fa-spinner" /> : 'Guardar'}
            </button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  )
}

export default ModalCreated
