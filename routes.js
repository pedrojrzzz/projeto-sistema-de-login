const express = require('express')
const route = express.Router()

const cors = require('cors')
const corsConfig = {
    origin : 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
}
const corsOptions = {
    origin: '*',
    methods: 'POST',
    optionsSuccessStatus: 204,
};


const homeController = require('./src/controllers/homeController')
const registroController = require('./src/controllers/cadastroController')

//Rotas index
route.get('/', homeController.rendPaginaInicial)


// Rotas de cadastro
route.post('/registerNewUS3r', registroController.cadastroUsuario)












module.exports = route