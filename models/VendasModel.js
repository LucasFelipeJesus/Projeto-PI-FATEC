export class Vendas {
  constructor(
    idpedido,
    idcliente,
    nome,
    cpf,
    telefone,
    dataPedido,
    dataEntrega,
    totalPedido,
    formaPagamento
  ) {
    this.idpedido = idpedido;
    this.idcliente = idcliente;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.dataPedido = dataPedido;
    this.dataEntrega = dataEntrega;
    this.totalPedido = totalPedido;
    this.formaPagamento = formaPagamento;
  }
}

export const getAllVendas = () => {
  return dbVendas;
};

export const dbVendas = [
  new Vendas(
    1,
    1,
    "NomeCliente1",
    "XXX.XXX.XXX-XX",
    "(XX) XXXX-XXXX",
    "01/04/2023",
    "30/04/2023",
    "X.XXX Reais",
    "Credito"
  ),
  new Vendas(
    2,
    1,
    "NomeCliente2",
    "XXX.XXX.XXX-XX",
    "(XX) XXXX-XXXX",
    "01/05/2023",
    "30/05/2023",
    "X.XXX Reais",
    "Dinheiro"
  ),
  new Vendas(
    3,
    1,
    "NomeCliente3",
    "XXX.XXX.XXX-XX",
    "(XX) XXXX-XXXX",
    "01/06/2023",
    "30/06/2023",
    "X.XXX Reais",
    "Debito"
  ),
];
