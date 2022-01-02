'use strict'

var express = require('express');
var especialistaController = require('../controllers/especialistaController');

var api = express.Router();

api.post('/especialistas', especialistaController.guardar);
api.get('/especialistas', especialistaController.listar);
api.get('/especialistas/:idEspecialidad', especialistaController.buscarporEspecialidad)

module.exports = api;