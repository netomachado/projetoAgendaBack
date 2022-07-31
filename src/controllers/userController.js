'use strict';
const moment = require('moment');
const userData = require('../data/user');

const createUser = async (req, res) => {
  try {
    const dados = req.body
    data.password = crypto.createHash('sha256').update(req.body.password).digest('hex')
 
    const cadastraUser = await userData.cadastraUsuario(dados)

    if (cadastraUser.length < 1) {
      return res.status(404).send({
        message: 'Falha ao cadastrar usuario'
      });
    }

    return res.status(200).send({
      data: cadastraUser
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const getUser = async (req, res) => {
  try {
    const IdUsuario = req.params
 
    const getUsuario = await userData.getUsuario(IdUsuario)

    if (getUsuario.length < 1) {
      return res.status(404).send({
        message: 'Nao ha nenhum usuario com esse id'
      });
    }

    return res.status(200).send({
      data: getUsuario
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const deleteUser = async (req, res) => {
  try {
    const IdUsuario = req.params

    const deleteUsuario = await userData.deleteUsuario(IdUsuario)

    const getUsuario = await userData.getUsuario(IdUsuario)
   
    if (getUsuario.length < 1) {
      return res.status(200).send({
            message: "Cliente inativado com sucesso.",
          });
        }
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const dados = req.body
    const IdUsuario = req.params
    const updateUser = await userData.updateUsuario(dados, IdUsuario)

    if (updateUser.length > 0) {
      return res.status(400).send({
        message: 'Erro ao atualizar Usuario'
      });
    }

    return res.status(200).send({
      data: updateUser
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}



module.exports = {
  createUser,
  getUser,
  deleteUser,
  updateUser
}
