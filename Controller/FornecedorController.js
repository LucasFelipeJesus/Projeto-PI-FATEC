import { getAllFornecedor } from "../Models/FornecedorModel.js"

class FornecedorController {
    static getFornecedor(req,res){
        res.json(getAllFornecedor())
    }

}

export default FornecedorController