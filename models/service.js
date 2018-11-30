const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const servicioSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        uppercase: true,
        required: [true, 'El nombre es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    }
})

servicioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único'})


module.exports = mongoose.model('Service', servicioSchema)
