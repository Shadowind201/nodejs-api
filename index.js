const express = require('express')
const app = express()

const herois = ["homem aranha", "hulk", "ms. marvel"]

// ENDPOINT listagem de todos os herios(READ ALL => [GET])
app.get("/heroes", function(rep, res){
    res.send("Lista de todos os herois")
})

app.get("/heroes/:id", function(req, res){
    //acessar o parametro de rota ID
    const id = req.params.id

    //pego o item no array
    const umheroi = herois[id]

    // eu envio o item encontrado como resposta
    res.send(umheroi)
})

app.listen(3000)