const express = require('express')
const app = express()
const ClientProduct = require('../models/clientProduct.js')

app.get('/client-product', (req, res) => {
    ClientProduct.find({}, (err, data) => {
        res.json(data)
    })

})
app.get('/client-product/client-product-by-product/:idProduct', (req, res) => {
    const idProduct = req.params.idProduct
    ClientProduct.find({ producto: idProduct }).
    populate('usuario').
    exec(function (err, clientProductDB) {
        if (err) return handleError(err)
        res.json({
            ok: true, 
            clientProductDB
        })
    })
})
app.get('/client-product/product-by-client/:idClient', (req, res) => {
    const idClient = req.params.idClient
    ClientProduct.find({ usuario: idClient }).
    populate('producto').
    exec(function (err, clientProductDB) {
        if (err) return handleError(err)
        res.json({
            ok: true, 
            clientProductDB
        })
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
