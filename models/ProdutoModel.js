export class Produto {
    constructor(id, descricao, fichaTecnica, unidadeMedida, tipoProduto){
        this.id = id
        this.descricao = descricao
        this.fichaTecnica = fichaTecnica
        this.unidadeMedida = unidadeMedida
        this. tipoProduto = tipoProduto
    }
}

export const getAllProduct = () => {
    return dbProduto
}

export const dbProduto = [
    
    new Produto (1, "TemplateDescriçao", "TemplateFichaTecnica", "TemplateUnidadeMedida", "TemplateTipoProduto"),
    new Produto (2, "Camisa P Branca 1", "Camisa tamanho P; Cor Branca; Gola redonda; Manga Curta", "Unidade", "Camisas"),
    new Produto (3, "Camisa P Branca 2", "Camisa tamanho P; Cor Branca; Gola redonda; Manga Longa", "Unidade", "Camisas"),
    new Produto (4, "Camisa P Branca 3", "Camisa tamanho P; Cor Branca; Gola V; Manga Curta", "Unidade", "Camisas"),
    new Produto (5, "Camisa P Branca 4", "Camisa tamanho P; Cor Branca; Gola V; Manga Longa", "Unidade", "Camisas"),
    new Produto (6, "Caneca Branca 1", "Caneca de Porcelana; Cor Branca; 240ml; Sem Alça ", "Unidade", "Canecas"),
    new Produto (7, "Caneca Branca 2", "Caneca de Porcelana; Cor Branca; 240ml; Com Alça ", "Unidade", "Canecas"),
    new Produto (8, "Caneca Rosa 1", "Caneca de Porcelana; Cor Rosa; 240ml; Sem Alça ", "Unidade", "Canecas"),
    new Produto (9, "Caneca Rosa 2", "Caneca de Porcelana; Cor Rosa; 240ml; Com Alça ", "Unidade", "Canecas")
]