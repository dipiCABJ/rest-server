const express = require('express');
const User = require('../MODELS/user');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();


app.get('/usuario', function(req, res) {

    let from = req.query.from || 0;
    let limit = req.query.limit || 5;
    from = Number(from);
    limit = Number(limit);


    User.find({})
        .skip(from)
        .limit(limit)
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                users
            });
        })
        //res.json('GET Usuario LOCAL!!')
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
    let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);


    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        })

    });
});

app.delete('/usuario', function(req, res) {
    res.json('DELETE Usuario')
});

module.exports = app;