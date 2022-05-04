const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/flights',
      failureRedirect : '/flights'
    }
));


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/flights');
});


module.exports = router;
