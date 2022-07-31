'use strict';
const moment = require('moment');
const addressData = require('../data/address');

const createAddress = async (req, res) => {
  try {
    const dados = req.body
    const IdUsuario = req.params.id

 
    const cadastraEndereco = await addressData.cadastraEndereco(dados, IdUsuario)

    if (cadastraEndereco.length < 1) {
      return res.status(404).send({
        message: 'Falha ao cadastrar endereço'
      });
    }

    return res.status(200).send({
      data: cadastraEndereco
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const getAddress = async (req, res) => {
  try {
    const IdUsuario = req.params

    const getEndereco = await addressData.getEndereco(IdUsuario)

    if (getEndereco.length < 1) {
      return res.status(404).send({
        message: 'Nao ha nenhum endereço com esse id'
      });
    }

    return res.status(200).send({
      data: getEndereco.map(endereco => {
        return {
          IdEndereco: endereco.IdEndereco,
          Rua: endereco.Rua,
          Num: endereco.Num,
          Bairro: endereco.Bairro,
          Cep: endereco.Cep,
          Cidade: endereco.Cidade,
          Uf: endereco.Uf,
          DataCadastrado: moment(endereco.DataCadastrado).format('YYYY-MM-DD HH:mm:ss')
        }
        })
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const deleteAddress = async (req, res) => {
  try {
    const IdEndereco = req.params.id

    const deleteEndereco = await addressData.deleteEndereco(IdEndereco)

    const EnderecoPorId = await addressData.getEnderecoPorId(IdEndereco)
   
    if (EnderecoPorId.length < 1) {
      return res.status(200).send({
            message: "Endereco inativado com sucesso.",
          });
        }
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const updateAddress = async (req, res) => {
  try {
    const dados = req.body
    const IdEndereco = req.params.id

 
    const updateEndereco = await addressData.updateEndereco(dados, IdEndereco)

    if(updateEndereco.length > 0) {
      return res.status(400).send({
        message: 'Falha ao atualizar endereço'
      });
    }
    
    return res.status(200).send({
      data: updateEndereco
    });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}


module.exports = {
  createAddress,
  getAddress,
  deleteAddress,
  updateAddress,
}