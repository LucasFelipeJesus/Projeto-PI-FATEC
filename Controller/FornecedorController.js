import { Fornecedor, create, findAllFornecedor } from "../Models/FornecedorModel.js"

class FornecedorController {
    static listFornecedor(req,res){
        res.json(findAllFornecedor())
    }



    static find (req, res){
        res.json(req.param)
    }

    static createFornecedor(req,res){
        const {nome, email, telefone} = req.body
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const fornecedor = new Fornecedor(0,nome,email,telefone)
        create(Fornecedor)
        res.json(Fornecedor)
    }
}
export default FornecedorController