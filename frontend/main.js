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
const divSuccess = document.querySelector('.divSuccess')

function sumirErroOuSuccess() {
    if (divSuccess) divSuccess.remove()
    if (divErro) divErro.remove()
}

setTimeout(sumirErroOuSuccess, 15000)

// **************************************************
// </PAGINA REGISTRO>