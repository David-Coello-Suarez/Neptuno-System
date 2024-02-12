import * as yup from 'yup'

export const RolusuValidation = yup.object().shape({
  rolusu_descri: yup
    .string()
    .required('Descripción es requerido')
    .min(1, 'Debe contener al menos un caracter')
    .max(100, 'No puede superar los 100 caracteres'),
  rolusu_abrevi: yup
    .string()
    .required('Abreviatura es requerido')
    .min(1, 'Debe contener al menos un caracter')
    .max(50, 'No puede superar los 50 caracteres'),
})
