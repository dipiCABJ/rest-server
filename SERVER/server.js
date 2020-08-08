const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./CONFIG/cfg.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('GET Usuario')
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

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el Puerto: ', process.env.PORT);
})