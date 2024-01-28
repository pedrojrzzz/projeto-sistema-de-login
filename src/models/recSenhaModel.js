// LIBS
const validator = require('validator')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
// ***************************

// BANCO DE DADOS
const userModel = require('./cadastroModel').usersModel
// *****************************


class recSenha {
    constructor (body) {
        this.body = body
        this.error = []
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
        if (!validator.isEmail(this.body.email)){
            this.error.push('E-mail inválido')
            return
        }

        await this.verificarEmailNoBd()
    }

    async verificarEmailNoBd() {
        const existEmail = await userModel.findOne({email: this.body.email})

        if (!existEmail) {
            this.error.push('E-mail não existe em nosso sistema')
            return
        }

        await this.geradorDeToken()
    }

    async geradorDeToken () {
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tokenUsuario = ''
        for (let i = 0; i < 53; i++) {
            tokenUsuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        console.log(tokenUsuario)

        /* await this.enviarEmailDeRec(tokenUsuario) */
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


}


module.exports.recSenha = recSenha


/// QUANDO USUARIO INSERIR EMAIL, SALVAR UM COOKIE COM O E-MAIL DO USUARIO USANDO JWT 
// PESQUISE NO GPT OU NO GOOGLE
/* 
Usuário vai inserir e-mail

vou limpar os dados recebidos

vou validar o e-mail recebido

verificar se existe e-mail no banco

gerar um token

enviar e-mail com o link 

renderizar uma página para o usuário por o código

criar um controllador dentro do mesmo arquivo que está o primeiro controllador do recuperador de senha

e verificar se os tokens combinam

se sim / renderizar uma página pra ele alterar a senha */