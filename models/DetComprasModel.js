import { dbCompras } from "./ComprasModel"

export class DetCompras {
    constructor(
        idpedido,
        idProduto,
        descricaoProduto,
        quantidade,
        unidadeMedida,
        valorUnitario,
        valorTotal
    ) {
        this.idpedido = idpedido
        this.idProduto = idProduto
        this.descricaoProduto = descricaoProduto
        this.quantidade = quantidade
        this.unidadeMedida = unidadeMedida
        this.valorUnitario = valorUnitario
        this.valorTotal = valorTotal
    }
}

export const getAllDetCompras = () => {
    return dbDetCompras
}

export const createModelDetCompras = (detCompra) => {
    dbCompras.push(detCompra)
    return compra
}

export const findDetComprasByPk = (idpedido) => {
    return dbCompras.find((detCompra) => detCompra.idpedido === idpedido)
}

export const destroyDetCompras = (idpedido) => {
    const detCompra = findDetComprasByPk(idpedido)
    if (!detCompra) {
        return false
    }
    const index = dbCompras.indexOf(detCompra)
    dbCompras.splice(index, 1)
    return true
}

export const updateDetCompras = (idpedido, detCompraUpdate) => {
    const detCompra = findDetComprasByPk(idpedido)
    if (!detCompra) {
        return false
    }
    const index = dbCompras.indexOf(detCompra)
    dbCompras[index] = detCompraUpdate
    return true
}

export const dbDetCompras = [
    new DetCompras(1, 1, "Descrição Produto 1", 5, "unidade", 20, 100),
    new DetCompras(1, 2, "Descrição Produto 2", 20, "unidade", 10, 200),
    new DetCompras(1, 3, "Descrição Produto 3", 30, "unidade", 10, 300),
]
