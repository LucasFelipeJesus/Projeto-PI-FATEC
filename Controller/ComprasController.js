import { getAllCompras } from "../models/ComprasModel.js"

class ComprasController {
    static getCompra(req, res) {
        res.json(getAllCompras())
    }
}

export default ComprasController
