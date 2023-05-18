export class DetVendas {
  constructor(
    idpedido,
    idProduto,
    descricaoProduto,
    quantidade,
    unidadeMedida,
    valorUnitario,
    valorTotal
  ) {
    this.idpedido = idpedido;
    this.idProduto = idProduto;
    this.descricaoProduto = descricaoProduto;
    this.quantidade = quantidade;
    this.unidadeMedida = unidadeMedida;
    this.valorUnitario = valorUnitario;
    this.valorTotal = valorTotal;
  }
}

export const getAllDetVendas = () => {
  return dbDetVendas;
};

export const dbDetVendas = [
  new DetVendas(1, 1, "Descrição Produto 1", 5, "unidade", 20, 100),
  new DetVendas(1, 2, "Descrição Produto 2", 20, "unidade", 10, 200),
  new DetVendas(1, 3, "Descrição Produto 3", 30, "unidade", 10, 300),
];
