import express from "express"
import ComprasController from "../Controller/ComprasController.js"

const ComprasRouter = express.Router()

ComprasRouter.get("/", ComprasController.getCompra)
ComprasRouter.post("/", ComprasController.createCompras)
ComprasRouter.get("/:id", ComprasController.getComprasById)
ComprasRouter.delete("/:id", ComprasController.destroyCompras)
ComprasRouter.put("/:id", ComprasController.updateCompras)

export default ComprasRouter
