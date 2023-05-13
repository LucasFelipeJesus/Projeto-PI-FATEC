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

export const create = (Fornecedor) => {
    contato.id = dbFornecedor.lenght + 1
    dbFornecedor.push(Fornecedor)
    return Fornecedor
}
)
export const findAllFornecedor = () => {
    return dbFornecedor
}

export const dbFornecedor = [
    new Fornecedor (1,"TemplateNome", "TemplateCPF", "TemplateTelefone", "TemplateCEP", "TemplateEstado", "TemplateCidade", "TemplateBairro", "TemplateEndereco", "TemplateComplemento", "TemplateEmail"),
    new Fornecedor (2,"Teste Cliente", "10159951530", "38833885", "12345543", "São Paulo", "São Paulo", "Sapopemba", "Aricanduva, 499", "", "email@gmail.com")
]