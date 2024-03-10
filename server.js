// MINHAS LIBS UTILIZADAS
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const { MongoClient } = require('mongodb')
const flash = require('connect-flash')
const route = require('./routes')
const path = require('path')
const helmet = require ('helmet')
const csrf = require('csurf')
// *************************************************

// CONEXÃO COM O BANCO DE DADOS
mongoose.connect(process.env.connectionString)
    .then(data => {
        console.log('Banco de dados conectado!')
        app.emit('pronto')
    })
    .catch(error => {
        console.log('error: ' + error)
    })
// *************************************************

// CONFIGURAÇÕES DO SERVIDOR
app.disable('x-powered-by') // Desativa o cabeçalho que mostra que eu estou usando express, evitando dar informações para um atacante

app.set('views', './src/views')// passando nome da pasta, e o caminho das views
app.set('view engine', 'ejs') // Dizendo ao express que engine ele vai usar
//***************************************************/

// MEUS MIDDLEWARES
// OBS: Não mova os middlewares de posição, pode causar erros na funcionalidade da aplicação

app.use(cookieParser()) //É um middleware utilizado para analisar os cookies enviados pelo navegador do cliente junto com as solicitações HTTP.
                        //Ele processa os cookies e os torna acessíveis no objeto req.cookies.


app.use(session({                                         //configura o middleware de sessão (session)
    store: MongoStore.create({                            // é usado para criar uma instância do MongoStore e é configurado com uma instância do cliente MongoDB 
    client: new MongoClient(process.env.connectionString),// (MongoClient) usando a string de conexão fornecida no ambiente (process.env.connectionString).
    mongoOptions: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  }
                            }),
    secret: 'hello',                 //secret: Define uma chave secreta usada para assinar os cookies de sessão, é usada para garantir a integridade dos dados da sessão.
    resave: false,                  // resave: Configurado como false. Isso significa que a sessão não será regravada no armazenamento se não houver alterações durante uma solicitação.
    saveUninitialized: false,       //saveUninitialized: Isso significa que a sessão não será salva para armazenamento se não houver dados na sessão. Isso ajuda a economizar espaço de armazenamento quando a sessão não tem dados.                        
    cookie: {              // cookie (configurações do cookie de sessão):
              maxAge: 1000 * 60 * 60 * 27 * 7,  // maxAge: Define a vida útil máxima do cookie de sessão em milissegundos. Neste caso, o valor é configurado para 7 dias.
              httpOnly: true,        // httpOnly: Configurado como true. Isso indica que o cookie só pode ser acessado por meio do protocolo HTTP e não pode ser manipulado por scripts do lado do cliente, o que ajuda a mitigar ataques XSS (Cross-Site Scripting).
              secure: false     // secure: Configurado como false. Isso indica que o cookie só será enviado por meio de conexões HTTP, não HTTPS. Em um ambiente de produção, você normalmente configuraria isso como true se estiver usando HTTPS.
            }
                })
        )


app.use(flash())  // Middleware para implementar flash messages, útil para mostrar mensagens de success e de errros

const { ModuleFilenameHelpers } = require('webpack')  // oduleFilenameHelpers é uma utilidade interna do Webpack que fornece métodos para ajudar na manipulação de nomes de arquivos de módulos.
const { METHODS } = require('http')  // METHODS é um array que contém todos os métodos HTTP padrão (como GET, POST, PUT, DELETE, etc.)

app.use(helmet())        // Helmet é usado para definir algumas congifurações de segurança da aplicação
app.use(express.static(path.resolve(__dirname, 'public'))) // Definindo meus arquivos estáticos
app.use(express.urlencoded({extended: true}))              // Usado para acessar o req.body de envios de formulário

const meusMiddlewares = require('./src/middlewares/middleware') // Importando meus middlewares globais
app.use(csrf({cookie: true}))
app.use(meusMiddlewares.csrfMiddleware)
app.use(meusMiddlewares.checkCsrfError)
const usuarioMiddleware = require('./src/middlewares/usuarioMiddleware')
app.use(usuarioMiddleware.userMiddleware)
const pageAdminMiddleware = require('./src/middlewares/pageAdminMiddleware')
app.use(pageAdminMiddleware.pageAdminMiddleware)



app.use(route) // para o express, usar suas rotas
//**************************************************/

app.on('pronto', () => {

    app.listen(process.env.port, () => {
        console.log(`Servidor rodando no localHost ${process.env.port}`)
    });
})
