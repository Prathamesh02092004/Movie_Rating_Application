const movieModel = require("../models/movie");

const showMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    return res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error while fetching the movies..");
  }
};

const showMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await movieModel.findById(id);

    if (!movie) {
      return res.status(404).send("Cannot find the movie");
    }

    return res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error while fetching the movie..");
  }
};

const createMovie = async (req, res) => {
  try {
    const { name, imageUrl, rating, cast, genre, description } = req.body;

    const existingMovie = await movieModel.findOne({ name });

    if (existingMovie) {
      return res.status(400).send("Movie already exists..");
    }

    await movieModel.create({
      name,
      imageUrl,
      rating,
      cast,
      genre,
      description,
    });

    return res.status(201).send("Movie created..");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error while creating the movie..");
  }
};

const editMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const updateMovie = req.body;

    const movie = await movieModel.findByIdAndUpdate(
      id,
      updateMovie,
      { new: true } // returns updated document
    );

    if (!movie) {
      return res.status(404).send("Movie update failed..");
    }

    return res.status(200).send("Movie updated..");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error while updating the movie..");
  }
};

const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await movieModel.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).send("Movie not found..");
    }

    return res.status(200).send("Movie deleted..");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Movie deletion failed..");
  }
};

module.exports = {
  createMovie,
  editMovie,
  deleteMovie,
  showMovie,
  showMovies,
};
