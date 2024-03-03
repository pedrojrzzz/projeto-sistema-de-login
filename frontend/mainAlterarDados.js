// Abrir modais quando clicado em alterar algum dado

const body = document.querySelector('body')
body.addEventListener('click', event => {

    const el = event.target

    if (el.classList.contains('nameEdit')) {
        const modalNameEdit = document.querySelector('.modalNameEdit')
        modalNameEdit.showModal()
    }

    if (el.classList.contains('emailEdit')) {
        const modalEmailEdit = document.querySelector('.modalEmailEdit')
        modalEmailEdit.showModal()
    }

    if (el.classList.contains('passwordEdit')) {
        const modalPasswordEdit = document.querySelector('.modalPasswordEdit')
        modalPasswordEdit.showModal()
    }
})

// ************************************************

// Fechar modais quando clicado no icon X

body.addEventListener('click', event => {
    const el = event.target

    if (el.classList.contains('iconXNameEdit')) {
        const modalNameEdit = document.querySelector('.modalNameEdit')
        modalNameEdit.close()
    }

    if (el.classList.contains('iconXEmailEdit')) {
        const modalEmailEdit = document.querySelector('.modalEmailEdit')
        modalEmailEdit.close()
    }

    if (el.classList.contains('iconXPasswordEdit')) {
        const modalPasswordEdit = document.querySelector('.modalPasswordEdit')
        modalPasswordEdit.close()
    }

})
// ***********************************************

// Envio do formulário
const alterarDadadosValidatorClass = require('./modules/alterarDadosValidator').alterarDadadosValidatorClass

body.addEventListener('click', async function (event) {
    const el = event.target

    // FORM NAME EDIT
    if (el.classList.contains('submitFormNameEdit')) {
        event.preventDefault()
        const inputNameEdit = document.querySelector('.inputNameEdit').value
        const dataForm = {
            name: inputNameEdit
        }
        const insAlterarDadosValidator = new alterarDadadosValidatorClass(dataForm)

        const flag = await insAlterarDadosValidator.cleanUpData()
        if (flag == true) {
            await insAlterarDadosValidator.newNameValidator()
        } else {
            return
        }
    }
    // ************************************************************


    // FORM PASSWORD EDIT
    if (el.classList.contains('submitFormPasswordEdit')) {
        event.preventDefault()
        const inputCurrentPasswordEdit = document.querySelector('.inputCurrentPassword').value
        const inputNewPasswordEdit = document.querySelector('.inputNewPasswordEdit').value
        const inputConfirmNewPassword = document.querySelector('.inputConfirmNewPassword').value
        const dataForm = {
            currentPassword: inputCurrentPasswordEdit,
            newPassword: inputNewPasswordEdit,
            confirmNewPassword: inputConfirmNewPassword
        }
        const insAlterarDadosValidator = new alterarDadadosValidatorClass(dataForm)
        const flag = await insAlterarDadosValidator.cleanUpData()
        if (flag == true) {
            await insAlterarDadosValidator.newPasswordValidator()
        } else {
            return
        }
    }
    // ************************************************************
})
// ***************************************
// ***********************************************

//Remover messages de success/errors após alguns segundos
const divSuccess = document.querySelector('.divSuccess')
const divError = document.querySelector('.divErro')


function removeMessages () {
    if (divSuccess) {
        divSuccess.remove()
    }

    if (divError) {
        divError.remove()
    }
}

setTimeout(removeMessages, 10000)