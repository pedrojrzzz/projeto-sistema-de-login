export class modalCadastro {
    constructor() {
        this.modal = document.querySelector('.formCadastro')
    }
    
    abrirFormCadastro() {
        this.modal.showModal()
    }

    fecharFormCadastro () {
        this.modal.close()
    }

}