
const express = require('express');
//require modules
const router = express.Router();
//create the express router

//this is where i will mount middleware (server.use)

// const metarCtrl = require('../controllers/metar');

// this auth will lock all your URLS
// const isLoggedIn = require('../config/auth');



router.get('/', function(req, res, next) {
    res.render('metar');
});
// mount the route, render to metar page




express.get('https://api.checkwx.com/metar/?x-api-key=a215ac405b3f45758cef616efc').then(resp => {
  console.log(resp.data);
});

// const options = {
//     headers: {'X-API-Key': 'a215ac405b3f45758cef616efc'}
// };

// router.get('/', metarCtrl.index);
// router.get('/new', isLoggedIn, metarCtrl.new);
// router.get('/:id', metarCtrl.show);
// router.post('/', isLoggedIn, metarCtrl.create);


module.exports = router;

