import 'core-js/stable'
import 'regenerator-runtime/runtime';
import './assets/css/style.css'
import { cadastroValidator } from './modules/cadastroValidator';


// <PÁGINA REGISTRO>
// Validando formulário de cadastro

const submitCadastro = document.querySelector('.submitCadastro')


submitCadastro.addEventListener('click', e => {
    const instanciaCadastroValidator = new cadastroValidator()
    instanciaCadastroValidator.limpandoDados()
})


const divErro = document.querySelector('.divErro')

function sumirDivErro() {
    divErro.remove()
}

setTimeout(sumirDivErro, 3000)

// **************************************************
// </PAGINA REGISTRO>