const express = require('express');
const app = express();


app.get('/usuario', function(req, res) {
    res.json('GET Usuario LOCAL!!')
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            error: true,
            message: 'El nombre es requerido'
        })
    } else {
        res.json({
            body
        });
    }
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