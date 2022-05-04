const Flight = require('../models/flight');
const Enroute = require('../models/enroute');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flight Plans', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate('cast')
    .exec(function(err, flight) {
      // Native MongoDB syntax
      Enroute
        .find({_id: {$nin: flight.cast}})
        .sort('name').exec(function(err, enroutes) {
          res.render('flights/show', { title: 'Flight Plan:', flight, enroutes });
        });
    });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Departure Airport:' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.fuel = !!req.body.fuel;
  // ensure empty inputs are removed so that model's default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    res.redirect(`/flights/${flight._id}`);
  });
}
