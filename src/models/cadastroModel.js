//Libs
const moongose = require('mongoose')
const validator = require('validator')
// ****************************************


// Schema BD Cadastro de usuários
const cadastroSchema = new moongose.Schema({
    id: {type: 'String', required: true},
    name: {type: 'String', required: true},
    email: {type: 'String', required: true},
    password: {type: 'String', required: true}, 
    confirmedAccount: {type: 'String', required: true},                   // e-mail confirm
    typeAccount: {type: 'String', required: true}  //User or Adm
})

const usersModel = moongose.model('users', cadastroSchema)  // My collection

// *****************************************

// Validando os dados backend
class validandoCadastroBackend {
    constructor(body) {
        this.body = body
        this.nome = body.nome
        this.email = body.email
        this.senha = body.senha
        this.error = []
    }


   async cleanData() {
       
        for (let key in this.body) {

            if (typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }

            this.body = {
                nome: this.body.nome,
                email: this.body.email,
                senha: this.body.senha
            }

        }
        this.validandoNome()
    }


    validandoNome() {
        if (this.body.nome.length == 0) {
            this.error.push('Nome inválido')
            return
        }
        const regexNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

        if (!regexNome.test(this.body.nome)){
            this.error.push('Nome inválido')
            return
        }

        this.validandoEmail()
    }

    validandoEmail() {
        if (this.body.email.length == 0) {
            this.error.push('E-mail inválido')
            return
        }

        if (!validator.isEmail(this.body.email)) {
            this.error.push('E-mail inválido')
            return
        }

        this.validandoSenha()
    }

    validandoSenha() {
        if (this.body.senha.length == 0) {
            this.error.push('Senha inválida')
            return
        }

        if (!validator.isStrongPassword(this.body.senha)){
            this.error.push('Senha inválida')
            return
        }

        this.finalizandoPrimeiroCadastro()
    }

    finalizandoPrimeiroCadastro() {
        this.body = {
            id: '1',
            name: this.body.nome,
            email: this.body.email,
            senha: this.body.senha,
            confirmedAccount: 'false',
            typeAccount: 'admin'
        }
    }

    genNextSequenceMongo() {
       const lastId = usersModel.find({}, 'id', (error, usersId) => {
        if (error) console.log(error)
        else {
            const ids = usersId
            console.log(usersId)
        }
       })
    }

    

    
}
// *****************************************


module.exports.validandoCadastroBackend = validandoCadastroBackend
module.exports.usersModel = usersModel