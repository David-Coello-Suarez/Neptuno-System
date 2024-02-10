export interface irespuesta<T = unknown> {
  estado: number
  mensaje: string
  data: T
}
