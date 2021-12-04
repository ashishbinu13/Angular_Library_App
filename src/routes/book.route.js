const express = require("express");

const BookData = require("../models/book.model");

const router = express.Router();

router.get("/", (req, res) => {
  BookData.find().then((books) => {
    res.send(books);
  });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;

  BookData.findOne({ _id: id }).then((book) => {
    res.render(book);
  });
});

router.post("/add", async (req, res, next) => {
  try {
    console.log(req.body);
    var item = {
      title: req.body.title,
      info: req.body.info,
      author: req.body.info,
      genre: req.body.genre,
      image: req.body.image,
    };
    var book = BookData(item);
    book.save();
    res.send(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
