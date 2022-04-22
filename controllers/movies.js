function newMovie(req, res){
    // this is a template
    // we will render when the
    // user visits
    // http://localhost:3000/new
    res.render('movies/new');
}

module.exports = {
    new : newMovie
}
