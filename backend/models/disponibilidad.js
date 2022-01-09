'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const disponibilidadSchema = Schema (
    {
        fecha: Date,
        hora: String,
        disponible: Boolean,
        especialista: { type: Schema.ObjectId, ref: "especialista", required: true}
    }
)

module.exports = mongoose.model('disponibilidad', disponibilidadSchema)