const Flight = require('../models/flight');

module.exports = {
  create,
  delete : deleteReview
};

function create(req, res) {
  // Find the flight to embed the review within
  Flight.findById(req.params.id, function(err, flight) {

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Push the subdoc for the review
    flight.reviews.push(req.body);
    // Always save the top-level document (not subdocs)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Flight.findOne({'reviews._id': req.params.id}).then(function(flight) {
    // Find the review subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const review = flight.reviews.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!review.user.equals(req.user._id)) return res.redirect(`/flights/${flight._id}`);
    // Remove the review using the remove method of the subdoc
    review.remove();
    // Save the updated flight
    flight.save().then(function() {
      // Redirect back to the flight's show view
      res.redirect(`/flights/${flight._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/flights/${flight._id}`);
    });
  });
}