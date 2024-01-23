import * as express from 'express';
import {Request, Response} from 'express';
import mongoose from 'mongoose'
 let client: any
mongoose.connect('mongodb://localhost:27018/tickets_db').then(res=>{
  client = res
  console.log('banco conectado')
})
// DTO - Transferencia de dados entre camadas ( Ex: front ---> back)
interface EventDTO {
  name: string,
  price: number,
  started_at: Date,
  finished_at: Date,
  quantity?: number,
  isActive: boolean
}

// ENTITY - Representacao do nosso objeto no backend
interface EventEntity {
  name: string,
  status: string,
  price: number,
  started_at: Date,
  finished_at: Date,
  quantity?: number,
  isActive: boolean,
  created_by: string 
}

const app = express();
app.use(express.json())
const port = 3000;
// schema e o formato que o dado tera na collection "tabela" do banco
const eventSchema = new mongoose.Schema({
  name: { type: String , required: true },
  status: { type: String , required: true },
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
const EventModel = mongoose.model('events', eventSchema);

app.post('/ticket',async (request:Request, response: Response)=>{
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
    formatData.created_by = 'Jozimar'
    formatData.status = 'OPEN'
      // aqui e onde criamos um novo dado ou "modelo" para salvar no banco
      const newEvent = new EventModel(formatData)
    
      const result = await newEvent.save()
      return response.send(result)
  } catch (error) {
    return response.status(500).send({
      statusCode:500,
      message:'Internal Server Error'
    })
  }

})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
