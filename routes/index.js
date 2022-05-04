const express = require('express');
const router = express.Router();
const passport = require('passport');

// Using async/await
// const userData = await fetch(`${rootURL}users/${username}`, options).then(res => res.json());
// userData.repos = await fetch(userData.repos_url, options).then(res => res.json());
// res.render('index', { userData });



// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const token = process.env.x-api-key;
// const rootURL = "https://api.checkwx.com/station/";



// router.get("/", function (req, res, next) {
//   const username = req.query.username;
//   // If this is not a "search", just render the new view
//   if (!username) return res.render("index", { userData: null });
//   // For now, we'll pass the token in a querystring
//   const options = {
//     headers: {
//       Authorization: `token ${token}`,
//     },
//   };
//   let userData;
//   fetch(`${rootURL}users/${username}`, options)
//     .then((res) => res.json())
//     .then((user) => {
//       userData = user;
//       // return the promise to be handled by the next .then
//       return fetch(user.repos_url, options);
//     })
//     .then((res) => res.json())
//     .then((repos) => {
//       // let's see what properties a repo has...
//       console.log(repos[0]);
//       // add a repos property to userData that we are passing to be rendered
//       userData.repos = repos;
//       res.render("index", { userData });
//     });
// });
















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