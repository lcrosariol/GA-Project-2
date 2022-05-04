require('./config/database')
const Flight = require('./models/flight');
const Enroute = require('./models/enroute');

let m;
let p;

Flight.findOne({}, function(err, flight) {
  m = flight;
});
