import { EventModel } from "../schemas/event.schemas";
import { EventEntity } from "../interfaces/event-entity.interface";
import { Repository } from "./repository.interface";
import { EventStatus } from "../enums/event.enums";

export class EventRepository implements Repository{

  async save(eventToSave: EventEntity): Promise<EventEntity> {
    const modelMongoDb = new EventModel(eventToSave);
    const { created_by, name, status, _id , price ,started_at, finished_at, isActive, quantity} = await modelMongoDb.save();
    const statusEnum = Object.values(EventStatus).find(v=>v === status) as EventStatus;
    const parseObj: EventEntity = {
      created_by,
      name,
      status: statusEnum,
      id: _id.toString(),
      price,
      started_at,
      finished_at,
      isActive,
      quantity: quantity || undefined
    }
    return parseObj;
  }

}