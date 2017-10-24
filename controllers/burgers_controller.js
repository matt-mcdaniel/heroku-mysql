const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    burger.all(data => {
        res.render('index', {
            burgers: data
        });
    });
});

router.post('/burgers/create', (req, res) => {
    burger.add(req.body.name, data => {
        res.redirect('/');
    });
});

router.put('/burgers/update', (req, res) => {
    burger.update(req.body.id, {eaten: true}, data => {
        res.redirect('/');
    });
});

router.delete('/burgers/delete', (req, res) => {
    burger.delete(req.body.id, data => {
        res.redirect('/');
    });
});

module.exports = router;
