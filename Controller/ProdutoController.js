import { Produto, getAllProduct } from "../Models/ProdutoModel.js"

class ProdutoController {
    static getProduct(req, res) {
        res.json(getAllProduct())
    }

    static createProduto(req, res){
        const {descricao, fichaTecnica, unidadeMedida, tipoProduto, valorEntrada, valorVenda} = req.body
        if(!descricao || !fichaTecnica || !unidadeMedida || !tipoProduto || !valorEntrada || !valorVenda){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
        
        const produto = new Produto(0, nome, cpf, telefone, cep, estado, cidade, bairro, endereco, complemento, email)
        const createdProduto = create(produto)
        res.status(201).json(createdProduto)
    }

}

export default ProdutoController
