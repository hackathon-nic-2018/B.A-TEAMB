const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientProductSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    producto: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ClientProduct', clientProductSchema)
