import { Compras, create, getAllCompras } from "../models/ComprasModel.js"

class ComprasController {
    static getCompra(req, res) {
        res.json(getAllCompras())
    }

    static createCompras(req, res) {
        const { nome, cnpj } = req.body
        if (!nome || !cnpj) {
            res.status(400).json({ error: "Nome e cnpj são obrigatórios" })
            return
        }

        const compra = new Compras(
            idfornecedor,
            nome,
            cnpj,
            telefone,
            dataPedido,
            dataEntrega,
            totalPedido,
            formaPagamento
        )
        create(compra)
        res.json(compra)
    }
}

export default ComprasController
