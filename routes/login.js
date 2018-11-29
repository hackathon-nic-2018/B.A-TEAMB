const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.post('/login', (req, res) => {
    console.log('login')
    let body = req.body
    const conn = req.connection
    conn.user.findOne({ correo: body.correo }, (err, userDB) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if(!userDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: '(Usuario) o Contraseña incorrectos'
                }
            })
        }

        if(!bcrypt.compareSync(body.contrasena, userDB.contrasena)){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (Contraseña) incorrectos'
                }
            })
        }

        let token = jwt.sign({user: userDB}, 'seed-desa', { expiresIn: 60 * 60 * 24 *30 })

        res.json({
            ok: true,
            user: userDB,
            token
        })
        
    })

})

module.exports = app
