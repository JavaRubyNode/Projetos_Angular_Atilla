var express = require('express');
var firebase = require('firebase');
var router = express.Router();
var Note = require('../schemas/note');

router.use('/', function (req, res, next) {
    if (req.method !== 'OPTIONS') {
        var token = req.header('X-Auth-Token');

        if (token) {
            firebase.auth().verifyIdToken(token)
                .then(function (currentUser) {
                    req.userEmail = currentUser.email;

                    next();
                }, function (err) {
                    res.status(401).send({
                        message: 'Autenticacao obrigatoria!'
                    });
                });
        } else {
            res.status(401).send({
                message: 'Autenticacao obrigatoria!'
            });
        }
    } else {
        next();
    }
});

router.post('/create', function (req, res, next) {
    var note = new Note({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        userEmail: req.userEmail
    });

    note.save(function (err, newNote) {
        if (err) {
            res.status(500).send({
                message: err
            });
        } else {
            res.status(200).json(newNote);
        }
    });
});

router.put('/update', function (req, res, next) {
    var _id = req.body._id;

    var note = new Note({
        _id: req.body._id,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        userEmail: req.body.userEmail
    });

    Note.findByIdAndUpdate(_id, note, function (err, oldNote) {
        if (err) {
            res.status(500).send({
                message: err
            });
        } else {
            res.status(200).json(oldNote);
        }
    });
});

router.get('/all', function (req, res, next) {
    var criteria = {
        userEmail: req.userEmail
    };

    Note.find(criteria, function (err, docs) {
        if (err) {
            res.status(500).send({
                message: err
            });
        } else {
            res.status(200).json(docs);
        }
    });
});

router.get('/by-id/:id', function (req, res, next) {

    var criteria = {
        _id: req.params.id,
        userEmail: req.userEmail
    };

    Note.find(criteria, function (err, doc) {
        if (err) {
            res.status(500).send({
                message: err
            });
        } else {
            if (doc && doc[0]) {
                res.status(200).json(doc[0]);
            } else {
                res.status(404).send({
                    message: 'Note não encontrada'
                });
            }

        }
    });
});

router.delete('/delete/:id', function (req, res, next) {
    var _id = req.params.id;

    Note.findByIdAndRemove(_id, function (err) {
        if (err) {
            res.status(500).send({
                message: err
            });
        } else {
            res.status(200).json({
                message: 'Excluído com sucesso!'
            });
        }
    });
});

module.exports = router;