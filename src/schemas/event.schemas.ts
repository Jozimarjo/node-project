import mongoose from "mongoose";
import { EventStatus } from "../enums/event.enums";

const eventSchema = new mongoose.Schema({
  name: { type: String , required: true },
  status: { type: String,
    enum: EventStatus, required: true },
  created_by: { type: String , required: true },
  price: { type: Number , required: true },
  quantity: { type: Number , required: false },
  isActive: { type: Boolean , required: true },
  started_at:{ type: Date , required: true },
  finished_at:{ type: Date , required: true },
},{
  timestamps: true
});
// o model e a configuracao do schema "estrutura do dado" e a Collection "Tabela"
export const EventModel = mongoose.model('events', eventSchema);
