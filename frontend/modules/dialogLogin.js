export class modalLogin {
    constructor() {
        this.modalLogin = document.querySelector('.formLogin')
        this.modalEsqueceuSenha = document.querySelector('.formEsqueceuSenha')
    }

    abrirFormLogin() {
        this.modalLogin.showModal()
    }

    fecharFormLogin() {
        this.modalLogin.close()
    }

    esqueceuSenha() {
        this.modalLogin.close()
        this.modalEsqueceuSenha.showModal()
    }
}