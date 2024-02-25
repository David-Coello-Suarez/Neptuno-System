import { lazy } from 'react'

import BoxHeader from './BoxHeader'
import BoxBody from './BoxBody'
import FormRolusu from './FormRolusu'
import BoxFooter from './BoxFooter'

const State = lazy(() => import('./State'))
const EditButton = lazy(() => import('./EditButton'))
const DeleteButton = lazy(() => import('./DeleteButton'))
const ModalCreated = lazy(() => import('./ModalCreated'))
const ModalUpdated = lazy(() => import('./ModalUpdated'))

export {
  BoxHeader,
  BoxBody,
  BoxFooter,
  FormRolusu,
  State,
  EditButton,
  DeleteButton,
  ModalCreated,
  ModalUpdated,
}
