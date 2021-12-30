'use strict'
var Agendamiento = require('../models/agendamiento.js')

const agendamiento = require('../models/agendamiento.js')

function guardar(req, res){
    let agendamiento = Agendamiento()
    agendamiento.idEspecialista = req.body.idEspecialista
    agendamiento.rut_cliente = req.body.rut_cliente
    agendamiento.idDisponibilidad = req.body.idDisponibilidad
    agendamiento.save((err, agendamientostore) => {
        if (err){
            res.status(500).send(`Error base de datos > ${err}`)
        }
        res.status(200).send({agendamiento: agendamientostore})
    })    
}


function buscarporID(req, res){
    let idAgendamiento = req.params.idAgendamiento
    Agendamiento.findById(idAgendamiento, (err, agendamiento) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar la peticion'})
        }
        if (!agendamiento){
            return res.status(404).send({msg: 'error, el agendamiento no existe'})
        }
        res.status(200).send({agendamiento})
    })
}

function todos(req, res){
    Agendamiento.find({}, (err, agendamiento) => {
        if (err){
            return res.status(500).send({msg: 'Error al realizar la peticion'})
        }
        if (!agendamiento){
            return res.status(404).send({msg: 'error, el agendamiento no existe'})
        }
        res.status(200).send({agendamiento})
    })
}

module.exports = {
    guardar,
    buscarporID,
    todos
};