'use strict';
const utils = require('../utils');
const config = require("../../config");
const sql = require('mssql');
const moment = require('moment');
const date = Date.now();
const format = "YYYY-MM-DD HH:mm:ss";

const cadastraEndereco = async (data, IdUsuario ) => {
  const DataCadastrado = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('address');
      const insert = await pool.request()
          .input('IdUsuario', IdUsuario)
          .input('Rua', data.rua)
          .input('Num', data.num)
          .input('Bairro', data.bairro)
          .input('Cep', data.cep)
          .input('Cidade', data.cidade)
          .input('Uf', data.uf)
          .input('DataCadastrado', DataCadastrado)

          .query(sqlQueries.cadastraEnd)
      return insert.recordset;
  } catch (error) {
      return error.message;
  }
}

const getEndereco = async (IdUsuario ) => {

  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('address');
      const info = await pool.request()

          .input('IdUsuario', IdUsuario)
         
          .query(sqlQueries.getEnderecos)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}

const deleteEndereco = async (IdEndereco ) => {

  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('address');
      const info = await pool.request()

          .input('IdEndereco', IdEndereco)
         
          .query(sqlQueries.delEndereco)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}

const getEnderecoPorId = async (IdEndereco ) => {

  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('address');
      const info = await pool.request()

          .input('IdEndereco', IdEndereco)
         
          .query(sqlQueries.getEnderecoPorId)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}

const updateEndereco = async (data, IdEndereco ) => {
  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('address');
      const info = await pool.request()
          .input('IdEndereco', IdEndereco)
          .input('Rua', data.rua)
          .input('Num', data.num)
          .input('Bairro', data.bairro)
          .input('Cep', data.cep)
          .input('Cidade', data.cidade)
          .input('Uf', data.uf)

          .query(sqlQueries.updateEnd)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}


module.exports = {
  cadastraEndereco,
  getEndereco,
  deleteEndereco,
  getEnderecoPorId,
  updateEndereco

}