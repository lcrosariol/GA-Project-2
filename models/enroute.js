const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrouteSchema = new Schema({
  alt: {type: String, required: true, unique: true},
  eta: {type: String, required: true, unique: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Enroute', enrouteSchema);