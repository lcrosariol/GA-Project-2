
const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// this auth will lock all your URLS
const isLoggedIn = require('../config/auth');

router.get('/', flightsCtrl.index);
router.get('/new', isLoggedIn, flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', isLoggedIn, flightsCtrl.create);

module.exports = router;
