// LIBS
const jwt = require('jsonwebtoken')
// ***********************************

// MODELS
const recSenhaModel = require('../models/recSenhaModel').recSenha


// ************************************

// Controller que cuida das rotas, validação de jwt, e o token link do form Alterar Senha
const alterarSenhaUser = async function (req, res) {
    const insPassandoTokenJwt = require('./recuperarSenhaController').insPassandoTokenJwt // Importando o jwtToken

    // Verificando se o JWT existe, caso não exista mostre página 404 para usuário
    try {
        if (!insPassandoTokenJwt || !insPassandoTokenJwt.jwtToken) {
            throw new Error('JWT não encontrado')
        }
    } catch (error) {
        res.redirect('/404')
        return

    }
    
    const validandoJwt =  jwt.decode(insPassandoTokenJwt.jwtToken, process.env.jwtSecret) // Decodificando o jwt
    const tokenLink = req.params.tokenChangePassword
    
    if (validandoJwt.data.tokenLink == tokenLink) { // Validando se o tokenDoLink é compatível com o gerado
        res.render('alterarSenha')
    } else {
        res.redirect('/404')
        return
    }

}

// Controller que cuida do post do form Alterar Senha
const changePasswordConfirm = async function (req, res) {
    const insPassandoTokenJwt = require('./recuperarSenhaController').insPassandoTokenJwt // Importando o jwtToken

    const validandoJwt = jwt.decode(insPassandoTokenJwt.jwtToken, process.env.jwtSecret) // Decodificando o jwt

    const insRecSenhaModel = new recSenhaModel() // Instância do banco de dados

    const dadosForm = req.body
    console.log('*****************************')
    console.log(validandoJwt)
    console.log(dadosForm)
    const trueOrFalse = await insRecSenhaModel.validarSenha(dadosForm)  // FLAG

    // LÓGICA PARA ALTERAR SENHA CASO NÃO HOUVER NENHUM ERRO
    if (trueOrFalse !== true) {
        req.session.save(async function () {
            await req.flash('error', insRecSenhaModel.error)
            res.redirect(`/changePassword/${validandoJwt.data.tokenLink}`)
            return
        })
        return
    } else {
        req.session.save(async function () {
            try {
            await insRecSenhaModel.alterarSenha(validandoJwt.data.email, dadosForm.senha)
            await req.flash('success', 'Senha alterada com sucesso!')
            res.redirect('/login')
            return
            }
            catch (error) {
                console.log(error)
                res.redirect('/404')
            }
        })
    }
}


module.exports.alterarSenhaUser = alterarSenhaUser
module.exports.changePasswordConfirm = changePasswordConfirm