export interface EventDTO {
  name: string,
  price: number,
  started_at: Date,
  finished_at: Date,
  isActive: boolean,
  quantity?: number,
}

export const getEventFields = ()=>{
  return [
    'name',
    'price',
    'started_at',
    'finished_at',
    'isActive',
  ]
}
