'use strict'
var Especialidad = require('../models/especialidad.js')

const especialidad = require('../models/especialidad.js')

function guardar(req, res){
    let especialidad = Especialidad()
    especialidad.nombre_especialidad = req.body.nombre_especialidad
    especialidad.save((err, especialidadstore) => {
        if (err){
            res.status(500).send(`Error base de datos > ${err}`)
        }
        res.status(200).send({especialidad: especialidadstore})
    })    
}

function buscarporID(req, res){
    let idespecialidad = req.params.idespecialidad
    Especialidad.findById(idespecialidad, (err, especialidad) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar la peticion'})
        }
        if (!especialidad){
            return res.status(404).send({msg: 'error, la especialidad no existe'})
        }
        res.status(200).send({especialidad})
    })
}

function todos(req, res){
    Especialidad.find({}, (err, especialidad) => {
        if (err){
            return res.status(500).send({msg: 'Error al realizar la peticion'})
        }
        if (!especialidad){
            return res.status(404).send({msg: 'error, la especialidad no existe'})
        }
        res.status(200).send({especialidad})
    })
}

module.exports = {
    guardar,
    buscarporID,
    todos
};