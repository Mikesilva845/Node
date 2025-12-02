
// Importa a conexão com o banco de dados
const conexaoBanco = require("../config/database")

// Importa o model financeiro
const Financeiro = require("./financeiro")(conexaoBanco)
const Usuario = require("./usuario")(conexaoBanco)
const Categoria = require("./categoria")(conexaoBanco)

// Usuario tem muitos financeiros
// um financeiro pertence a um único usuario
// Um-para-Muitos

// Um usuário pode ter muitos registros financeiros (hasMany)
Usuario.hasMany(Financeiro, { foreignKey: "usuarioId" })

// Cada lançamento financeiro pertence a um único usuário (belongTo)
Financeiro.belongsTo(Usuario, { foreignKey: "usuarioId" })

// Uma categoria pode ter muitos lançanemnto financeiros
Categoria.hasMany(Financeiro, { foreignKey: "categoriaId" } )

// Um lançamneto financeiro esta relacionado a uma unica categoria
Financeiro.belongsTo( Categoria , { foreignKey: "categoriaId" } )


module.exports = {conexaoBanco, Usuario, Financeiro, Categoria }








