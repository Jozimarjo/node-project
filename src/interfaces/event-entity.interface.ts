export interface EventEntity {
  name: string,
  status: string,
  price: number,
  started_at: Date,
  finished_at: Date,
  quantity?: number,
  isActive: boolean,
  created_by: string 
}