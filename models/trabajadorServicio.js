const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trabajadorServicioSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    servicio: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    experiencia: {
        type: String,
        uppercase: true,
        enum: ['1 AÑO', '2 AÑOS', '3 AÑOS', 'MAS DE 3 AÑOS'],
        default: '1 AÑO'
    }

})

module.exports = mongoose.model('TrabajadorServicio', trabajadorServicioSchema)
