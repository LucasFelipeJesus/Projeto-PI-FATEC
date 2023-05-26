import express from "express"
import DetComprasController from "../Controller/DetComprasController.js"

const DetComprasRouter = express.Router()

DetComprasRouter.get("/", DetComprasController.getDetCompras)
DetComprasRouter.post("/", DetComprasController.createDetCompra)
DetComprasRouter.get("/:id", DetComprasController.getdetCompraById)
DetComprasRouter.delete("/:id", DetComprasController.destroydetCompra)
DetComprasRouter.put("/:id", DetComprasController.updatedetCompra)

export default DetComprasRouter
