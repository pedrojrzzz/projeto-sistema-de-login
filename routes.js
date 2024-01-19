const express = require('express')
const route = express.Router()



const homeController = require('./src/controllers/homeController')
const registroController = require('./src/controllers/cadastroController')
const loginController = require('./src/controllers/loginController')
const recuperarSenhaController = require('./src/controllers/recuperarSenhaController')

//Rotas index
route.get('/', homeController.rendPaginaInicial)


// Rotas de cadastro
route.get('/register', registroController.renderizarCadastro)
route.post('/registerNewUS3r', registroController.cadastroUsuario)
//Rota caso sucesso ou erro no cadastro


// Rotas de login
route.get('/login', loginController.renderizarLogin)

// Rotas de recuperar senha
route.get('/recuperar-senha', recuperarSenhaController.recuperarSenhaController)


// Rotas de administrador
route.get('/administrativePanel', (req, res)=> {
    res.render('administrativePanel')
})












module.exports = route