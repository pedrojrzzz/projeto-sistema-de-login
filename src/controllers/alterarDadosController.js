// LIBS
const jwt = require('jsonwebtoken')
const {
    times
} = require('list')
// ****************

// Model requerido
const alterarDadosModelClass = require('../models/alterarDadosModel').alterarDadosModelClass
// ***********************

// Banco de dados
const userModel = require('../models/cadastroModel').usersModel
// ****************

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
            res.locals.updateUserInfo2(token)
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

        if (flag2 == false) {
            req.session.save(function () {
                req.flash('error', 'Erro ao alterar e-mail, tente novamente!')
                return res.redirect('/alterarDados')
            })
            return
        }
        
        req.session.save(function() {
            res.locals.user = insAlterarDadosModel.tokenJwt
        /* res.locals.userInfo = jwt.decode(insAlterarDadosModel.tokenJwt, process.env.jwtSecret) */
        res.locals.updateUserInfo2(insAlterarDadosModel.tokenJwt)
        res.locals.userInfo = jwt.decode(insAlterarDadosModel.tokenJwt, process.env.jwtSecret) 
        console.log(res.locals.userInfo)
        req.session.confirmTokens = insAlterarDadosModel.tokenEmail // Passando o tokenGenerator para mim validar se o token bate na confirmação
        return res.redirect('/alterarDados')
    })
    } catch (error) {
        console.log(`Função changeEmail falhou: ${error}`)
        return res.render('404')
    }

}


const changeEmailConfirm = async function (req, res) {

    if (res.locals.userInfo) { // Se user estiver logado
        console.log('passou no primeiro if')
        console.log(res.locals.userInfo)
        console.log(res.locals.confirmTokens)
        if (res.locals.userInfo.data.token) { // Se dentro do cookie tiver o token
            console.log(req.params)
            console.log(res.locals.confirmTokens)
            res.redirect('/alterarDados')
            
        }
    }
    return res.render('404')
}


const changePassword = async function (req, res) {

    if (!res.locals.userInfo) {
        return res.redirect('/')
    }

    const insAlterarDadosModel = new alterarDadosModelClass(req.body, res.locals.userInfo)

    const flag = await insAlterarDadosModel.cleanUpData()  // Limpeza dos dados
    if (flag == false) {
        req.session.save(function() {
            req.flash('error', insAlterarDadosModel.errors[0])
            return 
        })
        return res.redirect('/alterarDados')
    }

    const flag2 = await insAlterarDadosModel.changePassword() // Método para alterar a senha
    if (flag2 == false) {
        req.session.save(function() {
            req.flash('error', insAlterarDadosModel.errors[0])
            return
        })
        return res.redirect('/alterarDados')
    }


    req.session.save(function() {
        req.flash('success', 'Senha alterada com sucesso!')
        return res.redirect('/alterarDados')
    })

    

}


module.exports.rendPagAlterarDados = rendPagAlterarDados
module.exports.changeName = changeName
module.exports.changeEmailConfirm = changeEmailConfirm
module.exports.changeEmail = changeEmail
module.exports.changePassword = changePassword