var express = require('express');
var router = express.Router();

// controllers = business logic
const  movieCtrl = require('../controllers/movies');

// if user visits http://localhost:3000/new
router.get('/new', movieCtrl.new);

module.exports = router;
