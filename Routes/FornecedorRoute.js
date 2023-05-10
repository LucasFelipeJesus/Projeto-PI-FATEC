import express from 'express'
import FornecedorController from '../Controller/FornecedorController.js'

const FornecedorRouter = express.Router();

FornecedorRouter.get('/', FornecedorController.getFornecedor)

export default FornecedorRouter