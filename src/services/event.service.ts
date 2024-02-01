import { EventStatus } from "../enums/event.enums";
import { EventDTO } from "../dtos/eventDto.interface";
import { EventEntity } from "../interfaces/event-entity.interface";
import { EventModel } from "../schemas/event.schemas";
import { Validators } from "../controllers/validators/validator.interface";
import { EventRepository } from "../repositories/event.repository";

export class EventService{
  constructor(private validator: Validators, private repository: EventRepository){}
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

    this.validator.validate(eventToSave);

    const result = this.repository.save(eventToSave)
    return result;
  }
}