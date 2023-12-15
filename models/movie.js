const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  director: {
    type: String, 
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genres: {
    type: [String],
    required: false
  },
  rating: {
    type: Number, 
    required: false
  },
  duration: {
    hours: Number,
    minutes: Number
  },
  reviews: [
    {
      name: String,
      text: String
    }
  ]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
