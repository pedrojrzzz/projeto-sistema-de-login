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

            if (this.formData[key].length < 2) {
                this.errors.push('Quantidade de caracteres inválida')
                return false
            }

        }
        return true
    }

    async newNameValidator() {
        const inputNameEdit = document.querySelector('.inputNameEdit')

        const regexApenasLetras = /[a-zA-Z]/
        if (!regexApenasLetras.test(this.formData.name)) {
            this.errors.push('Caracteres especiais não são permitidos')
            this.showError(inputNameEdit)
            return
        } else {
            this.cleanError(inputNameEdit)
        }

        const regexNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
        if (!regexNome.test(this.formData.name)) {
            this.errors.push('Nome inválido')
            this.showError(inputNameEdit)
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

        const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regexEmail.test(this.formData.email)) {
            this.errors.push('E-mail inválido')
            this.showError(inputEmailEdit)
            return
        } else {
            this.cleanError(inputEmailEdit)
        }

        if (this.errors.length == 0) {
            this.formEmailEdit.submit()
        }
    }

    async newPasswordValidator() {}

    showError(field) {
        const proximoElemento = field.nextElementSibling;
        if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
            proximoElemento.remove();
        }

        const paragrafo = document.createElement("p");
        field.insertAdjacentElement("afterend", paragrafo);
        if (this.errors.length !== 0) {
            paragrafo.innerHTML = this.errors[0];
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