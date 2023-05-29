import Cliente from "./ClienteModel.js"
import Fornecedor from "./FornecedorModel.js"
import Venda from "./VendasModel.js"
import DetVenda from "./DetVendasModel.js"
import Compra from "./ComprasModel.js"
import DetCompra from "./DetComprasModel.js"
import Produto from "./ProdutoModel.js"

Venda.belongsTo(Cliente, { through: Venda, as: "cliente" })
Venda.belongsToMany(Produto, { through: DetVenda, as: "produtos" })
Produto.belongsToMany(Venda, { through: DetVenda, as: "vendas" })
Compra.belongsTo(Fornecedor, { through: Venda, as: "fornecedor" })
Compra.belongsToMany(Produto, { through: DetCompra, as: "produtos" })
Produto.belongsToMany(Compra, { through: DetCompra, as: "compras" })

export { Cliente, Fornecedor, Venda, DetVenda, Compra, DetCompra, Produto }
