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
  res.send(req.body.name);
});

module.exports = router;
