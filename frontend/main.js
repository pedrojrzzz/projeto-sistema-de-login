import 'core-js/stable'
import 'regenerator-runtime/runtime';
import './assets/css/style.css'
import {modalCadastro} from './modules/dialogCadastro'
import {modalLogin} from './modules/dialogLogin'
import { cadastroValidator } from './modules/cadastroValidator';



// Abrir formulário de cadastro caso houver clique
// Fechar formulário de cadastro
const criarContaButton = document.querySelector('.criarContaButton')
const fecharFormCadastro = document.querySelector('.fecharDialogCadastro')

const instanciaModalCadastro = new modalCadastro()

criarContaButton.addEventListener('click', e=> {
    instanciaModalCadastro.abrirFormCadastro()
    e.preventDefault()
})

fecharFormCadastro.addEventListener('click', e => {
    instanciaModalCadastro.fecharFormCadastro()
})
// ************************************************


// Abrir formulário de login caso houver clique
// Fechar formulário de login

const entrarButton = document.querySelector('.entrarButton')
const fecharFormLogin = document.querySelector('.fecharDialogLogin')

const instanciaModalLogin = new modalLogin()

entrarButton.addEventListener('click', e => {
    instanciaModalLogin.abrirFormLogin()
    e.preventDefault()
})

fecharFormLogin.addEventListener('click', e => {
    instanciaModalLogin.fecharFormLogin()
})

// **************************************************


// Validando formulário de cadastro

const submitCadastro = document.querySelector('.submitCadastro')


submitCadastro.addEventListener('click', e => {
    const instanciaCadastroValidator = new cadastroValidator()
    instanciaCadastroValidator.limpandoDados()
})


// **************************************************