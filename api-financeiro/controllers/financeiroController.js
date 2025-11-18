
// metedo para ser chamado pelo GET
const { Financeiro } = require("../models")


// Metodo para ser chamado pelo GET
exports.listar = async (req, res) =>{
    res.status(200).json({teste: "Testado com sucesso"})
}

// métedo para ser chamado pelo POST
exports.criar = async (req, res) =>{
    try {
        const registro = await  Financeiro.create(req.body)
        res.status(201).json(registro)
    } catch (error) {
        res.status(500).json({erro: "Erro ao criar o registro"})
    }
}