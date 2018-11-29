const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es requerido']
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    estado: {
         type: Boolean,
         default: true
    }
})

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único'})

usuarioSchema.methods.toJSON = function() {
    let usuario = this
    let usuarioObject = usuario._doc
    delete usuarioObject.contrasena
    return usuarioObject
}

module.exports = mongoose.model('User', usuarioSchema)
