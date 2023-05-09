import express from 'express'
import ProdutoController from '../Controller/ProdutoController.js'

const ProdutoRouter = express.Router();

ProdutoRouter.get('/', ProdutoController.getProduct)

export default ProdutoRouter