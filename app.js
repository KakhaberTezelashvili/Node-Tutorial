const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("this is our first route");
});

app.listen(3000);
