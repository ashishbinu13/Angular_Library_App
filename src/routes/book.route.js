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
    res.send(book);
  });
});

router.post("/add", async (req, res, next) => {
  try {
    var item = {
      title: req.body.title,
      info: req.body.info,
      author: req.body.author,
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

router.put("/:id/update", (req, res) => {
  var id = req.params.id;
  var item = {
    title: req.body.title,
    info: req.body.info,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image,
  };

  BookData.findOneAndUpdate({ _id: id }, item, null, (err, book) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Original Doc : ", book);
    }
  });
});

router.delete("/:id/delete", (req, res) => {
  var id = req.params.id;
  BookData.findByIdAndDelete({ _id: id }, (err, book) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted Book : ", book);
    }
  });
});

module.exports = router;
