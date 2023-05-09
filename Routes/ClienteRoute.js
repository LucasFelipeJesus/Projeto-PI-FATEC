import express from 'express'
import ClienteController from '../Controller/ClienteController.js'

const ClienteRouter = express.Router();

ClienteRouter.get('/', ClienteController.getClients)

export default ClienteRouter