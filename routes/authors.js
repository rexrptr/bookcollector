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
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.redirect("authors");
    // res.redirect(`authors/${newAuthor.id}`)
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "error creating author",
    });
  }
});

module.exports = router;
