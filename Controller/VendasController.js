import { getAllVendas } from "../models/VendasModel.js";

class VendasController {
  static getVenda(req, res) {
    res.json(getAllVendas());
  }
}

export default VendasController;
