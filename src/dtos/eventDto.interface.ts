export interface EventDTO {
  name: string,
  price: number,
  started_at: Date,
  finished_at: Date,
  quantity?: number,
  isActive: boolean
}
