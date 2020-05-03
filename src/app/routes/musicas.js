const express = require('express');
const router = express.Router();
const db = require('../db/database');
const Musicas = () => db('musicas')

router.get('/', (req, res, next) => {
    Musicas().then((musicas) => {
        res.render('index', { musicas: musicas });
    }, next);

});

router.get('/add', (req, res, next) => {
    res.render('add');
});

router.post('/', (req, res, next) => {
    Musicas().insert(req.body).then((ids) => {
        res.redirect('/');
    }, next);
});

router.get('/edit/:id', (req, res, next) => {
    const {id} = req.params;
    
    Musicas().where('id', id).first().then((musica) => {
        if (!musica) {
            return res.send(404);
        }

        res.render('edit', {
            musica: musica
        });
    }, next);
});

router.put('/edit/:id', (req, res, next) => {
    const {id} = req.params;
    
    Musicas().where('id', id).update(req.body).then((result) => {
        console.log('chegou ' + result);
        if (result === 0) {
            return res.send(400);
        }

        res.redirect('/');
    }, next);
});

router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params;

    Musicas().where('id', id).delete().then((result) => {
        if (result === 0) {
            return res.send(400)
        }

        res.redirect('/');
    }, next);
});

module.exports = router;