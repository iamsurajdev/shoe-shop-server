const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
