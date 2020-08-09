const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido!']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido!']
    },
    password: {
        type: String,
        required: [true, 'La Contraseña es requerida!']
    }
});