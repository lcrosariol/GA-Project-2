const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const flightSchema = new Schema({
  departure: {
    type: String,
    required: true
  },
  arrival: {
    type: String,
    required: true
    // default: function () {
    //   return new Date().getFullYear();
    // }
  },
  vfrifr: String,
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'enroute'
  }],
  fuel: { type: Boolean, default: false },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);