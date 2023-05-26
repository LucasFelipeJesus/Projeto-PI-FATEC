import {
    Compras,
    create,
    createModelCompra,
    findCompraByPk,
    findComprasByPk,
    getAllCompras,
    updateCompra,
} from "../models/ComprasModel.js"

class ComprasController {
    static getCompra(req, res) {
        res.json(getAllCompras())
    }

    static createCompras(req, res) {
        const {
            nome,
            cnpj,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento,
        } = req.body
        if (
            !nome ||
            !cnpj ||
            !telefone ||
            !dataPedido ||
            !dataEntrega ||
            !totalPedido ||
            !formaPagamento
        ) {
            res.status(400).json({ error: "Todos campos são obrigatórios!!" })
            return
        }

        const compra = new Compras(
            0,
            nome,
            cnpj,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento
        )
        const createCompra = createModelCompra(compra)
        res.status(201).json(createCompra)
    }

    static getComprasById(req, res) {
        const id = parseInt(req.params.idPedido)
        const compra = findComprasByPk(idPedido)
        if (!compra) {
            res.status(404).json({ error: "Compra inexistente!!" })
            return
        }
        res.status(200).json(compra)
    }
    static destroyCompras(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const compra = findComprasByPk(idPedido)
        if (!compra) {
            res.status(404).json({ error: "Compra Inexistente!!" })
            return
        }
        this.destroyCompras(idPedido)
        res.json({ message: "Removido com sucesso!" })
    }
    static updateCompras(req, res) {
        const idPedido = parseInt(req.params.idPedido)
        const compra = findComprasByPk(idPedido)
        if (!compra) {
            res.status(404).json({ error: "Compra inexistente!!" })
            return
        }

        const {
            nome,
            cnpj,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento,
        } = req.body
        if (
            !nome ||
            !cnpj ||
            !telefone ||
            !dataPedido ||
            !dataEntrega ||
            !totalPedido ||
            !formaPagamento
        ) {
            res.status(400).json({
                error: " Todos os campos são obrigatórios!",
            })
            return
        }
        compra.nome = nome
        compra.cnpj = cnpj
        compra.telefone = telefone
        compra.dataPedido = Date(dataPedido)
        compra.dataEntrega = Date(dataEntrega)
        compra.totalPedido = Number(totalPedido)
        compra.formaPagamento = formaPagamento

        updateCompras(idPedido, compra)
        res.json(compra)
    }
}
export default ComprasController
