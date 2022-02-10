const express = require("express");

const router = express.Router();

// gets all authors
router.get("/", (req, res) => {
  res.render("authors/index");
});

// new author route
router.get("/", (req, res) => {
  res.render("authors/new");
});

// create author route
router.post("/", (req, res) => {
  res.send("create new author");
});

module.exports = router;
