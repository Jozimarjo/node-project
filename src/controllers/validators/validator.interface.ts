import { EventEntity } from "../../interfaces/event-entity.interface";

export interface Validators{
  validate(data: EventEntity): Error | void;
}