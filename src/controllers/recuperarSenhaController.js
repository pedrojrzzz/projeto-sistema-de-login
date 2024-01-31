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
    /* const payload = insRecSenha.body.email */
    const payload = {email: insRecSenha.body.email, tokenLink: insRecSenha.tokenUsuario} // Dado que vai ser salvo no jwt
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60                       // Tempo de expirar jwt
    const token = jwt.sign({exp: expirationTime, data: payload}, process.env.jwtSecret)  // Criando o token JWT
    const validandoJwt = jwt.decode(token, process.env.jwtSecret)

    class passandoTokenJwt {
      constructor(token) {
        this.jwtToken = token
      }
    }
    const insPassandoTokenJwt = new passandoTokenJwt(token)

    module.exports.insPassandoTokenJwt = insPassandoTokenJwt
    res.redirect('/recuperar-senha')
  }


}


module.exports.recuperarSenhaControllerPagina = recuperarSenhaControllerPagina
module.exports.recuperarSenhaUsuario = recuperarSenhaUsuario