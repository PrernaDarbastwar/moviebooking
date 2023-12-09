
const userModel = require('./user.model')
const movieModel = require('./movie.model')
const artistModel = require('./artist.model')
const genreModel = require('./genre.model').default

module.exports = {
    User : userModel,
    Movie : movieModel,
    Genre : genreModel,
    Artist : artistModel,
}
