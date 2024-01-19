module.exports.userMiddleware = (req,res,next) => {
    res.locals.errors = req.flash('error')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next()
}