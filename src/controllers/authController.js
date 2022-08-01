'use strict';
const crypto = require('crypto');
const moment = require('moment')
const jwt = require('jsonwebtoken');
const config = require("../config");
const loginData = require('../data/login');



const postLogin = async (req, res, next) => {
    try {
        const data = req.body;
        const senha = crypto.createHash('sha256').update(req.body.Senha).digest('hex');
        const Hash = senha;
        const user = await loginData.getByLoginUserAcesso(data, senha);

        if (user.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }

        if (user[0].senha === Hash ) {

            const token = jwt.sign({
                IdUsuario: user[0].IdUsuario,
                Nome: user[0].nome,
                Email: user[0].email,
            },
                config.JWT_KEY,
                {
                    expiresIn: "12h"
                });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                content:
                {
                    user: {
                        IdUsuario: user[0].IdUsuario,
                        Nome: user[0].nome,
                        Email: user[0].email,
                    },
                    token: token
                }
            });
        } else {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    postLogin
}