const express = require("express");
const sequelize = require("./src/utils/db");
require("dotenv").config();

// * importing modals
const Product = require("./src/models/product");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World! lol");
});

sequelize
  .sync()
  .then((result) => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
