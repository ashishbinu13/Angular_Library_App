const express = require("express");
const path = require("path");
const cors = require("cors");
const createError = require("http-errors");
const morgan = require("morgan");

require("dotenv").config();
require("./helpers/init_mongodb");
const BookRoute = require("./src/routes/book.route");
const AuthRoute = require("./src/routes/auth.route");
const AuthorRoute = require("./src/routes/author.route");
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.static("./dist/Frontend"));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", AuthRoute);
app.use("/api/books", BookRoute);
app.use("/api/authors", AuthorRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: err.status || 500,
    message: err.message,
  });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/Frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
