'use strict'

var express = require('express');
var especialidadController = require('../controllers/especialidadController');
const especialidad = require('../models/especialidad');

var api = express.Router();

api.post('/especialidades', especialidadController.guardar);
api.get('/especialidades', especialidadController.todos);
api.get('/especialidad/:id', especialidadController.buscarporID);

module.exports = api;