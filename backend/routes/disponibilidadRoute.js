'use strict'

var express = require('express');
var disponibilidadController = require('../controllers/disponibilidadController');

var api = express.Router();

api.post('/disponibilidades', disponibilidadController.guardar);
api.get('/disponibilidades', disponibilidadController.todos);
api.get('/disponibilidades/:idEspecialista', disponibilidadController.buscarporEspecialista)

module.exports = api;