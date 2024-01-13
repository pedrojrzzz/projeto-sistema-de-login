const mongoose = require('mongoose')

const homeSchema = (new mongoose.Schema({
    titulo: {type: String, required: true },
    descricao: String
})) //Modelagem dos nossos dados

const HomeModel = mongoose.model('Home', homeSchema)

module.exports = HomeModel