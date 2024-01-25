import { Express, Request, Response, Router } from 'express'
import { EventController } from '../controllers/event.controller'
export default (app: Express)=>{
  const router = Router()
  
  router.post('/', async (request:Request, response: Response)=> {
    return new EventController().save(request,response)
  })

   app.use('/event',router)
  }