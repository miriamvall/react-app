const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActivitySchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  organizer: {
    type: String
  },
  attendees: {
    type: String
  },
  location: {
    type: String
  }
}, {
  collection: 'activities'
})

module.exports = mongoose.model('Activity', ActivitySchema)
