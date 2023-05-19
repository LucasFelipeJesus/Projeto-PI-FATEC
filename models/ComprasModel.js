export class Compras {
    constructor(
        idpedido,
        idfornecedor,
        nome,
        cnpj,
        telefone,
        dataPedido,
        dataEntrega,
        totalPedido,
        formaPagamento
    ) {
        this.idpedido = idpedido
        this.idfornecedor = idfornecedor
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone
        this.dataPedido = dataPedido
        this.dataEntrega = dataEntrega
        this.totalPedido = totalPedido
        this.formaPagamento = formaPagamento
    }
}

export const getAllCompras = () => {
    return dbCompras
}
export const findByPk = (idpedido) => {
    return dbCompras.find((Compras) => Compras.idpedido === idpedido)
}

export const create = (compras) => {
    Compras.idpedido = dbCompras.length + 1
    dbCompras.push(compras)
}
export const update = (idpedido, compras) => {
    const contatoToUpdate = findByPk(id)
    if (!contatoToUpdate) {
        return false
    }

    const index = dbContato.indexOf(contatoToUpdate)
    dbContato[index] = contato
    return true
}
export const findAll = () => {
    return dbCompras
}
export const dbCompras = [
    new Compras(
        1,
        1,
        "NomeFornecedor1",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/04/2023",
        "30/04/2023",
        "X.XXX Reais",
        "Credito"
    ),
    new Compras(
        2,
        1,
        "NomeFornecedor2",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/05/2023",
        "30/05/2023",
        "X.XXX Reais",
        "Dinheiro"
    ),
    new Compras(
        3,
        1,
        "NomeFornecedor1",
        "XX.XXX.XXX/0001-XX",
        "(XX) XXXX-XXXX",
        "01/06/2023",
        "30/06/2023",
        "X.XXX Reais",
        "Debito"
    ),
]
