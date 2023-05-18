import { Produto, findProdutoByPk, createModelProduto, destroyProduct, updateProduct, getAllProduct } from "../Models/ProdutoModel.js"

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

    static updateProduto(req, res){
        const id = parseInt(req.params.id)
        const produto = findProdutoByPk(id)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {descricao, fichaTecnica, unidadeMedida, tipoProduto, valorEntrada, valorVenda} = req.body 
        if(!descricao || !fichaTecnica || !unidadeMedida || !tipoProduto || !valorEntrada || !valorVenda){
            res.status(400).json({error: "Informe todos os campos obrigatórios!"})
            return
        }

        produto.descricao = descricao
        produto.fichaTecnica = fichaTecnica
        produto.unidadeMedida = unidadeMedida
        produto.tipoProduto = tipoProduto
        produto.valorEntrada = Number(valorEntrada)
        produto.valorVenda = Number(valorVenda)

        updateProduct(id,produto)
        res.json(produto)
    }
}

export default ProdutoController
