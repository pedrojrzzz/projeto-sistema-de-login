export class alterarDadadosValidatorClass {
    constructor(data) {

        this.formData = data
        this.formNameEdit = document.querySelector('.formNameEdit')
        this.formEmailEdit = document.querySelector('.formEmailEdit')
        this.formPasswordEdit = document.querySelector('.formPasswordEdit')
        this.errors = []
    }

    async cleanUpData() {
        for (let key in this.formData) {

            if (typeof this.formData[key] !== 'string') {
                this.formData[key] = ''
            }


        }
        return true
    }

    async newNameValidator() {
        const inputNameEdit = document.querySelector('.inputNameEdit')

        if (inputNameEdit.value.length == 0) {
            this.errors.push('Nenhum campo pode estar vazio')
            this.showError(inputNameEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputNameEdit)
        }

        const regexApenasLetras = /[a-zA-Z]/
        if (!regexApenasLetras.test(this.formData.name)) {
            this.errors.push('Caracteres especiais não são permitidos')
            this.showError(inputNameEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputNameEdit)
        }

        const regexNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
        if (!regexNome.test(this.formData.name)) {
            this.errors.push('Nome inválido')
            this.showError(inputNameEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputNameEdit)

        }

        if (this.errors.length == 0) {
            this.formNameEdit.submit()
        }
    }

    async newEmailValidator() {
        const inputEmailEdit = document.querySelector('.inputEmailEdit')

        if (this.errors.length !== 0) {
            this.showError(inputEmailEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputEmailEdit)
        }

        const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regexEmail.test(this.formData.email)) {
            this.errors.push('E-mail inválido')
            this.showError(inputEmailEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputEmailEdit)
        }

        if (this.errors.length == 0) {
            this.formEmailEdit.submit()
        }

    }

    async newPasswordValidator() {
        const inputCurrentPasswordEdit = document.querySelector('.inputCurrentPassword')
        const inputNewPasswordEdit = document.querySelector('.inputNewPasswordEdit')
        const inputConfirmNewPassword = document.querySelector('.inputConfirmNewPassword')

        // Verificar se algum campo do form senha está vazio
        if (inputCurrentPasswordEdit.value.length == 0) {
            this.errors.push('Nenhum campo pode estar vazio')
            this.showError(inputCurrentPasswordEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputCurrentPasswordEdit)
        }

        if (inputNewPasswordEdit.value.length == 0) {
            this.errors.push('Nenhum campo pode estar vazio')
            this.showError(inputNewPasswordEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputNewPasswordEdit)
        }

        if (inputConfirmNewPassword.value.length == 0) {
            this.errors.push('Nenhum campo pode estar vazio')
            this.showError(inputConfirmNewPassword, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputConfirmNewPassword)
        }

        // *************************

        // Verificando se a nova senha e a confirmação são iguais
        if (inputNewPasswordEdit.value !== inputConfirmNewPassword.value) {
            this.errors.push('Sua nova senha não coincidem')
            this.showError(inputConfirmNewPassword, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputConfirmNewPassword)
        }
        // **************************

        // Verificar se a nova senha e a antiga são a mesma
        if (inputCurrentPasswordEdit.value == inputNewPasswordEdit.value) {
            this.errors.push('Sua senha antiga e sua nova senha não podem ser a mesma.')
            this.showError(inputCurrentPasswordEdit, this.errors.length - 1)
            return
        } else {
            this.cleanError(inputCurrentPasswordEdit)
        }
        // **************************

        // Verificar se os campos do form senha passam pelo regex de StrongPassword
        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
        if (!regexPassword.test(inputCurrentPasswordEdit.value)) {
            this.errors.push('Senha inválida')
            this.showError(inputCurrentPasswordEdit, this.errors.length - 1)
        } else {
            this.cleanError(inputCurrentPasswordEdit)
        }

        if (!regexPassword.test(inputNewPasswordEdit.value)) {
            this.errors.push('Senha inválida')
            this.showError(inputNewPasswordEdit, this.errors.length - 1)
        } else {
            this.cleanError(inputNewPasswordEdit)
        }

        if (!regexPassword.test(inputConfirmNewPassword.value)) {
            this.errors.push('Senha inválida')
            this.showError(inputConfirmNewPassword, this.errors.length - 1)
        } else {
            this.cleanError(inputConfirmNewPassword)
        }

        // *************************

        if (this.errors.length > 0) {
            console.log('Possui erro no array')
            return
        } else {
            console.log('enviando formulario')
            this.formPasswordEdit.submit()
        }
    }

    showError(field, erro) {
        const proximoElemento = field.nextElementSibling;
        if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
            proximoElemento.remove();
        }

        const paragrafo = document.createElement("p");
        field.insertAdjacentElement("afterend", paragrafo);
        if (this.errors.length !== 0) {
            paragrafo.innerHTML = this.errors[erro];
            paragrafo.style.color = "red";
            paragrafo.style.fontWeight = 600;
            paragrafo.style.marginLeft = 25;
            this.erros = [];

        }
    }

    cleanError(field) {
        const proximoElemento = field.nextElementSibling;

        if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
            proximoElemento.remove(); // Remove o parágrafo
        }
    }
}