
// Importa a conexão com o banco de dados
const conexaoBanco = require("../config/database")


// Importa o model financeiro
const Financeiro = require("./financeiro")(conexaoBanco)

const Usuario = require("./usuario")(conexaoBanco)

// Usuario tem muitos financeiro
// um financeiro pertence a um unico usuario
// Um-para-Muitos

// Um usuario pode ter muitos registro financeiros (hasMany)
Usuario.hasMany(Financeiro, { foreignKey: "usuarioId" })

// Cada lançamento financeiro pertence a um unico usuario (belongTo)
Financeiro.belongsTo(Usuario, { foreignKey: "usuarioId" })

module.exports = {conexaoBanco, Usuario, Financeiro }