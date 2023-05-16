import { Cliente, createModelCliente, getAllClient } from "../Models/ClienteModel.js"

class ClienteController {
    static getClients(req,res){
        res.json(getAllClient())
    }

    //getById - função findById

    static createCliente(req, res){
        const {nome, cpf, telefone, cep, estado, cidade, bairro, endereco, complemento, email} = req.body
        if(!nome || !cpf || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !email){
            res.status(400).json({error: "Informe todos os campos obrigatórios!"})
            return
        }
        
        const cliente = new Cliente (0, nome, cpf, telefone, cep, estado, cidade, bairro, endereco, complemento, email)
        const createdCliente = createModelCliente(cliente)
        res.status(201).json(createdCliente)
    }

    //getById
}

export default ClienteController