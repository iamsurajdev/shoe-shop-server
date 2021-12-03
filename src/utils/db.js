const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "shoe_shop",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST_NAME,
  }
);

module.exports = sequelize;
