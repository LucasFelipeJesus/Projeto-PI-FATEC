import express from "express"
import db from './db.js'

import ClienteRouter from "./Routes/ClienteRoute.js"
import ProdutoRouter from "./Routes/ProdutoRoute.js"
import ComprasRouter from "./Routes/ComprasRoute.js"
import DetComprasRouter from "./Routes/DetComprasRoute.js"
import VendasRouter from "./Routes/VendasRoute.js"
import DetVendasRouter from "./Routes/DetVendasRoute.js"

const app = express()
app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

app.use("/clientes", ClienteRouter)
app.use("/produtos", ProdutoRouter)
app.use("/Compras", ComprasRouter)
app.use("/DetalhesCompras", DetComprasRouter)
app.use("/Vendas", VendasRouter)
app.use("/DetalhesVendas", DetVendasRouter)

const port = process.env.PORT || 3000

app.listen(3000, () => console.log("API Rodando na porta 3000"))
