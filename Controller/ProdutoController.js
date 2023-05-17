import { Produto, findProdutoByPk, createModelProduto, getAllProduct } from "../Models/ProdutoModel.js"

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
        
        const produto = new Produto(0, descricao, fichaTecnica, unidadeMedida, tipoProduto, valorEntrada, valorVenda)
        const createdProduto = createModelProduto(produto)
        res.status(201).json(createdProduto)
    }

    static getProdutoById(req, res){
        const produto = searchById(req)
        if(!produto){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        res.status(200).json(produto)
    }
}

function searchById(req) {
    const id = parseInt(req.params.id)
    const produto = findProdutoByPk(id)
    return produto
}

export default ProdutoController
