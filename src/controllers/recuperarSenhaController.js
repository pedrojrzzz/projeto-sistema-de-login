// LIBS
const jwt = require('jsonwebtoken')
// *******************************

// Model requerido
const recSenha = require('../models/recSenhaModel').recSenha
// **********************************

// Controller que renderiza página de recuperar senha
const recuperarSenhaControllerPagina = (req, res) => {
    res.render('recuperarSenha')
}
// **********************************


// Controller que recupera senha
const recuperarSenhaUsuario = async function (req, res) {
  const insRecSenha = new recSenha(req.body)
  await insRecSenha.cleanData()

  if (insRecSenha.error.length !== 0) {
    req.flash('error', insRecSenha.error[0])
    console.log('erro')
    res.redirect('/recuperar-senha')

  } else {
    req.flash('success', 'Foi enviado um e-mail para seu endereço fornecido')
    const payload = insRecSenha.body.email
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60
    const token = jwt.sign({exp: expirationTime, data: payload}, process.env.jwtSecret)
    console.log('token' + token)
    const validandoJwt = jwt.decode(token, process.env.jwtSecret)
    console.log(validandoJwt)
    res.redirect('/recuperar-senha')
  }


}

const alterarSenhaUser = async function(req, res) {
  res.render('alterarSenha')
}

module.exports.recuperarSenhaControllerPagina = recuperarSenhaControllerPagina
module.exports.recuperarSenhaUsuario = recuperarSenhaUsuario
module.exports.alterarSenhaUser = alterarSenhaUser