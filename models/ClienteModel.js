export class Cliente {
    constructor(id, nome, cpf, telefone, cep, estado, cidade, bairro, endereco, complemento, email){
        this.id = id
        this.nome = nome
        this.cpf = cpf
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

let idAtual = 2

export const create = (cliente) => {
    idAtual++
    cliente.id = idAtual
    dbCliente.push(cliente)
    return cliente
}

export const getAllClient = () => {
    return dbCliente
}

export const dbCliente = [
    new Cliente(1,"TemplateNome", "TemplateCPF", "TemplateTelefone", "TemplateCEP", "TemplateEstado", "TemplateCidade", "TemplateBairro", "TemplateEndereco", "TemplateComplemento", "TemplateEmail"),
    new Cliente(2,"Teste Cliente", "10159951530", "38833885", "12345543", "São Paulo", "São Paulo", "Sapopemba", "Aricanduva, 499", "", "email@gmail.com")
]