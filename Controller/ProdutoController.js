import { getAllProduct } from "../Models/ProdutoModel.js"

class ProdutoController {
    static getProduct(req, res) {
        res.json(getAllProduct())
    }
}

export default ProdutoController
