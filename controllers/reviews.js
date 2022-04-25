const Movie = require('../models/movie');

function create(req, res){
    console.log("calling create");
    // req.params.id means we obtain value(s) from the URL
    // req.params.body the user fill-up a form
    console.log(req.params.id);
    Movie.findById(req.params.id, function (error, movie){
        movie.reviews.push(req.body);
        movie.save(function (err){
            res.redirect(`/movies/${movie._id}`);
        })
    })
}

module.exports = {
    create
}