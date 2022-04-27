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
        console.log(results);
    })
    .then(function (){
        process.exit();
    })
;






