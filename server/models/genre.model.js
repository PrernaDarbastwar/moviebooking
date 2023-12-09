const mongoose = require('mongoose')
export default mongoose.model("genres",mongoose.Schema({
    genreid : Number,
    genre : String
}))
