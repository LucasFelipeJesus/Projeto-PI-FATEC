import { DetCompras, getAllDetCompras } from "../models/DetComprasModel.js"

class DetComprasController {
    static getDetCompra(req, res) {
        res.json(getAllDetCompras())
    }
    static createDetCompras(req, res) {
        const {
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal,
        } = req.body
        if (
            !idProduto ||
            descricaoProduto ||
            quantidade ||
            unidadeMedida ||
            valorUnitario ||
            valorTotal
        ) {
            res.status(400).json({ error: "Todos campos são obrigatórios!!" })
            return
        }

        const detCompra = new DetCompras(
            0,
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal
        )
        const createDetCompra = createDetCompras(detCompra)
        res.status(201).json(createDetCompra)
    }

    static getDetComprasByid(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const detCompra = findDetComprasByPk(idPedido)
        if (!detCompra) {
            res.status(404).json({ error: "Sem itens a Listar!!" })
            return
        }
        res.status(200).json(detCompra)
    }
    static destroyDetCompras(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const detCompra = findDetComprasByPk(idPedido)
        if (!detCompra) {
            res.status(404).json({ error: "Sem itens a Listar!!" })
            return
        }
        destroyDetCompras(idPedido)
        res.json({ message: "Removido itens com sucesso!" })
    }
    static updateDetCompras(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const detCompra = findProdutoByPk(idPedido)
        if (!detCompra) {
            res.status(404).json({ error: "Sem itens a Atualizar!!" })
            return
        }

        const {
            idProduto,
            descricaoProduto,
            quantidade,
            unidadeMedida,
            valorUnitario,
            valorTotal,
        } = req.body
        if (
            !idProduto ||
            descricaoProduto ||
            quantidade ||
            unidadeMedida ||
            valorUnitario ||
            valorTotal
        ) {
            res.status(400).json({
                error: " Todos os campos são obrigatórios!",
            })
            return
        }
        detCompra.idProduto = Number(idProduto)
        detCompra.descricaoProduto = descricaoProduto
        detCompra.quantidade = Number(quantidade)
        detCompra.unidadeMedida = unidadeMedida
        detCompra.valorUnitario = Number(valorUnitario)
        detCompra.valorTotal = Number(valorTotal)

        updateDetCompras(idPedido, detCompra)
        res.json(detCompra)
    }
}
export default DetComprasController
