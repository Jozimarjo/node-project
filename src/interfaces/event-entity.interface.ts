import { EventStatus } from "../enums/event.enums";

export interface EventEntity {
  id?: string;
  name: string,
  status: EventStatus,
  price: number,
  started_at: Date,
  finished_at: Date,
  isActive: boolean,
  created_by: string, 
  quantity?: number
}
