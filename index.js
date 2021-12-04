const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/utils/db");
require("dotenv").config();

// * importing modals
const Product = require("./src/models/product");

// * importing routes
const productRoutes = require("./src/routes/product");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// * my routes
app.use("/api", productRoutes);

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
