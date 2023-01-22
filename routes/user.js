const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Fetching user with id: ${req.params.id} !`);
  })
  .delete((req, res) => {
    res.send(`Deleting user with id: ${req.params.id} !`);
  })
  .put((req, res) => {
    res.send(`Updating user with id: ${req.params.id}`);
  });

router
  .route("/")
  .get((req, res) => {
    res.send("and another response");
  })
  .post((req, res) => {
    res.json({ FirstName: req.body.firstName, LastName: req.body.lastName });
  });

module.exports = router;
