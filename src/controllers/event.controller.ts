import { Request, Response } from 'express'
import { EventEntity } from '../interfaces/event-entity.interface';
import { EventService } from '../services/event.service';

export class EventController{
  async save (request:Request, response: Response){
    const body = request.body
    const formatData: EventEntity  = body;

    if(!formatData.name)
      return response.status(400).send({
        statusCode: 400,
        message: 'Name is required'
      }) 
  
    if(!formatData.price)
      return response.status(400).send({
        statusCode: 400,
        message: 'Price is required'
      })
  
    if(!formatData.started_at)
      return response.status(400).send({
      statusCode: 400,
      message: 'started_at is required'
      }) 
  
    if(!formatData.finished_at)
      return response.status(400).send({
        statusCode: 400,
        message: 'finished_at is required'
      })
  
    if(!formatData.isActive)
      return response.status(400).send({
      statusCode: 400,
      message: 'isActive is required'
      }) 
    
    if(formatData.price < 0){
      return response.status(400).send({
        statusCode: 400,
        message: 'price must be greater than 0'
        }) 
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