import express from "express"
import DetComprasController from "../Controller/DetComprasController.js"

const DetComprasRouter = express.Router()

DetComprasRouter.get("/", DetComprasController.getDetCompra)
DetComprasRouter.post("/", DetComprasController.createDetCompras)
DetComprasRouter.get("/:id", DetComprasController.getDetComprasByid)
DetComprasRouter.delete("/:id", DetComprasController.destroyDetCompras)
DetComprasRouter.put("/:id", DetComprasController.updateDetCompras)

export default DetComprasRouter
