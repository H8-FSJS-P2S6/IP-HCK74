require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();

const errorHandler = require("./middlewares/errorHandler");
const router = require("./routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  req.status(200).json({
    message: "test",
  });
});

app.use("/", router);

app.use(errorHandler);

module.exports = app;
