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
    telefono: {
        type: String,
        required: [true, 'El correo es requerido']
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    rol: {
        type: String,
        enum: ['CLIENTE', 'TRABAJADOR'],
        default: 'TRABAJADOR'
    },
    edad: {
        type: String,
        required: [true, 'La edad es requerida']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    pais: {
        type: String,
        uppercase: true,
        required: [true, 'El pais es requerido']
    },
    departamento: {
        type: String,
        uppercase: true,
        required: [true, 'El departamento es requerido']
    },
    municipio: {
        type: String,
        uppercase: true,
        required: [true, 'El municipio']
    },
    sexo: {
        type: String,
        enum: ['MASCULINO', 'FEMENINO'],
        default: 'TRABAJADOR'
    },
    cedula: {
        type: String,
        unique: true,
        required: [true, 'La cedula es requerida']
    },
    fotourl: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/hacknic2018.appspot.com/o/img%2Fuser.png?alt=media&token=a9d59d0f-4084-4437-9354-ac81196391f9'
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
