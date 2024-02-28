// LIBS
const jwt = require('jsonwebtoken')
// ********************************
module.exports.userMiddleware = (req,res,next) => {
    res.locals.errors = req.flash('error')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    res.locals.updateUserInfo =  function() { // Método para atualizar cookie
        res.locals.userInfo = jwt.decode(req.session.user, process.env.jwtSecret)
    }
    res.locals.updateUserInfo2 = function(user) {
        console.log('Estou dentro do updateUserInfo2' )
        res.locals.userInfo = jwt.decode(user, process.env.jwtSecret)
        console.log(res.locals.userInfo)
        console.log('*********************')
    }
    res.locals.userInfo = jwt.decode(req.session.user, process.env.jwtSecret)
    res.locals.confirmTokens = req.session.confirmTokens
    res.locals.userInfo2 = ''
    next()
}