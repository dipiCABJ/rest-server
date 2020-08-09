const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('./CONFIG/cfg.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(require('./ROUTES/user.js'));

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