const express = require('express')
const app = express()
const ClientProduct = require('../models//clientProduct.js')

app.get('/client-product', (req, res) => {
    ClientProduct.find({}, (err, data) => {
        res.json(data)
    })

})

app.post('/client-product', (req, res) => {
    let body = req.body
    let clientProduct = new ClientProduct(body)
    clientProduct.save((err, clientProductDB) => {
        if (err) {
           return res.status(500).json({
               err
           })  
        }
        res.json({
            ok: true, 
            clientProductDB
        })
    })
})

module.exports = app
