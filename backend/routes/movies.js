const express = require("express");
const router = express.Router();
const movies = require("../movies.json");

router.get("/", (req, res, next) => {
  res.send(movies);
});

router.get("/:id", (req, res, nex) => {
  const id = parseInt(req.params.id, 10);
  const movie = movies.filter(movie => {
    return movie.id === id;
  });
  res.send(movie);
});

module.exports = router;
