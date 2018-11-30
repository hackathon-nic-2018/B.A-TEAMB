const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const Servicio = require('./../models/servicio')

app.get('/service', (req, res) => {
    Servicio.find({}, (err, data) => {
        res.json(data)
    })

})

app.post('/service', (req, res) => {
    let body = req.body
    let servicio = new Servicio(body)
    servicio.save((err, servicioDB) => {
        if (err) {
           return res.status(500).json({
               err
           })  
        }
        res.json({
            ok: true, 
            servicioDB
        })
    })
})

module.exports = app
