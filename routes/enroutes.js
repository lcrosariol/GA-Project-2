const express = require('express');
const router = express.Router();
const enroutesCtrl = require('../controllers/enroutes');
// const isLoggedIn = require('../config/auth');

router.get('/enroutes/new', enroutesCtrl.new);
router.post('/enroutes', enroutesCtrl.create);
router.post('/flights/:flightId/enroutes', enroutesCtrl.addToCast);

module.exports = router;