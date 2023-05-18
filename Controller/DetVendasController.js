import { getAllDetVendas } from "../models/DetVendasModel.js";

class DetVendasController {
  static getDetVendas(req, res) {
    res.json(getAllDetVendas());
  }
}

export default DetVendasController;
