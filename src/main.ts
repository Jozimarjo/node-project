import * as express from 'express';
import eventRouter from './routes/event.routes'
import mongoose from 'mongoose'
 let client: any
mongoose.connect('mongodb://localhost:27018/tickets_db').then(res=>{
  client = res
  console.log('banco conectado')
})

const app = express();
app.use(express.json())

eventRouter(app)

const port = 3000;
// schema e o formato que o dado tera na collection "tabela" do banco

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
