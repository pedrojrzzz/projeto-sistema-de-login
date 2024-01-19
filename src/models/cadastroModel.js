//Libs
const moongose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
// ****************************************


// Schema BD Cadastro de usuários
const cadastroSchema = new moongose.Schema({
    id: {type: 'String', required: true},
    name: {type: 'String', required: true},
    email: {type: 'String', required: true},
    password: {type: 'String', required: true}, 
    confirmedAccount: {type: 'String', required: true},                   // e-mail confirm
    token: {type: 'String', required: true},
    typeAccount: {type: 'String', required: true}  //User or Adm
})

const usersModel = moongose.model('users', cadastroSchema)  // My collection

// *****************************************

// Validando os dados backend
class validandoCadastroBackend {
    constructor(body) {
        this.body = body
        this.error = []
        this.tokenUsuario = ''
        this.tokenEnviadoHash = ''
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
        await this.validandoNome()
    }


    async validandoNome() {
        if (this.body.nome.length == 0) {
            this.error.push('Nome inválido')
            return
        }
        const regexNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

        if (!regexNome.test(this.body.nome)){
            this.error.push('Nome inválido')
            return
        }

        await this.validandoEmail()
    }


    async validandoEmail() {
        const existEmail = await usersModel.findOne({email: this.body.email})
        if (existEmail) {
            this.error.push('E-mail já cadastrado em nosso sistema')
        }

        if (this.body.email.length == 0) {
            this.error.push('E-mail inválido')
            return
        }

        if (!validator.isEmail(this.body.email)) {
            this.error.push('E-mail inválido')
            return
        }

        await this.validandoSenha()
    }


     async validandoSenha() {
        if (this.body.senha.length == 0) {
            this.error.push('Senha inválida')
            return
        }

        if (!validator.isStrongPassword(this.body.senha)){
            this.error.push('Senha inválida')
            return
        }
        await this.finalizandoCadastro()
    }


    async finalizandoCadastro() {
        const id = await this.genNextSequenceMongo()
        const tokenUser = await this.geradorDeToken()
        this.tokenUsuario = tokenUser
        


        const salt = bcrypt.genSaltSync(10)
        this.body.senha = bcrypt.hashSync(this.body.senha, salt)

        this.body = {
            id: id,
            name: this.body.nome,
            email: this.body.email,
            password: this.body.senha,
            confirmedAccount: 'false',
            token: this.tokenUsuario,
            typeAccount: 'user'
        }

        this.geradorDeToken()
    }


    async genNextSequenceMongo() {
        const lastId = await usersModel.find({
            $and: [
              { 'id': { $gte: 1 } } // IDs maiores ou iguais a 1

            ]
          });
          let arrayID = []
          for (let i = 0; i <  lastId.length; i++) {
            let passandoPraNumber = Number(lastId[i].id)
            arrayID.push(passandoPraNumber)
          }
          
          const maxID = Math.max(...arrayID)
          return maxID + 1
         
    }


    async geradorDeToken() {
        let numerosAleatorios = 0
        let intermediarioFormatado = []
        let tokenUsuario = ''
        for (let i = 0; i < 6; i++){
            numerosAleatorios = Math.round(Math.random() * (9 - 0) + 0)
            intermediarioFormatado.push(numerosAleatorios)
            tokenUsuario += String(intermediarioFormatado[i])
        }
        
        return tokenUsuario
    }


    async enviarEmailConfirmacao() {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.user,
                pass: process.env.password,
                  }
          })

        const tokenEnviadoHash = bcrypt.hashSync(this.tokenUsuario, 5)
        this.tokenEnviadoHash = tokenEnviadoHash

        const mailOptions = {
            from: process.env.user,
            to: this.body.email,
            subject: 'Link de confirmação de cadastro projeto-sistema-de-login',
            html: `<h1>Link de confirmação</h1></br><p>http://localhost:3000/${tokenEnviadoHash}</p>`
        }
 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log("Erro ao enviar o email: " + error);
        else {
          console.log("E-mail enviado " + info.response);
        }
      });
    }
    
}
// *****************************************


module.exports.validandoCadastroBackend = validandoCadastroBackend
module.exports.usersModel = usersModel
