// we need to import movie Schema, then only we can create the movie object
const Movie = require('../models/movie');


function index(req, res){
    // http://localhost:3000/movies/index
    // find({}) means find everything
    // https://mongoosejs.com/docs/api.html#model_Model.find
    Movie.find({}, function (err, movies){
        res.render('movies/index',{
            movies
        })
    });
}

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
        // if we save the movie object then return the user
        // to the index page
        res.redirect('/movies')
    });
}

module.exports = {
    new : newMovie,
    create,
    index
}
