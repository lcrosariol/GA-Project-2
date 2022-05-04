const Enroute = require('../models/enroute');
const Flight = require('../models/flight');

module.exports = {
  new: newEnroute,
  create,
  addToCast
};

function addToCast(req, res) {
  // Obtain the flight
  Flight.findById(req.params.flightId, function(err, flight) {
    // Push the _id of the enroute into the flight's cast array
    flight.cast.push(req.body.enrouteId);
    // Save the flight
    flight.save(function(err) {
      // Redirect back to the flight show route
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // const s = req.body.arrival;
  // req.body.arrival = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Enroute.create(req.body, function (err, enroute) {
    res.redirect('/enroutes/new');
  });
}

function newEnroute(req, res) {
  Enroute
    .find({})
    .sort('name')
    .exec(function (err, enroutes) {
      res.render('enroutes/new', {
        title: 'Add Enroute/Alternate',
        enroutes
      });
  });
}