// LIBS
const validator = require('validator')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
// ***************************

// BANCO DE DADOS
const userModel = require('./cadastroModel').usersModel
// *****************************


class recSenha {
    constructor(body) {
        this.body = body
        this.error = [],
            this.tokenUsuario = ''
    }

    async cleanData() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }

            this.body = {
                email: this.body.email,
                token: ''
            }
        }
        await this.validandoEmail()
    }

    async validandoEmail() {
        if (!validator.isEmail(this.body.email)) {
            this.error.push('E-mail inválido')
            return
        }

        await this.verificarEmailNoBd()
    }

    async verificarEmailNoBd() {
        const existEmail = await userModel.findOne({
            email: this.body.email
        })

        if (!existEmail) {
            this.error.push('E-mail não existe em nosso sistema')
            return
        }

        this.tokenUsuario = await this.geradorDeToken()
        console.log(this.tokenUsuario)
        await this.enviarEmailDeRec(this.tokenUsuario)
    }

    async geradorDeToken() {
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tokenUsuario = ''
        for (let i = 0; i < 42; i++) {
            tokenUsuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }

        return tokenUsuario


    }

    async enviarEmailDeRec(tokenUsuario) {
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
            subject: 'Link para alteração de senha',
            html: `<h2>Alteração de senha</h2> </br>
            <a href="http://localhost:3000/changePassword/${this.tokenUsuario}">Clique aqui para definir uma nova senha</a> </br>
            <p>Caso não tenha sido você, considere alterar sua senha para sua segurança</p> </br>
            <p>Isso é um e-mail automático, por favor não responda!</p>`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) console.log("Erro ao enviar o email: " + error);
            else {
                console.log("E-mail enviado " + info.response);
            }
        });
    }

    async validarSenha(dadosForm) {
        const senha = dadosForm.senha
        const confirmSenha = dadosForm.confirmSenha

        if (senha.length == 0) {
            this.error.push('Senha inválida')
            return false
        }

        if (confirmSenha.length == 0) {
            this.error.push('Suas senhas não coincidem')
            return false
        }

        if (!validator.isStrongPassword(senha)) {
            this.error.push('Sua senha não segue os padrões estabelecidos')
            return false
        }
        return true
    }

    // Método que alterar a senha no banco de dados
    async alterarSenha(email, senha) {
        const salt = bcrypt.genSaltSync(10)
        const hashSenha = bcrypt.hashSync(senha, salt)
        try {
            await userModel.findOneAndUpdate({
                "email": email
            }, {
                $set: {
                    "password": hashSenha
                }
            }, )
        } catch (error) {
            console.log(error)
            res.redirect('/404')
            return
        }
    }
    // ********************************************
}


module.exports.recSenha = recSenha