const express = require('express')
const app = express()

const herois = ["homem aranha", "hulk", "ms. marvel"]

// ENDPOINT listagem de todos os herios(READ ALL => [GET])
app.get("/heroes", function(rep, res){
    res.send("Lista de todos os herois")
})


//ENDPOINT listagem de UM  heroi (READ SINGLE)
app.get("/heroes/:id", function(req, res){
    //acessar o parametro de rota ID
    const id = req.params.id

    //pego o item no array
    const umheroi = herois[id]

    // eu envio o item encontrado como resposta
    res.send(umheroi)
})

//todo o corpo da requisiçõa virá como JSON
app.use(express.json())

//ENDPOINT  de criação (CREATE => [POST])
app.post("/heroes", function(req, res){
    res.send(req.body)
})

app.listen(3000)