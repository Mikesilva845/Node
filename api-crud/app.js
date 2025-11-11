const express = require("express") // Importar a biblioteca Express
const app = express()              // Criar uma instância do Express
const PORT = 3000                  // Definir a porta que será usada nas requisições HTTP
const cors = require('cors')

// Permitir requisições
// app.use(cors()) Permissão para todos as origens
app.use(cors({origin: 'http://127.0.0.1:5500'}))

// Configurar o Express para aceitar JSON no corpo das requisições
app.use(express.json())

// Armazenamento em memória (simula um banco de dados)
// Array de objetos representando produtos
let produtos = [
    { id: 1, nome: "iphone 12", preco: 1800 },
    { id: 2, nome: "Notebook Positivo", preco: 1000 },
    { id: 3, nome: "Mouse Gamer", preco: 250 }
]
let nextId = 4 // ID para o próximo produto

// Método GET (listar todos os produtos)
app.get("/produtos", (req, res) => {
    return res.status(200).send(produtos)
})

// Método POST (adicionar novo produto)
app.post("/produtos", (req, res) => {
    const { nome, preco } = req.body

    // Validar nome e preço
    if (!nome || !preco) {
        return res.status(400).send(
            { message: "nome e preço são obrigatórios" }
        )
    }

    // Criar novo objeto com os dados do produto
    const novoProduto = {
        id: nextId++,
        nome,
        preco
    }

    // Adicionar o novo produto à lista
    produtos.push(novoProduto)
    return res.status(201).send(novoProduto)
})

// Iniciar o servidor
// Comece a digitar para iniciar a aplicação
app.listen(PORT, () => {
    console.log(`API CRUD rodando em http://localhost:${PORT}`)
})

app.put("/produtos/:id", (req, res) => {

    //Recuperar o id que veio na url da rota
    const id = parseInt(req.params.id)

    // Desestruturação de objetos
    const { nome, preco } = req.body

    // Localizar o indice do produto a ser alterado
    const indice = produtos.findIndex(produtoAtual => produtoAtual.id === id)

    if (indice === -1) {
        return res.status(404).send(
            { message: "Produto nao encontrado" }
        )
    }

    // Validar nome e preço
    if (!nome || !preco) {
        return res.status(400).send(
            { message: "nome e preço são obrigatórios" }
        )
    }

    // Criar novo objeto com os dados do produto
    produtos[indice] = {
        id: id,
        nome: nome,
        preco: preco
    }


    return res.status(200).send(produtos[indice])
})


// Métedo DELETE (para remover ou apagar um tem)
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const tamanhoInicial = produtos.length      // obter o tamanho do array

    // Filtrar o array, mantendo os produtos diferentes do ID recebido
    produtos = produtos.filter(produtoAtual => produtoAtual.id !== id)

    if (produtos.length === tamanhoInicial){
        return res.status(204).send(
            {message: "Produto nao encontrado"}
        )
    }
})

app.listen(PORT, () => {
    console.log(`API CRUD rodando em http://localhost:${PORT}`)
})