require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const errorHandler = require("./middlewares/errorHandler");
const router = require("./routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
