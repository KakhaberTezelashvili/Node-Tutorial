const express = require("express");
const router = express.Router();

router.use(Logger);

function Logger(res, req, next) {
  console.log("this is req: " + req);
  next();
  console.log("this is res: " + res);
}

module.exports = router;
