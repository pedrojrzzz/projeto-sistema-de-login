const { Collection } = require('mongoose')
const HomeModel = require('../models/homeModel')

/* HomeModel.find()
    .then(dados => console.log(dados))
    .catch(error => console.log(error)) */


const rendPaginaInicial = (req, res) => {
    res.render('index.ejs')
}





module.exports.rendPaginaInicial = rendPaginaInicial


