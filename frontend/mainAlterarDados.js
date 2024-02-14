// Abrir modais quando clicado em alterar algum dado

const body = document.querySelector('body')
body.addEventListener('click', event => {

    const el = event.target

    if (el.classList.contains('nameEdit')) {
        const modalNameEdit = document.querySelector('.modalNameEdit')
        modalNameEdit.showModal()
    } 

    if (el.classList.contains('emailEdit')){
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