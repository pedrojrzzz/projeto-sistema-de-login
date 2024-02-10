// LIBS
const jwt = require('jsonwebtoken')
// **************************

const renderizarLogin = (req, res) => {
    res.render('login')
}

const formularioLogin = async function (req, res) {
    const loginModelClass = require('../models/loginModel').loginModelClass // LoginModelClass
    const insLoginModelClass = new loginModelClass(req.body) // Instance of object

    try {
        await insLoginModelClass.cleanData() // Chama todas as funções uma atrás da outras

        if (insLoginModelClass.error.length == 0) {
            req.flash('success', 'Usuário logado com sucesso')

            const id = insLoginModelClass.user.id
            const name = insLoginModelClass.user.name
            const email = insLoginModelClass.user.email

            const payload = {
                id,
                name,
                email
            } // Dado que vai ser salvo no jwt
            const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 // Tempo de expirar jwt
            const token = jwt.sign({
                user: insLoginModelClass.user.email,
                exp: expirationTime,
                data: payload
            }, process.env.jwtSecret) // Criando o token JWT
            //const validandoJwt = jwt.decode(token, process.env.jwtSecret)

            req.session.user = token
            console.log(req.session.user)
            //console.log(insLoginModelClass.user)
            res.redirect('/')
        }
    } catch (error) {
        console.log('Erro ao logar usuário')
        console.log(error)
        res.render('404')
    }
}

const logout = async function (req, res) {
    await req.session.destroy(err => {
        if (err) {
            req.flash('error', 'Erro ao deslogar usuário, tente novamente.')
            console.log('Erro ao deslogar usuário')
            return res.redirect('/login')
        }

        req.flash('success', 'Deslogado com sucesso!')
        res.redirect('/login')
    })
}


module.exports.renderizarLogin = renderizarLogin
module.exports.formularioLogin = formularioLogin
module.exports.logout = logout