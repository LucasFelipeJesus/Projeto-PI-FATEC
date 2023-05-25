export class Fornecedor {
    constructor(id, nome, cnpj, telefone, cep, estado, cidade, bairro, endereco, complemento, email){
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone
        this.cep = cep
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.endereco = endereco
        this.complemento = complemento
        this.email = email
    }
}

export const update = (id, contato) => {
    const fornecedorToUpdate = findByPk(id)
    if(!fornecedorToUpdade) {
        return false
    }

    const index = dbFornecedor.indexOf(fornecedorToUpdate)
    dbFornecedor[index] = Fornecedor
    return true
}

export const destroy = (id) => {
    const Fornecedor = findByPk(id)
    if(!Fornecedor) {
        return false
    }
    const index = dbContato.indexOf(contato)
    dbContato.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbFornecedor.find(Fornecedor => Fornecedor.id === id)
}

export const create = (Fornecedor) => {
    Fornecedor.id = dbFornecedor.length + 1
    dbFornecedor.push(Fornecedor)
}

export const findAll = () => {
    return dbFornecedor
}

export const dbFornecedor = [
    new Fornecedor('Empresa1', '1290392838392', '9999999999', '988888888', 'SP', 'Indaiatuba', 'Jardim', 'Av da Empresa', '33', 'empresa1@email.com'),
]

