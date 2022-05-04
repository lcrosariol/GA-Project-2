const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrouteSchema = new Schema({
  departure: {type: String, required: true, unique: true},
  born: {type: String, required: true, unique: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Enroute', enrouteSchema);