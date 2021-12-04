const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  author: String,
  info: String,
  country: String,
  language: String,
  period: String,
  image: String,
});

var authorData = mongoose.model("authordata", authorSchema);

module.exports = authorData;
