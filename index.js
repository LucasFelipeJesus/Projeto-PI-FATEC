import express from 'express'
import ClienteRouter from './Routes/ClienteRoute.js'
import ProdutoRouter from './Routes/ProdutoRoute.js'

const app = express()
app.use(express.json())

app.use('/clientes', ClienteRouter)
app.use('/produtos', ProdutoRouter)

app.listen(3000, () => console.log('API Rodando na porta 3000'))