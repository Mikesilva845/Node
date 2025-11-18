// Modelo ou Entidade
// ORM - Object-Relational Mapping (Mapeamento de Objeto relacional)

const { DataTypes } = require("sequelize")

module.exports = (conexaoBanco) => {

    const Financeiro = conexaoBanco.define('Financeiro', { 
        data: DataTypes.DATE,
        descricao: DataTypes.STRING,
        formaPagamento: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        tipo: DataTypes.ENUM('entrada','saida'),
    },{
        tableName: "financeiro",    // Força o nome da tabela
        freezeTableName: true,      // Impede a pluralização 
    })    
    return Financeiro;
}