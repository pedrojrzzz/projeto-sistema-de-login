// LIBS
const validator = require('validator')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
    node
} = require('webpack')
// ************************

// BANCO DE DADOS DE USUÁRIO
const userModel = require('./cadastroModel').usersModel
// *************************
class alterarDadosModelClass {
    constructor(body, userInfo) {
        this.dataForm = body
        this.userInfo = userInfo
        this.tokenJwt = ''
        this.tokenEmail = ''
        this.errors = []
    }

    async cleanUpData() {
        this.dataForm = {
            name: this.dataForm.name || '',
            email: this.dataForm.email || '',
            currentPassword: this.dataForm.CurrentPasswordEdit || '',
            newPassword: this.dataForm.newPassword || '',
            confirmNewPassword: this.dataForm.confirmNewPassword || '',
        }

        for (let key in this.dataForm) {

            if (this.dataForm[key].length > 50) {
                this.errors.push('Quantidade de caracteres inválida')
                return
            }

            if (typeof this.dataForm[key] !== 'string') {
                this.dataForm[key] = ''
                this.errors.push('Campo inválido')
                return
            }

        }

        if (this.errors.length == 0) {
            console.log(this.dataForm)
            return true
        } else {
            return false
        }

    }


    async changeName() {

        // validação
        if (validator.isAlpha(this.dataForm.name)) {
            this.errors.push('Dado inválido')
            return
        }

        // Código para atualizar o nome no banco de dados
        console.log(this.userInfo)
        const flag = await userModel.findOne({
            'email': this.userInfo.data.email
        })
        if (flag) {
            try {
                await userModel.findOneAndUpdate({
                    'email': this.userInfo.data.email
                }, {
                    $set: {
                        'name': this.dataForm.name
                    }
                })
                console.log('Nome alterado com sucesso')
                return await userModel.findOne({
                    'email': this.userInfo.data.email
                }) // Retornando pro controller os dados atualizados do usuário
            } catch (error) {
                console.log(error)
            }

        } else {
            this.errors.push('Erro ao alterar nome!')
            return false
        }
    }


    async changeEmail() {
        // Validação
        if (!validator.isEmail(this.dataForm.email)) {
            this.errors.push('E-mail inválido!')
            return false
        }

        if (this.errors.length !== 0) {
            return false
        }


        // Config nodemailer e envio do e-mail com o link
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: process.env.user,
                pass: process.env.password,
            }
        })

        const tokenGenerator = await this.tokenGenerator()
        const mailOptions = {
            from: process.env.user,
            to: this.userInfo.data.email,
            subject: 'Alteração de e-mail de cadastro (projeto-sistema-de-login)',
            html: `<h2>Link de confirmação para alteração do e-mail de cadastro</h2> </br>
            <a href="http://localhost:3000/changeEmailConfirm/${tokenGenerator}">Clique aqui para alterar seu e-mail de cadastro</a> </br>
            <p>Esse link tem validade de 15 minutos, caso ocorra o vencimento do link, repita o processo para alteração de e-mail</p> </br>
            <p>Caso não tenha sido você que solicitou a troca de e-mail, altere sua senha por segurança</p> </br>
            <p>Isso é um e-mail automático, por favor não responda!</p>`
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(`Erro ao enviar o e-mail: ${err}`)
            } else {
                console.log(`E-mail enviado com sucesso: ${info.response}`)
            }
        })
        // *****************

        // Salvando novo cookie
        const payload = {
            id: this.userInfo.data.id,
            name: this.userInfo.data.name,
            email: this.userInfo.data.email,
            newEmail: this.dataForm.email,
            token: tokenGenerator
        }

        const expirationTime15Minutes = Math.floor(Date.now() / 1000) + 60 * 15;

        const tokenJwt = jwt.sign({
            exp: expirationTime15Minutes,
            data: payload,
        }, process.env.jwtSecret)

        this.tokenJwt = tokenJwt // Passando o token jwt, para mim conseguir acessar no controller
        this.tokenEmail = tokenGenerator // Passando o tokenEmail para mim verificar se os token batem

        return true


    }

    async changePassword() {
        const userModel = require('../models/cadastroModel').usersModel
        console.log(this.dataForm)
        console.log(this.userInfo)

        try {
        const userExist = await userModel.findOne({email: this.userInfo.data.email})
        console.log(userExist)

        if (!userExist) {   // Verificando se usuário existe no Banco de Dados
            this.errors.push('Usuário não encontrado')
            return false
        }
        console.log(this.dataForm.currentPassword)
        console.log(userExist.password)
        
        if (!bcrypt.compareSync(this.dataForm.currentPassword, userExist.password)) {  // Validação se a currentPassword está correta
            this.errors.push('Senha atual está incorreta')
            console.log('Senha incorreta')
            return false   
        }

        if (!validator.isStrongPassword(this.dataForm.currentPassword)) {  // Validando senha atual do usuário
            this.errors.push('Sua senha atual não confere os padrões de senha do servidor')
            return false
        }

        if (!validator.isStrongPassword(this.dataForm.confirmNewPassword)) {  // Validando confirmação de nova senha do servidor
            this.errors.push('Sua confirmação de senha nova não confere os padrões de senha do servidor')
            return false
        }

        if (!validator.isStrongPassword(this.dataForm.newPassword)) {  // Validando nova senha do usuário
            console.log('Senha nova não confere os padrões de senha')
            this.errors.push('Sua senha não é conforme os padrões')
            return false
        }

        // Código que altera a senha no banco de dados

        const salt = bcrypt.genSaltSync(10)
        const hashSenha = bcrypt.hashSync(this.dataForm.newPassword, salt)
        await userModel.findOneAndUpdate({
            'email': this.userInfo.data.email
        }, {
            $set: {
                'password': hashSenha
            }
        })

        return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    async tokenGenerator() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVJXYZabcdefghijklmnopqrstuvwxyz123456789'
        let tokenUsuario = ''
        for (let i = 0; i < 52; i++) {
            tokenUsuario += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        return true
    }
}

module.exports.alterarDadosModelClass = alterarDadosModelClass