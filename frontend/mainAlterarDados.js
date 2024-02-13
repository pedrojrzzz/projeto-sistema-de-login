const body = document.querySelector('body')
body.addEventListener('click', event => {

    const el = event.target

    if (el.classList.contains('nameEdit')) {
        const modalNameEdit = document.querySelector('.modalNameEdit')
        modalNameEdit.showModal()
    } 

    if (el.classList.contains('emailEdit')){
        console.log('oi clicou em mim 2')
    }

    if (el.classList.contains('passwordEdit')) {
        console.log('oi clicou em mim 3')
    }
})