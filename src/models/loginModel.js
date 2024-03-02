// LIBS
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// ********************************

// MODELS
const userModel = require('./cadastroModel').usersModel
// ********************************

class loginModelClass {
    constructor(dataForm) {
        this.body = dataForm
        this.user = []
        this.error = []
    }

    async cleanData() {
        const dataClean = []

        for (let key in this.body) {

            if (key.length < 1 || key.length == 'undefined') {
                this.error.push('E-mail ou Senha inválidos.')
                return false
            }

            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
            dataClean.push(this.body[key])
        }

        this.body = {email: dataClean[1], password: dataClean[2]} // Passando para this.body todos os dados limpos

        return true

    }

    async dataValidation() {
        if (!validator.isEmail(this.body.email)) {
            this.error.push('E-mail ou Senha inválidos')
            return false
        }

        if (!validator.isStrongPassword(this.body.password)) {
            this.error.push('E-mail ou Senha inválidos')
            return false
        }

        /* this.user = await this.logarUser() */
    }

    async logarUser() {
        this.user = await userModel.findOne({email: this.body.email}) 

        if (!this.user) {
            this.error.push('E-mail ou Senha inválidos')
            return false
        }

        const passwordCorrect = bcrypt.compareSync(this.body.password, this.user.password)   
        if (!passwordCorrect) {                                                            
            this.error.push('E-mail ou Senha inválidos')
            this.user = null
            return false
        } 


    }

    
}

module.exports.loginModelClass = loginModelClass