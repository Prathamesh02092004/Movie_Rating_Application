const mongoose = require("mongoose");

const movieSchema = 
  new mongoose.Schema({
    name: String,
    imageUrl:String,
    rating: Number,
    cast: String,
    genre: String,
    description: String,
  });

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
