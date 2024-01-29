import { Request, Response } from 'express'
import { EventEntity } from '../interfaces/event-entity.interface';
import { EventService } from '../services/event.service';
import { Validators } from './validators/validator.interface';
import { badRequest } from '../utils/http.utils';

export class EventController{
  constructor(private validator: Validators){}
  async save (request:Request, response: Response){
    const body = request.body
    const formatData: EventEntity = body;
    const error = this.validator.validate(formatData)
    
    if(error){
      const message = error.message
      return response.status(400).send(badRequest(message));
    }

    try {
      const service = new EventService()
      const result = await service.save(formatData);
      response.send(result);
    } catch (error) {
      return response.status(500).send({
        statusCode:500,
        message:'Internal Server Error'
      })
    }
  }

}