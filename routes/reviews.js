const express = require('express');
const router = express.Router();

const reviewCtrl = require('../controllers/reviews');

// http://localhost:3000/movies = movie controller
// http://localhost:3000/ = reviews controller

// http://localhost:3000/movies/6263111741a184f9cf657813
router.post('/movies/:id/reviews', reviewCtrl.create);

module.exports = router;