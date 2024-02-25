const InitialState = {
  isLoggued: false,
  usuarioLoggued: {
    nombre_usuario: '',
    fecha_miembro: '',
    token_usuario: '',
  },
  query: '',
  pagina: 1,
  paginacion: { pagina: 0, limite: 0, totalItems: 0, totalPages: 0 },
}

export default InitialState
