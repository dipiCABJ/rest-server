const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('./CONFIG/cfg.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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

//mongoose.connect('mongodb://localhost:27017/MetallicACoffe', (err, res) => {
//    if (err) throw err;
//    console.log('Base de datos OnLine!!');
//});

mongoose.connect('mongodb://localhost:27017/MetallicACoffe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log('Base de datos OnLine!!');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el Puerto: ', process.env.PORT);
})