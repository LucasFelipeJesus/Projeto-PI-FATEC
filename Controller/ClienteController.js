import { getAllClient } from "../Models/ClienteModel.js"

class ClienteController {
    static getClients(req,res){
        res.json(getAllClient())
    }

}

export default ClienteController