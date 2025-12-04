
const { Categoria } = require("../models")

// Para o métedo GET
exports.listar = async (req, res) => {

    const usuarioIdRecuperado = req.usuarioId

    try {
        const registros = await Categoria.findAll()
        res.json(registros)
    } catch (ex) {
        res.status(500).json({ erro: "Não foi possivel listar os registro" })
    }
}


// Para o métedo POST   
exports.criar = async (req, res) => {

    const usuarioIdRecuperado = req.usuarioId

    try {
        const dados = {
            ...req.body,
            usuarioId: usuarioIdRecuperado
        }
        const registro = await Categoria.create(dados)
        res.status(201).json(registro)
    } catch (listaDeErros) {
        if (listaDeErros.name === 'SequelizeValidationError') {
            return res.status(400).json({
                inconsistencias: listaDeErros.errors.map(e => e.message)
            })
        }
        res.status(500).json({ erro: "Erro ao criar o registro" + listaDeErros })
    }
}


