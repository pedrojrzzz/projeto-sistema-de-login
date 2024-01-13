require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')


const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.connectionString)
    .then(data => {
        console.log('Banco de dados conectado!')
        app.emit('pronto')
    })
    .catch(error => {
        console.log('error: ' + error)
    })

const session = require('express-session')
const MongoStore = require('connect-mongo');
const { MongoClient } = require('mongodb')
const flash = require('connect-flash')


app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'Accept', 'Origin', 'Authorization', 'X-CSRF-TOKEN'],
    optionsSuccessStatus: 200
}))

app.use(cookieParser())

app.use(session({
    store: MongoStore.create({
        client: new MongoClient(process.env.connectionString),
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }),
    secret: 'hello',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 27 * 7,
        httpOnly: true,
        secure: false
    }
})
)

app.disable('x-powered-by')
app.use(flash())

const route = require('./routes')
const path = require('path')
const helmet = require ('helmet')
const csrf = require('csurf')
const meusMiddlewares = require('./src/middlewares/middleware')
const { ModuleFilenameHelpers } = require('webpack')
const { METHODS } = require('http')

app.use(helmet())
app.use(express.static(path.resolve(__dirname, 'public')))


app.use(csrf({cookie: true}))
app.use(meusMiddlewares.checkCsrfError)
app.use(meusMiddlewares.csrfMiddleware)
app.use(meusMiddlewares.meuMiddleware)
app.use(route) // para o express, usar suas rotas

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.set('views', './src/views')// passando nome da pasta, e o caminho
app.set('view engine', 'ejs') // Dizendo ao express que engine ele vai usar

app.on('pronto', () => {
    const porta = 3000

    app.listen(porta, () => {
        console.log(`Servidor rodando no localHost ${porta}`)
    });
})


