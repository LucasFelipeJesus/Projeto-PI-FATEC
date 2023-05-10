import { getAllDetCompras } from "../models/DetComprasModel.js"

class DetComprasController {
    static getDetCompra(req, res) {
        res.json(getAllDetCompras())
    }
}

export default DetComprasController
