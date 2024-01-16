const validandoCadastroBackend = require('../models/cadastroModel').validandoCadastroBackend
const userModel = require('../models/cadastroModel').usersModel



const cadastroUsuario = async function(req, res) {
    const dadosRecebidos = req.body
    console.log(`Formulário de cadastro recebido`)
    res.send(req.body)

    const insValidandoCadastroBackend = new validandoCadastroBackend(req.body)
    await insValidandoCadastroBackend.cleanData()

    if (insValidandoCadastroBackend.error.length !== 0) {
        console.log('Erro no cadastro')
        
        req.flash('error', insValidandoCadastroBackend.error)
        // criar lógica
        return
    } else {
        console.log('Cadastrado com sucesso')
        req.flash('success', 'Cadastro feito com sucesso!')
        console.log(insValidandoCadastroBackend.body)
        /* userModel.create(insValidandoCadastroBackend.body) */
    }
}


module.exports.cadastroUsuario = cadastroUsuario
