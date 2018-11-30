const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const perimitirCrossDomain = require('./middleware/allowedCrossDomain')
const app = express()
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middleware
app.use(perimitirCrossDomain)

app.use('/api/', require('./routes/user'))
app.use('/api/', require('./routes/login'))

app.get('', (req, res) => {
    res.send('Res Api is running...')
})


mongoose.connect('mongodb://hack2018:hack2018@ds121814.mlab.com:21814/hackathonic-db', (err, res) => {
    if (err) throw err
    console.log('COMMON DB ONLINE...')
})

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Listening on port ${ port }`)
})
