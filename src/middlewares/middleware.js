module.exports.meuMiddleware = (req, res, next) => {
    //Sua lógica
    res.locals.varLocal = 'exemplo valor de teste'
    next()
}


module.exports.checkCsrfError = (err, req, res, next) => {
    console.log(err)
    if (err && err.code === 'EBADCSRFTOKEN') {
    return res.send('Kkkkkk, tenta outra vez seu safadinho');
    // Esse não usamos next(), para ele não passar para a próxima função
}
};


module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken() // Esse token está disponivel em todas as views

    next()
}