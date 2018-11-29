const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const User = require('./../models/user')

app.get('/user', (req, res) => {
    User.find({}, (err, data) => {
        res.json(data)
    })

})

app.post('/user', (req, res) => {
    let body = req.body
    body.contrasena = bcrypt.hashSync(body.contrasena, 10)
    let usuario = new User(body)
    usuario.save((err, usuarioDB) => {
        if (err) {
           return res.status(500).json({
               err
           })  
        }
        res.json({
            ok: true, 
            usuarioDB
        })
    })
})

module.exports = app
