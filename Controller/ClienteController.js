import { Cliente, findClienteByPk, createModelCliente, destroyClient, updateClient, getAllClient } from "../Models/ClienteModel.js"

class ClienteController {
    static getClients(req,res){
        res.json(getAllClient())
    }

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

    static getClienteById(req, res){
        const id = parseInt(req.params.id)
        const cliente = findClienteByPk(id)
        if(!cliente){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        res.status(200).json(cliente)
    }

    static destroyCliente(req,res){
        const id = parseInt(req.params.id)
        const cliente = findClienteByPk(id)
        if(!cliente){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        destroyClient(id)
        res.json({message: "Removido com sucesso!"})
    }

    static updateCliente(req, res){
        const id = parseInt(req.params.id)
        const cliente = findClienteByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome, cpf, telefone, cep, estado, cidade, bairro, endereco, complemento, email} = req.body 
        if(!nome || !cpf || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !email){
            res.status(400).json({error: "Informe todos os campos obrigatórios!"})
            return
        }

        cliente.nome = nome
        cliente.cpf = cpf
        cliente.telefone = telefone
        cliente.cep = cep
        cliente.estado = estado
        cliente.cidade = cidade
        cliente.bairro = bairro
        cliente.endereco = endereco
        cliente.complemento = complemento
        cliente.email = email

        if(!cliente.complemento) cliente.complemento = ""

        updateClient(id,cliente)
        res.json(cliente)
    }

}

export default ClienteController