import { Modal } from 'react-bootstrap'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRolusu } from '../../../hooks'
import { usePutRolusuMutation } from '../../../resources/rolusu'
import { FormRolusu } from '.'
import { RolusuValidation } from '../../../validation'
import { irolusu } from '../../../interfaces'

const ModalUpdated = () => {
  const { state, clickModalUpdated, CleanForm } = useRolusu()

  const [updated, { isLoading }] = usePutRolusuMutation()

  const { openModalUpdated, item } = state

  const handleClick = async (item: irolusu, optionForm: FormikHelpers<irolusu>) => {
    const response = await updated(item).unwrap()

    if (response.estado === 1) {
      optionForm.resetForm()
      clickModalUpdated()
    }
  }

  const cleanForm = () => {
    clickModalUpdated()
    CleanForm()
  }

  return (
    <Modal bsSize="small" backdrop="static" show={openModalUpdated} onHide={cleanForm}>
      <Formik
        initialValues={item}
        onSubmit={handleClick}
        validationSchema={RolusuValidation}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Actualizar Perfil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormRolusu />
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              disabled={isLoading}
              data-dismiss="modal"
              onClick={cleanForm}
              className="btn btn-default pull-left">
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? <i className="fa fa-spin fa-spinner" /> : 'Actualizar'}
            </button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  )
}

export default ModalUpdated
