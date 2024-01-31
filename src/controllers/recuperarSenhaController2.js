// LIBS
const jwt = require('jsonwebtoken')
// ***********************************

// MODELS
const recSenhaModel = require('../models/recSenhaModel').recSenha


// ************************************

const alterarSenhaUser = async function (req, res) {
    const insPassandoTokenJwt = require('./recuperarSenhaController').insPassandoTokenJwt  // Importando o jwtToken

    const validandoJwt = jwt.decode(insPassandoTokenJwt.jwtToken, process.env.jwtSecret)   // Decodificando o jwt
    const tokenLink = req.params.tokenChangePassword
    console.log(tokenLink)

    if (validandoJwt.data.tokenLink == tokenLink) {       // Validando se o tokenDoLink é compatível com o gerado
        res.render('alterarSenha')
        console.log(validandoJwt.data)
    } else {
        res.render('404')
    }

}

const changePasswordConfirm = async function (req, res) {
    const insPassandoTokenJwt = require('./recuperarSenhaController').insPassandoTokenJwt  // Importando o jwtToken

    const validandoJwt = jwt.decode(insPassandoTokenJwt.jwtToken, process.env.jwtSecret)   // Decodificando o jwt

    const insRecSenhaModel = new recSenhaModel() // Instância do banco de dados

    const dadosForm = req.body
    console.log('*****************************')
    console.log(validandoJwt)
    console.log(dadosForm)

}


module.exports.alterarSenhaUser = alterarSenhaUser
module.exports.changePasswordConfirm = changePasswordConfirm