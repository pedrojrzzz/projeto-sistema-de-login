const rendPagAlterarDados = async function (req, res)  {
    if (res.locals.userInfo) {
        res.render('alterarDados')
    } else {
        res.render('404')
    }
}


module.exports.rendPagAlterarDados = rendPagAlterarDados