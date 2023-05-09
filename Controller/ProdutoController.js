import { getAllProduct } from "../Models/ClienteModel.js"

class ProdutoController {
    static getProduct(req,res){
        res.json(getAllProduct())
    }

}

export default ProdutoController