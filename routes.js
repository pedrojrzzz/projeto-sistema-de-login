const express = require('express')
const route = express.Router()



const homeController = require('./src/controllers/homeController')
const registroController = require('./src/controllers/cadastroController')

//Rotas index
route.get('/', homeController.rendPaginaInicial)


// Rotas de cadastro
route.post('/registerNewUS3r', registroController.cadastroUsuario)

route.get('/a', (req,res) => {
    res.send('Hello')
})


// Rotas de administrador
route.get('/administrativePanel', (req, res)=> {
    res.render('administrativePanel')
})












module.exports = route