const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/movieApp")
    .then(() => {
      console.log("Connected to the Database...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
