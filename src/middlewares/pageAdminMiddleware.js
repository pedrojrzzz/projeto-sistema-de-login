module.exports.pageAdminMiddleware = (req, res, next) => {
    res.locals.qtdRegisteredUsers = req.session.qtdRegisteredUsers
    res.locals.visitCount = req.session.visitCount
    res.locals.usersData = req.session.usersData
    next()
}