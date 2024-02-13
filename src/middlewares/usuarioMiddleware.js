// LIBS
const jwt = require('jsonwebtoken')
// ********************************
module.exports.userMiddleware = (req,res,next) => {
    res.locals.errors = req.flash('error')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    res.locals.userInfo = jwt.decode(req.session.user, process.env.jwtSecret)
    next()
}