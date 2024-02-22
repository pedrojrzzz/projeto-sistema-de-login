// LIBS
const jwt = require('jsonwebtoken')
// ****************

// Model requerido
const alterarDadosModelClass = require('../models/alterarDadosModel').alterarDadosModelClass
// ***********************

const rendPagAlterarDados = async function (req, res) {
    if (res.locals.userInfo) {
        res.render('alterarDados')
    } else {
        res.render('404')
    }
}

const changeName = async function (req, res) {

    if (res.locals.userInfo) {
        const userInfo = res.locals.userInfo

        const insAlterarDadosModel = new alterarDadosModelClass(req.body, res.locals.userInfo)

        // Se cleanUp dos dados for falso retorne, caso for verdadeiro continue o código
        const flag1 = await insAlterarDadosModel.cleanUpData()
        if (flag1 == false) {
            req.session.save(async function () {
                await req.flash('error', 'Ocorreu um erro, tente novamente')
                res.redirect('/alterarDados')
                return
            })
            return
        }

        // Se método changeName for falso retorne, caso for verdadeiro continue o código
        const flag2 = await insAlterarDadosModel.changeName()
        if (flag2 == false) {
            req.session.save(async function () {
                await req.flash('error', 'Ocorreu um erro, tente novamente')
                res.redirect('/alterarDados')
                return
            })
            return
        } else {
            // Criando nova sessão, e salvando cookie quando dados atualizado do usuário
            const {
                id,
                name,
                email
            } = flag2
            const payload = {
                id: id,
                name: name,
                email: email,
            }


            const expirationTime7Days = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
            const token = jwt.sign({
                exp: expirationTime7Days,
                data: payload
            }, process.env.jwtSecret)
            req.session.user = token
            res.locals.updateUserInfo()
            console.log(res.locals.userInfo)
            req.flash('success', 'Nome alterado com sucesso')
            return res.redirect('/alterarDados')
        }
        // if se tudo der certo, salvar nosso jwt token com as novas informações do usuário
    } else {
        res.render('404')
    }
}

const changeEmail = async function (req, res) {
    res.send(req.body)

    const insAlterarDadosModel = new alterarDadosModelClass(req.body, res.locals.userInfo)


    // Se cleanUp dos dados for falso retorne, caso for verdadeiro continue o código
    const flag1 = await insAlterarDadosModel.cleanUpData()
    if (flag1 == false) {
        req.session.save(function () {
            req.flash('error', 'Erro ao alterar e-mail, tente novamente!')
            return res.redirect('/alterarDados')
        })
        return
    }

    try {
        const flag2 = await insAlterarDadosModel.changeEmail()
        res.locals.user = insAlterarDadosModel.tokenJwt
        console.log(res.locals.user)
        res.locals.userInfo = jwt.decode(insAlterarDadosModel.tokenJwt, process.env.jwtSecret)
        console.log(res.locals.userInfo)

    } catch (error) {
        console.log(`Função changeEmail falhou: ${error}`)
    }

}


const changeEmailConfirm = async function (req, res) {
   console.log(res.locals.userInfo)
}


const changePassword = async function (req, res) {

}


module.exports.rendPagAlterarDados = rendPagAlterarDados
module.exports.changeName = changeName
module.exports.changeEmailConfirm = changeEmailConfirm
module.exports.changeEmail = changeEmail
module.exports.changePassword = changePassword