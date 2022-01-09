'use strict'
var Disponibilidad = require('../models/disponibilidad.js')


function guardar(req, res){
    let disponibilidad = Disponibilidad()
    //disponibilidad.nombre = req.body.nombre
    disponibilidad.especialista = req.body.idEspecialista
    disponibilidad.fecha = req.body.fecha
    disponibilidad.hora = req.body.hora
    disponibilidad.disponible = req.body.disponible
    disponibilidad.save((err, disponibilidadstore) => {
        if (err){
            res.status(500).send(`Error base de datos > ${err}`)
        }
        res.status(200).send({disponibilidad: disponibilidadstore})
    })    
}

function buscarporID(req, res){
    let idDisponibilidad = req.params.idDisponibilidad
    Disponibilidad.findById(idDisponibilidad, (err, disponibilidad) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar la peticion'})
        }
        if (!disponibilidad){
            return res.status(404).send({msg: 'error, la disponibilidad no existe'})
        }
        res.status(200).send({disponibilidad})
    })
}


function todos(req, res){
    Disponibilidad.find()
    .populate('disponibilidades').exec((err, disponibilidadconespecialista) => {
        res.status(200).send({disponibilidadconespecialista})
    })
}

function buscarporEspecialista(req, res){
    let idEspecialista = req.params.idEspecialista
    Disponibilidad.find({"especialista": idEspecialista})
    .populate('especialista')
    .exec((err, disponibilidad) => {
        if (err){
            return res.status(500).send({msg: "Error al realizar la consulta"})
        }
        if (!disponibilidad){
            return res.status(404).send({msg: "error, la disponibilidad no existe"})
        }
        res.status(200).send({disponibilidad})
        
    })
}

module.exports = {
    guardar,
    buscarporID,
    todos,
    buscarporEspecialista
};