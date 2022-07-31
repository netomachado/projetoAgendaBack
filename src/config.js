'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, JWT_KEY, SQL_CONNECTIONLIMIT} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    JWT_KEY: JWT_KEY,
    sql: {
        connectionLimit: SQL_CONNECTIONLIMIT,
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        },
        dialectOptions: {
            options: { "requestTimeout": 300000 }
          },
    }
};