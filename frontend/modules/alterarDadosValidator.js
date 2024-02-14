export class alterarDadadosValidatorClass {
    constructor (data) {

        this.formData = data
        this.formNameEdit = document.querySelector('.formNameEdit')
        this.formEmailEdit = document.querySelector('.formEmailEdit')
        this.formPasswordEdit = document.querySelector('.formPasswordEdit')
        this.errors = []
    }

    cleanUpData() {
    }

    newNameValidator() {}

    newEmailValidator() {}

    newPasswordValidator() {}

    showError() {}

    cleanError() {}
}