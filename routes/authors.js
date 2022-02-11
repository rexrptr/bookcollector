const express = require("express");
const author = require("../models/author");
const Author = require("../models/author");

const router = express.Router();

// gets all authors
router.get("/", (req, res) => {
  res.render("authors/index");
});

// new author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// create author route
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  author.save((err, newAutor) => {
    if (err) {
      res.render("authors/new"), { author: author, errorMessage: "error" };
    } else {
      res.redirect("authors");
      // res.redirect(`authors/${newAudthor.id}`)
    }
  });
});

module.exports = router;
