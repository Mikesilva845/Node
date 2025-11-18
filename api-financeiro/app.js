require('dotenv').config()
const express = require('express')
const financeiroRoutes = require("./routes/financeiroRoutes")
const PORT = 3000
const { conexaoBanco } = require("./models")


const app = express()
app.use(express.json())

// chama o roteador apropriado a rota
app.use("/financeiro", financeiroRoutes)

conexaoBanco.sync().then(() =>{
    app.listen(PORT,() =>{
        console.log(`Rodando em http://localhost:${PORT}`)
    })
})
