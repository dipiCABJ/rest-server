const express = require('express');
const User = require('../MODELS/user');
const bcrypt = require('bcrypt');

const app = express();


app.get('/usuario', function(req, res) {
    res.json('GET Usuario LOCAL!!')
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usr: userDB
        });
    })
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id,
        nombre: 'Oriana',
        apellido: 'Dipietro'
    })
});

app.delete('/usuario', function(req, res) {
    res.json('DELETE Usuario')
});

module.exports = app;