'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const disponibilidadSchema = Schema (
    {
        idEspecialista: {
            type: Schema.ObjectId, 
            ref: "especialista"
        },
        fecha: { 
            type: Date
        },
        hora: {
            type: String
        },
        disponible: {
            type: Boolean
        }
    }
)

module.exports = mongoose.model('disponibilidad', disponibilidadSchema);