import { EventEntity } from "../interfaces/event-entity.interface";
import { EventModel } from "../schemas/event.schemas";

export class EventService{

  async save(data: EventEntity){
    data.created_by = 'Jozimar'
    data.status = 'OPEN'
      // aqui e onde criamos um novo dado ou "modelo" para salvar no banco
      const newEvent = new EventModel(data)
      const result = await newEvent.save()
      return result;
  }
}