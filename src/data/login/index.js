'use strict';
const utils = require('../utils');
const config = require("../../config");
const sql = require('mssql');


const getByLoginUserAcesso = async (data, senha) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login');
        const loginUserAcesso = await pool.request()
                    .input('email', sql.VarChar, data.email)
                    .input('senha', sql.VarChar, senha)
                    .query(sqlQueries.loginUserAcesso);
        return loginUserAcesso.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
  getByLoginUserAcesso,
}