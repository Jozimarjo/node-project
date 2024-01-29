import { EventStatus } from "../enums/event.enums";
import { EventDTO } from "../dtos/eventDto.interface";
import { EventEntity } from "../interfaces/event-entity.interface";
import { EventModel } from "../schemas/event.schemas";

export class EventService{

  async save(data: EventDTO){
    const eventToSave: EventEntity = {
      name: data.name,
      price: data.price,
      status: EventStatus.OPEN,
      isActive: true,
      created_by: 'Jozimar',
      finished_at: data.finished_at,
      started_at: data.started_at,
      quantity: data.quantity
    }

    // Viola o Solid
    if(eventToSave.started_at > eventToSave.finished_at){
      throw new Error('The start date cannot be later than the end date');
    }



    const modelMongoDb = new EventModel(eventToSave);
    const result = await modelMongoDb.save();
    return result;
  }
}