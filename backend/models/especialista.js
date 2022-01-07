'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const especialistaSchema = Schema (
    {
        nombre: String,
        especialidad: [{ type: Schema.ObjectId, ref: "especialidades"}]
    }
)

module.exports = mongoose.model('especialistas', especialistaSchema)