'use strict'

var Especialista = require('../models/especialista.js');

function guardar(req, res){
    let especialista = Especialista()
    especialista.nombre = req.body.nombre
    especialista.especialidad = req.body.idEspecialidad
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

function buscarporEspecialidad(req, res){
    let idEspecialidad = req.params.idEspecialidad
    Especialista.find({"especialidad": idEspecialidad})
    .populate('especialidad')
    .exec((err, especialista)=> {
        if (err){
            
            return res.status(500).send({msg: 'Error al realizar la peticion' + err})
        }
        if (!especialista){
            return res.status(404).send({msg: 'error, el especialista existe'})
        }
        res.status(200).send({especialista})
    })
}

module.exports = {
    guardar,
    listar,
    buscarporEspecialidad
}