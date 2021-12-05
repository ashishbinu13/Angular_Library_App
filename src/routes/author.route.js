const express = require("express");

const AuthorData = require("../models/author.model");

const router = express.Router();

router.get("/", (req, res) => {
  AuthorData.find().then((authors) => {
    res.send(authors);
  });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;

  AuthorData.findOne({ _id: id }).then((author) => {
    res.send(author);
  });
});

router.post("/add", async (req, res, next) => {
  try {
    var item = {
      author: req.body.author,
      info: req.body.info,
      country: req.body.country,
      language: req.body.language,
      image: req.body.image,
    };
    var author = AuthorData(item);
    author.save();
    res.send(author);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/update", (req, res) => {
  var id = req.params.id;
  var item = {
    author: req.body.author,
    info: req.body.info,
    country: req.body.country,
    language: req.body.language,
    image: req.body.image,
  };

  AuthorData.findOneAndUpdate({ _id: id }, item, null, (err, author) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Original Doc : ", author);
    }
  });
});

router.delete("/:id/delete", (req, res) => {
  var id = req.params.id;
  AuthorData.findByIdAndDelete({ _id: id }, (err, author) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted Book : ", author);
    }
  });
});

module.exports = router;
