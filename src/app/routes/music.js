#!/usr/bin/env node

const express = require('express');
const router = express.Router();
const { db, connectionTest } = require('../db/database');
const Musicas = () => db('musicas');

router.get('/status/check', (_req, res, next) => {
    connectionTest().then(status => {
        const [ statusCode, statusMessage ] = status ? [ 200, 'OK' ] : [ 400, 'ERROR' ]; 
        res.status(statusCode).send('Database status: ' + statusMessage);
    }, next);
});

router.get('/', (req, res, next) => {
    Musicas().then((musicas) => {
        res.render('index', { musicas: musicas, username: req.session.username });
    }, next);
});

router.get('/add', (_req, res, _next) => {
    res.render('add');
});

router.post('/', (req, res, next) => {
    Musicas().insert(req.body).then((_ids) => {
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