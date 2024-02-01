import { EventEntity } from "../interfaces/event-entity.interface";

export interface Repository{
  save(eventToSave: EventEntity): Promise<EventEntity>;
}