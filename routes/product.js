const express = require('express')
const app = express()
const Product = require('../models/product')

app.get('/product', (req, res) => {
    Product.find({}, (err, data) => {
        res.json(data)
    })

})
app.get('/product/product-by-userid/:userId', (req, res) => {
    const userId = req.params.userId
    Product.find({ usuario: userId }, (err, data) => {
        res.json(data)
    })

})

app.post('/product', (req, res) => {
    let body = req.body
    let product = new Product(body)
    product.save((err, productDB) => {
        if (err) {
           return res.status(500).json({
               err
           })  
        }
        res.json({
            ok: true, 
            productDB
        })
    })
})

module.exports = app
