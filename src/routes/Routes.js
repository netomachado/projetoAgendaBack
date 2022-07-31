const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const enderecoController = require('../controllers/enderecoController');

router.post('/login', authController.postLogin);

router.post('/usuario', userController.createUser);
router.get('/usuario/:id', userController.getUser);
router.delete('/usuario/:id', userController.deleteUser);
router.put('/usuario/:id', userController.updateUser);

router.post('/enderecos/:id', enderecoController.createAddress);
router.get('/enderecos/:id', enderecoController.getAddress);
router.delete('/enderecos/:id', enderecoController.deleteAddress);
router.put('/enderecos/:id', enderecoController.updateAddress);

module.exports = {
  routes: router
}