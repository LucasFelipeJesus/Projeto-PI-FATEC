import express from 'express'

const app = express();
app.use(express.json());

//app.use('/clientes', ClienteRoute);

app.listen(3000, () => console.log('API Rodando na porta 3000'))