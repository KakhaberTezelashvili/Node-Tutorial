const express = require("express");
const app = express();

// setup logger
const logger = require("./logger");
app.use(logger);

// configure pipeline
app.use(express.static("public"));
app.use(express.json());

// import routes
const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server listening on port: 3000"));
