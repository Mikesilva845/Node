const { Usuario } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registrar = async (req, res) => {
    const usuario = await Usuario.create(req.body)
    res.status(201).json(usuario)
}

exports.login = async (req, res) => {
    // Desestruturação de objeto
    const { email, senha } = req.body
    const usuario = await Usuario.findOne({ where: { email } })

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
        return res.status(401).json({ erro: "Credenciais inválidas" })
    }

    // Caso os dados estejam corretos
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '180m' })
    res.json({ token })

}