//Libs
const moongose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
// ****************************************


// Schema BD Cadastro de usuários
const cadastroSchema = new moongose.Schema({
    id: {
        type: 'String',
        required: true
    },
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    confirmedAccount: {
        type: 'String',
        required: true
    }, // e-mail confirm
    token: {
        type: 'String',
        required: true
    },
    typeAccount: {
        type: 'String',
        required: true
    } //User or Adm
})

const usersModel = moongose.model('users', cadastroSchema) // My collection

// *****************************************

// Validando os dados backend
class validandoCadastroBackend {
    constructor(body) {
        this.body = body
        this.error = []
        this.tokenUsuario = ''
    }


    async cleanData() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
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

        if (!regexNome.test(this.body.nome)) {
            this.error.push('Nome inválido')
            return
        }

        await this.validandoEmail()
    }


    async validandoEmail() {
        const existEmail = await usersModel.findOne({
            email: this.body.email
        })
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

        if (!validator.isStrongPassword(this.body.senha)) {
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

        /* this.geradorDeToken() */
    }


    async genNextSequenceMongo() { // AUTO INCREMENT MONGODB
        const lastId = await usersModel.countDocuments()
        return lastId
    }


    async geradorDeToken() {
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tokenUsuario = ''
        for (let i = 0; i < 47; i++) {
            tokenUsuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }

        return tokenUsuario
    }


    async enviarEmailConfirmacao() {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: process.env.user,
                pass: process.env.password,
            }
        })




        const mailOptions = {
            from: process.env.user,
            to: this.body.email,
            subject: 'Link de confirmação de cadastro projeto-sistema-de-login',
            html: `<h2>Link de confirmação</h2> </br>
            <a href="http://localhost:3000/confirm/${this.tokenUsuario}">Clique aqui para confirmar sua conta</a> </br>
            <p>Isso é um e-mail automático, por favor não responda!</p>`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) console.log("Erro ao enviar o email: " + error);
            else {
                console.log("E-mail enviado " + info.response);
            }
        });
    }


    async confirmandoConta(tokenRecebido) {
        const tokenRecebidoTratado = tokenRecebido
        if (tokenRecebidoTratado.length !== 47) {
            return
        }
        if (!validator.isAlphanumeric(tokenRecebidoTratado)) {
            console.log('cai no alphaNumeric')
            return
        }
        if (!validator.blacklist(tokenRecebidoTratado)) {
            console.log('cai no blacklist')
            return
        }
        if (!validator.escape(tokenRecebidoTratado)) {
            console.log('cai no escape')
            return
        }
        try {
            await usersModel.findOneAndUpdate(
                {"token": tokenRecebido},
                 {$set: {"confirmedAccount": 'true'}
            }, )
            return true
        } catch (error) {
            console.log('oi')
            console.log(error)
            return false
        }

    }

}

// *****************************************


module.exports.validandoCadastroBackend = validandoCadastroBackend
module.exports.usersModel = usersModel