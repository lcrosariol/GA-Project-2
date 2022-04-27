require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');

// Movie.deleteMany({}).then(
//     function (res){
//         console.log(res);
//         process.exit();
//     }
// );

// Movie.deleteMany({})
//     .then(function(results) {
//         console.log('Deleted movies: ', results);
//         return Performer.deleteMany({});
//     })
//     .then(function(results) {
//         console.log('Deleted performers:', results);
//     })
//     .then(function() {
//         process.exit();
//     });

const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});

Promise.all([p1, p2])
    .then(function (results){
        // console.log(results);
        return Performer.create(data.performers);
    })
    .then(function (performers){
        // console.log(performers);
        return Movie.create(data.movies);
    })
    .then(function (movies){
        return Promise.all([
            Performer.findOne({name: 'Mark Hamill'}),
            Movie.findOne({title: 'Star Wars - A New Hope'})
        ]);
    })
    .then(function (results){
        const mark = results[0];
        const starWars = results[1];
        starWars.cast.push(mark); // here we need the id from MongoDB document
        return starWars.save();
    })
    .then(function (){
        process.exit();
    })
;




