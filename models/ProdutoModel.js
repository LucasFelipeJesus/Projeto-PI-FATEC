export class Produto {
    constructor(id, descricao, fichaTecnica, unidadeMedida, tipoProduto, valorEntrada, valorVenda){
        this.id = id
        this.descricao = descricao
        this.fichaTecnica = fichaTecnica
        this.unidadeMedida = unidadeMedida
        this.tipoProduto = tipoProduto
        this.valorEntrada = Number(valorEntrada)
        this.valorVenda = Number(valorVenda)
    }
}

let idAtual = 9

export const createModelProduto = (produto) => {
    idAtual++
    produto.id = idAtual
    dbProduto.push(produto)
    return produto
}

export const findProdutoByPk = (id) => {
    return dbProduto.find(produto => produto.id === id)
}

export const getAllProduct = () => {
    return dbProduto
}

export const destroyProduct = (id) => {
    const produto = findProdutoByPk(id)
    if(!produto){
        return false
    }
    const index = dbProduto.indexOf(produto)
    dbProduto.splice(index, 1)
    return true
}

export const updateProduct = (id, produtoUpdate) => {
    const produto = findProdutoByPk(id)
    if(!produto) {
        return false
    }
    const index = dbProduto.indexOf(produto)
    dbProduto[index] = produtoUpdate
    return true
}

export const dbProduto = [
    
    new Produto (1, "TemplateDescriçao", "TemplateFichaTecnica", "TemplateUnidadeMedida", "TemplateTipoProduto", 9.99, 99.99),
    new Produto (2, "Camisa P Branca 1", "Camisa tamanho P; Cor Branca; Gola redonda; Manga Curta", "Unidade", "Camisas", 15.60, 20.00),
    new Produto (3, "Camisa P Branca 2", "Camisa tamanho P; Cor Branca; Gola redonda; Manga Longa", "Unidade", "Camisas", 16.60, 22.00),
    new Produto (4, "Camisa P Branca 3", "Camisa tamanho P; Cor Branca; Gola V; Manga Curta", "Unidade", "Camisas", 15.60, 20.00),
    new Produto (5, "Camisa P Branca 4", "Camisa tamanho P; Cor Branca; Gola V; Manga Longa", "Unidade", "Camisas", 16.60, 22.00),
    new Produto (6, "Caneca Branca 1", "Caneca de Porcelana; Cor Branca; 240ml; Sem Alça ", "Unidade", "Canecas", 13.99, 17.00),
    new Produto (7, "Caneca Branca 2", "Caneca de Porcelana; Cor Branca; 240ml; Com Alça ", "Unidade", "Canecas", 13.99, 17.00),
    new Produto (8, "Caneca Rosa 1", "Caneca de Porcelana; Cor Rosa; 240ml; Sem Alça ", "Unidade", "Canecas", 13.99, 17.00),
    new Produto (9, "Caneca Rosa 2", "Caneca de Porcelana; Cor Rosa; 240ml; Com Alça ", "Unidade", "Canecas", 13.99, 17.00)
]