const express = require('express')
const route = express.Router()


const homeController = require('./src/controllers/homeController')
const registroController = require('./src/controllers/cadastroController')
const loginController = require('./src/controllers/loginController')
const recuperarSenhaController = require('./src/controllers/recuperarSenhaController')
const recuperarSenhaController2 = require('./src/controllers/recuperarSenhaController2')

//Rotas index
route.get('/', homeController.rendPaginaInicial)


// Rotas de cadastro
route.get('/register', registroController.renderizarCadastro)
route.post('/registerNewUS3r', registroController.cadastroUsuario)

// Rota de confirmação de cadastro
route.get('/confirm/:token', registroController.confirmarConta)


// Rotas de login
route.get('/login', loginController.renderizarLogin)
route.post('/loginValidation', loginController.formularioLogin)

// Rotas de logout
route.get('/logout', loginController.logout)

// Rotas de recuperar senha
route.get('/recuperar-senha', recuperarSenhaController.recuperarSenhaControllerPagina)
route.post('/recuperar-senhaUser', recuperarSenhaController.recuperarSenhaUsuario)
route.get('/changePassword/:tokenChangePassword', recuperarSenhaController2.alterarSenhaUser)
route.post('/changePasswordConfirm', recuperarSenhaController2.changePasswordConfirm)

// Rotas de administrador
route.get('/administrativePanel', (req, res)=> {
    res.render('administrativePanel')
})


// Rotas de error 404
route.get('/404', (req, res) => {
    res.render('404')
})












module.exports = route