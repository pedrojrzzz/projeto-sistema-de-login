// LIBS
//*****************************************/

// Módulos importados
const validandoCadastroBackend = require('../models/cadastroModel').validandoCadastroBackend
const userModel = require('../models/cadastroModel').usersModel
// *****************************************

// CONTROLLERS

// Controller renderizar página de cadastro
const renderizarCadastro = (req, res) => {
    res.render('register')
}
//************************************** */


// Controller que cuida do cadastro do usuário
const cadastroUsuario = async function (req, res, next) {
                           
    const insValidandoCadastroBackend = new validandoCadastroBackend(req.body)
    await insValidandoCadastroBackend.cleanData()


    if (insValidandoCadastroBackend.error.length !== 0) {
        req.session.save(function () {
            console.log('Erro no cadastro')
            console.log(insValidandoCadastroBackend.error)
            req.flash('error', insValidandoCadastroBackend.error)
            res.redirect('/register')
            return
        })
        return
    } else {
        req.session.save(async function () {

            await insValidandoCadastroBackend.enviarEmailConfirmacao()
                .catch(error => {
                    console.log(`Erro ao enviar o e-mail: ${error}`)
                    insValidandoCadastroBackend.error.push('Erro ao enviar e-mail de confirmação, tente prencheer o formulário de cadastro novamente!')
                    req.flash('error', insValidandoCadastroBackend.error)
                    return
                })

            await userModel.create(insValidandoCadastroBackend.body)
                .then(response => {
                    if (response) {
                        console.log('Usuário cadastrado no banco de dados')
                    } else {
                        console.log('Houve algum problema ao cadastrar o usuário no banco de dados')
                        insValidandoCadastroBackend.error.push('Erro interno, tente prencheer o formulário novamente')
                        req.flash('error', insValidandoCadastroBackend.error)
                        return
                        return
                    }

                })
                .catch(error => {
                    console.log(`Error ao inserir usuário no banco de dados`)
                    insValidandoCadastroBackend.error.push('Erro interno, tente prencheer o formulário novamente')
                    req.flash('error', insValidandoCadastroBackend.error)
                    return
                })

            const msg = 'Um e-mail foi encaminhado ao seu endereço cadastrado. Gentilmente, confirme a recepção, e, caso não o encontre na sua caixa de entrada, verifique também a caixa de spam.'
            req.flash('success', msg)
            res.redirect('/register')
            next()
            return
        })
    }

}

// ****************************************************

// Controller que cuida da confirmação de conta do usuário
const confirmarConta = async function (req, res) {
    const tokenRecebido = req.params
    const insValidandoCadastroBackend = new validandoCadastroBackend()
    const trueOrFalse = await insValidandoCadastroBackend.confirmandoConta(tokenRecebido)
    if (trueOrFalse == true) {
        console.log('Conta confirmada!')
        res.redirect('/')

    } else {
        console.log('Erro ao confirmar a conta, erro acima ^')
        return
    }

}
// *****************************************************


module.exports.renderizarCadastro = renderizarCadastro
module.exports.cadastroUsuario = cadastroUsuario
module.exports.confirmarConta = confirmarConta