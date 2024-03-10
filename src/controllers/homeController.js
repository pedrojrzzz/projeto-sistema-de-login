let visitCount = 0
const rendPaginaInicial = (req, res) => {
    visitCount++
    req.session.visitCount = visitCount
    res.render('index')
}


module.exports.rendPaginaInicial = rendPaginaInicial


