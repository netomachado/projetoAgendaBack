const jwt = require('jsonwebtoken');
const config = require("../config");

let token = []
let decode = []
let Nome = []
let IdUsuario = []
let Email = []

exports.required = (req, res, next) => {
    try {
        token = req.headers.authorization.split(' ')[1];
        decode = jwt.verify(token, config.JWT_KEY);
        req.user = decode;
        Nome = decode.Nome
        IdUsuario = decode.IdUsuario
        Email = decode.Email

        
        res.locals.Nome = Nome
        res.locals.IdUsuario = IdUsuario
        res.locals.Email = Email
        

        next();

    } catch (error) {
        res.status(401).send({ message: 'Sua sessão expirou, faça login novamente.' })
    }
}

exports.optional = (req, res, next) => {
    try {
        token = req.headers.authorization.split(' ')[1];
        decode = jwt.verify(token, config.JWT_KEY);
        req.user = decode;

        Nome = decode.Nome
        IdUsuario = decode.IdUsuario
        Email = decode.Email


        res.locals.Nome = Nome
        res.locals.IdUsuario = IdUsuario
        res.locals.Email = Email

        next();

    } catch (error) {
            res.status(401).send({ message: 'Sua sessão expirou, faça login novamente.' })
    }

}