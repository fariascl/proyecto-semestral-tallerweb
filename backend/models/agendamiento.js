'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const agendamientoSchema = Schema (
    {
        idEspecialista: {
            type: Schema.ObjectId, 
            ref: "especialista"
        },
        rut_cliente: { 
            type: String
        },
        idDisponibilidad: {
            type: Schema.ObjectId, 
            ref: "disponibilidad"
        }
    }
)

module.exports = mongoose.model('agendamiento', agendamientoSchema);