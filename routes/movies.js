var express = require('express');
var router = express.Router();

// controllers = business logic
const  movieCtrl = require('../controllers/movies');

// if user visits http://localhost:3000/movies/new
router.get('/new', movieCtrl.new);

// to process new movie form data
// means, we need to send the data to the server
// using POST method

router.post('/', movieCtrl.create);

// http://localhost:3000/movies/index
router.get('/', movieCtrl.index);

module.exports = router;