require('./config/database');
const Flight = require('./models/flight');
const Enroute = require('./models/enroute');
const data = require('./data');
// const { promiseImpl } = require('ejs');
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

const p1 = Flight.deleteMany({});
const p2 = Enroute.deleteMany({});

Promise.all([p1, p2])
    .then(function (results){
        // console.log(results);
        return Enroute.create(data.enroutes);
    })
    .then(function (enroutes){
        // console.log(performers);
        return Flight.create(data.flights);
    })
    .then(function (flights){
        return Promise.all([
            Enroute.findOne({name: 'Mark Hamill'}),
            Flight.findOne({title: 'Star Wars - A New Hope'})
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
    });




    // .then(function(enroutes) {
    // console.log(enroutes);
    // })
    // .then(function() {
    // console.log(data.enroutes);
    // process.exit()
    // })

