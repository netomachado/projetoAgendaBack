'use strict';
const utils = require('../utils');
const config = require("../../config");
const sql = require('mssql');
const moment = require('moment');
const date = Date.now();
const format = "YYYY-MM-DD HH:mm:ss";

const cadastraUsuario = async (data ) => {
  const DataCadastrado = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('user');
      const insert = await pool.request()

          .input('Nome', data.nome)
          .input('Email', data.email)
          .input('Senha', data.Password)
          .input('DataNascimento', data.date)
          .input('Cpf', data.cpf)
          .input('Rg', data.rg)
          .input('Telefone', data.fone)
          .input('DataCadastrado', DataCadastrado)

          .query(sqlQueries.cadastraUsuario)
      return insert.recordset;
  } catch (error) {
      return error.message;
  }
}

const getUsuario = async (IdUsuario ) => {

  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('user');
      const info = await pool.request()

          .input('IdUsuario', IdUsuario)
         
          .query(sqlQueries.getUsuario)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}

const deleteUsuario = async (IdUsuario ) => {

  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('user');
      const info = await pool.request()

          .input('IdUsuario', IdUsuario)
         
          .query(sqlQueries.delUsuario)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}

const updateUsuario = async (data ) => {
  try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('user');
      const info = await pool.request()

          .input('Nome', data.nome)
          .input('DataNascimento', data.date)
          .input('Cpf', data.cpf)
          .input('Rg', data.rg)
          .input('Telefone', data.fone)

          .query(sqlQueries.UpdateUsuario)
      return info.recordset;
  } catch (error) {
      return error.message;
  }
}


module.exports= {
  cadastraUsuario,
  getUsuario,
  deleteUsuario,
  updateUsuario
}