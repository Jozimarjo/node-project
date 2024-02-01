import { Express, Request, Response, Router } from 'express'
import { EventController } from '../controllers/event.controller'
import { CompositeValidators } from '../controllers/validators/composite.validator'
import { RequiredFieldValidator } from '../controllers/validators/required-field.validator'
import { Validators } from '../controllers/validators/validator.interface'
import { getEventFields } from '../dtos/eventDto.interface'
import { FieldSizeValidator } from '../controllers/validators/field-size.validator'
import { EventService } from '../services/event.service'
import { EventServiceValidator } from '../controllers/validators/services/event-service.validator'
import { EventRepository } from '../repositories/event.repository'
export default (app: Express)=>{
  const router = Router()
  
  router.post('/', async (request:Request, response: Response)=> {
          
    const fields = getEventFields();
    const validators: Validators[] = [];

    for( const field of fields){
      const requiredFieldValidator = new RequiredFieldValidator(field);
      validators.push(requiredFieldValidator)
    }
    const fieldValidator = new FieldSizeValidator('price', 0);
    validators.push(fieldValidator)
    const validator = new CompositeValidators(validators)
    const eventValidator = new EventServiceValidator()
    const repository = new EventRepository();
    const service = new EventService(eventValidator, repository);
    return new EventController(validator, service).save(request,response)
  })

   app.use('/event',router)
  }