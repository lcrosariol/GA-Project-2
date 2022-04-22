// we need to import movie Schema, then only we can create the movie object
const Movie = require('../models/movie');

function newMovie(req, res){
    // this is a template
    // we will render when the
    // user visits
    // http://localhost:3000/movies/new
    res.render('movies/new');
}

function create(req, res){
    // here to perform the data clean up
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.trim();
    if(req.body.cast) req.body.cast.split(/\s*,\s*/);

    // we crate the movie object
    const  movie = new Movie(req.body);

    // we save the movie object to the db
    movie.save(function (error){
        if(error) return res.render('movies/new');
        console.log(movie);
        res.redirect('movies/new')
    });


}

module.exports = {
    new : newMovie,
    create
}
