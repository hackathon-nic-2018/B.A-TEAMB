const express = require('express')
const app = express()
const TrabajadorServicio = require('../models/trabajadorServicio')

app.get('/trabajador-servicio', (req, res) => {
    TrabajadorServicio.find({}, (err, data) => {
        res.json(data)
    })

})

app.post('/trabajador-servicio', (req, res) => {
    let body = req.body
    let trabajadorServicio = new TrabajadorServicio(body)
    trabajadorServicio.save((err, trabajadorServicioDB) => {
        if (err) {
           return res.status(500).json({
               err
           })  
        }
        res.json({
            ok: true, 
            trabajadorServicioDB
        })
    })
})

module.exports = app