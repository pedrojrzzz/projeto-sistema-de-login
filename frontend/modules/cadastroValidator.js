export class cadastroValidator {
  constructor() {
    this.formularioCadastro = document.querySelector(".formularioCadastro");
    this.nomeCompleto = document.querySelector(".cadastroNome");
    this.email = document.querySelector(".cadastroEmail");
    this.senha = document.querySelector(".cadastroSenha");
    this.confirmSenha = document.querySelector(".cadastroConfirmSenha");
    this.erros = [];
  }

  // LIMPANDO OS CAMPOS
  limpandoDados() {
    const meuArray = [];
    meuArray.push(
      this.nomeCompleto.value,
      this.email.value,
      this.senha.value,
      this.confirmSenha.value
    );

    for (let i = 0; i < meuArray.length; i++) {
      // Garantindo que tudo seja uma String
      if (typeof meuArray[i] !== "string") {
        meuArray[i] = "";
      }
    }

    const nomeUser = this.nomeCompleto.value;
    const emailUser = this.email.value;
    const senhaUser = this.senha.value;
    const confirmSenhaUser = this.confirmSenha.value;

    if (nomeUser.length == 0 || typeof nomeUser == "undefined") {
      // Se nome tiver vazio, retorne erro para usuário
      this.erros.push("Campo nome não pode estar vazio");
      this.mostrandoErros(this.nomeCompleto);
      return;
    } else this.limpandoErros(this.nomeCompleto);

    if (emailUser.length == 0 || typeof emailUser == "undefined") {
      // Se e-mail tiver vazio, retorne erro para usuário
      this.erros.push("Campo e-mail não pode estar vazio");
      this.mostrandoErros(this.email);
      return;
    } else this.limpandoErros(this.email);

    if (senhaUser.length == 0 || typeof senhaUser == "undefined") {
      // Se senha tiver vazio, retorne erro para usuário
      this.erros.push("Campo senha não pode estar vazio");
      this.mostrandoErros(this.senha);
      return;
    } else this.limpandoErros(this.senha);

    if (
      confirmSenhaUser.length == 0 ||
      typeof confirmSenhaUser == "undefined"
    ) {
      // Se confirmSenha tiver vazio, retorne erro para usuário
      this.erros.push("Campo confirmar senha não pode estar vazio");
      this.mostrandoErros(this.confirmSenha);
      return;
    } else this.limpandoErros(this.confirmSenha);

    this.validandoNome();
  }
  // ***********************************************

  // VALIDANDO NOME FORMULÁRIO CADASTRO
  validandoNome() {
    const regexNome =
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    const nomeUser = this.nomeCompleto.value;

    if (!regexNome.test(nomeUser)) {
      this.erros.push("Nome inválido");
      this.mostrandoErros(this.nomeCompleto);
      return;
    } else this.limpandoErros(this.nomeCompleto);
    this.validandoEmail();
  }
  // **************************************************

  //  VALIDANDO E-MAIL NO FORMULÁRIO DE CADASTRO
  validandoEmail() {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailUser = this.email.value;

    if (!regexEmail.test(emailUser)) {
      this.erros.push("E-mail inválido");
      this.mostrandoErros(this.email);
      return;
    } else this.limpandoErros(this.email);
    this.validandoSenha();
  }
  // ***************************************************

  // VALIDANDO SENHA NO FORMULÁRIO DE CADASTRO
  async validandoSenha() {
    const regexSenha =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    const senhaUser = this.senha.value;
    const confirmSenhaUser = this.confirmSenha.value;

    if (!regexSenha.test(senhaUser)) {
      this.erros.push(
        "Senha inválida: Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial ($*&@#)."
      );
      this.mostrandoErros(this.senha);
      return;
    } else this.limpandoErros(this.senha);

    if (senhaUser !== confirmSenhaUser) {
      this.erros.push(
        "Confirmação de senha inválida: As senhas não coincidem."
      );
      this.mostrandoErros(this.confirmSenha);
      return;
    } else this.limpandoErros(this.confirmSenha);

    this.enviarFormulario();
  }

  // ****************************************************

  //Envio do formulário
  enviarFormulario() {

    this.formularioCadastro.submit()
  }

  // ******************************************************

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
  // ************************************************************
}
