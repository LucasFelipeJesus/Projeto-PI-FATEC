import Fornecedor from "..Controller/FornecedorController.js"

class FornecedorController {
    static async list (req,res){
        const fornecedores = await Fornecedor.findAll()
        res.json(fornecedores)
    }

    static async getFornecedorById (req,res){
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
            res.status(400).json({error: "Informe todos os campos!"})
            
        if (!fornecedor){
            res.status(404).json({error:"Não encontrado"})
        }
        res.json(fornecedor)
        }

        static async destroyFornecedor(req,res){
            const id = parseInt(req.params.id)
            const fornecedor = await Fornecedor.findByPk(id)
            if(!fornecedor){
                res.status(404).json({error:"Não encontrado"})
                return
            }
            await Fornecedor.destroy({where: {id: fornecedor.id}})
            res.json({message: "Removido com sucesso!"})
        }    

        static async createFornecedor(req,res){
            const {nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email} = req.body // req.body.nome, req.body.email ...
            if(!nome || !cnpj || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !complemento || !email){
                res.status(400).json({error: "Informe todos os campos!"})
                return
            }
    
            const createFornecedor = await Contato.create({nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email}) //req.body
            res.status(201).json(createFornecedor)
        }


        static async updateFornecedor(req,res){
            const id = parseInt(req.params.id)
            const contato = await Contato.findByPk(id)
            if(!fornecedor){
                res.status(404).json({error:"Não encontrado"})
                return
            }
            
            const {nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email} = req.body // req.body.nome, req.body.email ...
            if(!nome || !cnpj || !telefone || !cep || !estado || !cidade || !bairro || !endereco || !complemento || !email){
                res.status(400).json({error: "Informe todos os campos!"})
                return
            }
    
            const updatedFornecedor = await Fornecedor.update({nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email},{where: {id: contato.id}})
            res.json(updatedFornecedor)
        }
    }

    export default FornecedorController