const morgan = require("morgan");
const express = require("express");
const itemRouter = require("./routes/itemRoutes");

const app = express();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Routes
app.use("/api/v1/orders", itemRouter);

module.exports = app;
