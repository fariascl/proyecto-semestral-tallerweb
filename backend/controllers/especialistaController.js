'use strict'

var Especialista = require('../models/especialista.js');

function guardar(req, res){
    let especialista = Especialista()
    especialista.nombre = req.body.nombre
    especialista.especialidad = req.body.idEspecialista
    especialista.save((err, especialistastore) => {
        res.status(200).send({especialistaInsertado: especialistastore})
    })
}

function listar(req, res){
    Especialista.find()
    .populate('especialidad').exec((err, especialistaconespecialidad) => {
        res.status(200).send({especialistaconespecialidad})
    })
}

module.exports = {
    guardar,
    listar
}