
// Importa a conexão com o banco de dados
const conexaoBanco = require("../config/database")

// Importa o model financeiro
const Financeiro = require("./financeiro")(conexaoBanco)

module.exports = {conexaoBanco, Financeiro }
