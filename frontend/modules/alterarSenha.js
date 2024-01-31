export class alterarSenhaClasse {
    constructor() {
        this.formularioAlterarSenha = document.querySelector('.alterarSenhaForm')
        this.senha = document.querySelector('.senhaAlterarSenha')
        this.confirmSenha = document.querySelector('.confirmSenhaAlterarSenha')
        this.erros = []
    }

    // Função de limpar os dados recebidos
    async limpandoDados() {
        const meuArray = []
        meuArray.push(this.senha)
        meuArray.push(this.confirmSenha)

        for (let i = 0; i < meuArray.length; i++) {
            if (typeof meuArray[i] !== 'string') {
                meuArray[i] = '';

            }

            this.senha = meuArray[0]
            this.confirmSenha = meuArray[1]

            await this.validandoSenha()   // Chamando a próxima função
        }
    }
    // **************************************************


    // Função de validar senha
    async validandoSenha() {
        if (this.senha !== this.confirmSenha) {
            this.erros.push('Confirmação de senha inválida: As senhas não coincidem.')
            this.mostrandoErros(this.confirmSenha)
            return
        } else {
            this.limpandoErros(this.confirmSenha)
        }

        const regexSenha = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
        if (!regexSenha.test(this.senha)) {
            this.erros.push('Senha inválida: Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial ($*&@#).')
            this.mostrandoErros(this.senha)
            return
        } else {
            this.limpandoErros(this.senha)
        }

        this.envioDoFormulario() // Chamando a próxima função
    }
    // *************************************************


    // Função que mostra os erros no formulário
    mostrandoErros(campo) {
        const proximoElemento = campo.nextElementSibling;
        if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
            return;
        }

        const paragrafo = document.createElement("p");
        campo.insertAdjacentElement("afterend", paragrafo);
        paragrafo.innerHTML = this.erros[0];
        paragrafo.style.color = "red";
        paragrafo.style.fontWeight = 600;
        paragrafo.style.marginLeft = 25;
        this.erros = [];
    }
    // ***********************************************************


    // Função que limpa os erros do formulário quando eles estão visíveis
    limpandoErros(campo) {
        const proximoElemento = campo.nextElementSibling;

        if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
            proximoElemento.remove(); // Remove o parágrafo
        }
    }
    // **************************************************************


    // Função que envia o formulário
    envioDoFormulario() {
        this.formularioAlterarSenha.submit()
    }
    // **********************************************************


}