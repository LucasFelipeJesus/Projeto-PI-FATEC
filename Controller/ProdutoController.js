import { Produto, findProdutoByPk, createModelProduto, destroyProduct, getAllProduct } from "../Models/ProdutoModel.js"

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
        const id = parseInt(req.params.id)
        const produto = findProdutoByPk(id)
        if(!produto){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        res.status(200).json(produto)
    }

    static destroyProduto(req,res){
        const id = parseInt(req.params.id)
        const produto = findProdutoByPk(id)
        if(!produto){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        destroyProduct(id)
        res.json({message: "Removido com sucesso!"})
    }
}

export default ProdutoController
