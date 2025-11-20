// Modelo ou Entidade
// ORM - Object-Relational Mapping (Mapeamento de Objeto relacional)

const { types } = require("pg");
const { DataTypes } = require("sequelize")

module.exports = (conexaoBanco) => {

    const Financeiro = conexaoBanco.define('Financeiro', {

        data: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "A data é obrigatoria" },
                isDate: { msg: "A data deve estar no formato yyyy-mm-dd" },
            },
        },

        descricao: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "A descrição é obrigatorio" },
                notEmpty: { msg: "A descrição nao pode estar vazia" },
            },
        },


        formaPagamento:
        {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "A forma de pagamento é obrigatorio " },
                isIn: {
                    args: [["pix", "dinheiro", "crédito", "débito", "boleto"]],
                    msg: "Forma de pagamento invalida"
                },
            },
        },



        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: { msg: "O valor é obrigatorio " },
                isFloat: { msg: "O valor deve ser numérico" },
                min: { args: [0.01], msg: "O valor deve ser maior que zero" }
            },
        },

        tipo: {
            type: DataTypes.ENUM('entrada', 'saida'),
            allowNull: false,
            validate:{
                notNull: { msg: "O tipo é obrigatorio " },
                isIn: {
                    args: [["entrada", "saida"]],
                    msg: "Tipo deve ser 'entrada' ou 'saida'",
                },
            },
         },

    }, {
    tableName: "financeiro",    // Força o nome da tabela
        freezeTableName: true,      // Impede a pluralização 
    })
return Financeiro;
}