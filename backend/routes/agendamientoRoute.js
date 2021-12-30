'use strict'

var express = require('express');
var agendamientoController = require('../controllers/agendamientoController');

var api = express.Router();

api.post('/agendamientos', agendamientoController.guardar);
api.get('/agendamientos', agendamientoController.todos);

module.exports = api;