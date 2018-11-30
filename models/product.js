const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const productSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        uppercase: true,
        required: [true, 'El nombre es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    fotoUrl: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/hacknic2018.appspot.com/o/img%2Fdesign.png?alt=media&token=84ed97fa-1cae-44f9-8e8d-4f3aeca6b5bc'
    },
    precio: {
        type: Schema.Types.Decimal128,
        required: [true, 'El precio es requerido']
    },
    usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

productSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único'})


module.exports = mongoose.model('Product', productSchema)
