const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: "categories", // 'fathers' refers to table name
      key: "id", // 'id' refers to column name in fathers table
    },
  },
});

module.exports = Product;
