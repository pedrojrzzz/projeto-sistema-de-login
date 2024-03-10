// Banco de dados
const userModel= require('../models/cadastroModel').usersModel
// *****************

//Libs
// *****************

const rendAdministrativePanel = async function(req, res) {
    const validationUser = await userModel.find({
        email: res.locals.userInfo.data.email
    })

    if (!validationUser[0].typeAccount == 'admin') { // Caso não seja um admin, não deixe ele acessar a rota
        console.log('User não permitido nessa rota')
        res.render('404')
        return
    }

    try {
    const registeredUsers = await userModel.find({})
    const qtdUsuarios = registeredUsers.length
    
    req.session.qtdRegisteredUsers = qtdUsuarios
    
    res.render('administrativePanel')
} catch(error) {
    console.log(`Erro no adminController: ${error}`)
    res.render('404')
    return
}
}

const rendAdminPanelUser = async function (req, res) {
    const validationUser = await userModel.find({
        email: res.locals.userInfo.data.email
    })

    if (!validationUser[0].typeAccount == 'admin') { // Caso não seja um admin, não deixe ele acessar a rota
        console.log('User não permitido nessa rota')
        res.render('404')
        return
    }
    
    try {
        const registeredUsers = await userModel.find({})
        req.session.usersData = registeredUsers
        res.render('admPanelUser')
    } catch (error) {
        console.log(error)
        res.render('404')
        return
    }
}



module.exports.rendAdministrativePanel = rendAdministrativePanel
module.exports.rendAdminPanelUser = rendAdminPanelUser