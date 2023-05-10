import express from "express"
import DetComprasController from "../Controller/DetComprasController.js"

const DetComprasRouter = express.Router()

DetComprasRouter.get("/", DetComprasController.getDetCompra)

export default DetComprasRouter
