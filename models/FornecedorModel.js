import { Sequelize } from "sequelize"
import db from "../db.js"

const Fornecedor = db.define('fornecedor',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.INTERGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.INTERGER,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.INTERGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

export default Fornecedor
