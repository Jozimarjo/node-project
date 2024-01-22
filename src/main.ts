import * as express from 'express';
import {Request, Response} from 'express';
import mongoose from 'mongoose'
 let client: any
mongoose.connect('mongodb://localhost:27018/tickets_db').then(res=>{
  client = res
  console.log('banco conectado')
})
const app = express();
app.use(express.json())
const port = 3000;
// schema e o formato que o dado tera na collection "tabela" do banco
const ticketsSchema = new mongoose.Schema({
  name: String,
  initialDate: Date
});
// o model e a configuracao do schema "estrutura do dado" e a Collection "Tabela"
const Ticket = mongoose.model('tickets', ticketsSchema);

app.get('/',( request:Request, response: Response)=>{
  const sum = (val1:number, val2:number)=>{
    return val1+val2
  }
  const result = sum(1,2)
  return response.send({soma:result})
})

app.post('/ticket',async (request:Request, response: Response)=>{
  const body = request.body
  // aqui e onde criamos um novo dado ou "modelo" para salvar no banco
  const newTicket = new Ticket(body)
  
  const result = await newTicket.save()
  return response.send(result)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
