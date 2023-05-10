import express from "express"
import ComprasController from "../Controller/ComprasController.js"

const ComprasRouter = express.Router()

ComprasRouter.get("/", ComprasController.getCompra)

export default ComprasRouter
