const validandoCadastroBackend = require('../models/cadastroModel').validandoCadastroBackend
const userModel = require('../models/cadastroModel').usersModel

const renderizarCadastro = (req, res) => {
    res.render('register')
}

const cadastroUsuario = async function(req, res) {
    console.log(`Formulário de cadastro recebido`)      // Cadastro postado no meu servidor
    /* res.send(req.body)  */                                 // Enviado o body da requisição, retirar isso em produção                                  

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
    req.session.save(async function() {
        userModel.create(insValidandoCadastroBackend.body)
        /* await insValidandoCadastroBackend.enviarEmailConfirmacao() */   //Desativei, para nao ser tratado como spam
        .then(response => console.log(response))
        .catch(error => {
            console.log(`Erro ao enviar o e-mail: ${error}`)
            return
        })

        console.log('Cadastrado com sucesso')
        const msg = 'Um e-mail foi encaminhado ao seu endereço cadastrado. Gentilmente, confirme a recepção, e, caso não o encontre na sua caixa de entrada, verifique também a caixa de spam.'
        req.flash('success', msg)
        res.locals.tokenUrl = insValidandoCadastroBackend.tokenEnviadoHash
        console.log(res.locals.tokenUrl)
        res.redirect('/register')
        return
    })
}
  

} 


module.exports.renderizarCadastro = renderizarCadastro
module.exports.cadastroUsuario = cadastroUsuario


