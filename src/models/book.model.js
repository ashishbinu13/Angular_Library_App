const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: String,
  info: String,
  author: String,
  genre: String,
  image: String,
});

var bookData = mongoose.model("bookdata", bookSchema);

module.exports = bookData;
