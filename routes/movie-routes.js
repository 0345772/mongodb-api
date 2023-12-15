const express = require('express')
const Movie = require('../models/movie')
const {
  getMovies,
  getMovie, 
  deleteMovie,
  addMovie,
  updateMovie
} = require('../controllers/movie-controller')

const router = express.Router()

router.get('/movies', getMovies(req, res))

router.get('/movies/:id', getMovie(req, res))

router.delete('/movies/:id', deleteMovie(req, res))

router.post('/movies', addMovie(req, res))

router.patch("/movies/:id", updateMovie(req, res))

module.exports = router;


