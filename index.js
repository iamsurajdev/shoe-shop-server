const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/utils/db");
require("dotenv").config();

// * importing modals
const Product = require("./src/models/product");
const Category = require("./src/models/category");

// * relationship between tables
Category.hasMany(Product, { as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

// * importing routes
const productRoutes = require("./src/routes/product");
const categoryRoutes = require("./src/routes/category");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// * my routes
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

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
