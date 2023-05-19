import { Fornecedor, findAllFornecedor, create, findByPk, destroy, update } from "c:/Users/User/Desktop/PIC 2/Projeto-PI-FATEC/Controller/FornecedorController.js"

class FornecedorController {
    static getFornecedor(req,res){
        res.json(findAllFornecedor())
    }

    static createFornecedor(req,res){
        const {nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email} = req.body
        if(!nome || !cnpj || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !complemento || !email){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const Fornecedor = new Fornecedor (nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email)
        create(Fornecedor)
        res.json(Fornecedor)
    }

static getFornecedorById(req, res) {
    const id = parseInt(req.params.id)
    const Fornecedor = findByPk(id)
    if(!Fornecedor) {
        res.status(404).json({ error: 'Fornecedor não encontrado'})
        return
    }
    res.json(Fornecedor)
}

static destroyFornecedor(res, res) {
    const id = parseInt(req.params.id)
    const Fornecedor = findByPk(id)
    if(!Fornecedor) {
        res.status(404).json ({message: 'Fornecedor não encontrado'})
    }
    destroy(id)
    res.json({ message: 'Fornecedor removido com sucesso'})
 }

 static updateFornecedor(req, res) {
    const id = parseInt(req.params.id)
    const Fornecedor = findByPk(id)
    if(!Fornecedor){
        res.status(404).json ({ error: 'Fornecedor não encontrado'})
    }
 

 const { nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email } = req.body
 if(!nome || !cnpj || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !complemento || !email) {
    res.status(400).json({error: 'Todos os campos são obrigatórios!'})
    return
 }

    Fornecedor.nome = nome
    Fornecedor.cnpj = cnpj
    Fornecedor.telefone = telefone
    Fornecedor.cep = cep
    Fornecedor.estado = estado
    Fornecedor.cidade = cidade
    Fornecedor.bairro = bairro
    Fornecedor.endereco = endereco
    Fornecedor.complemento = complemento
    Fornecedor.email = email

    update(id,Fornecedor)
    res.json(Fornecedor)
}
}

    export default FornecedorController