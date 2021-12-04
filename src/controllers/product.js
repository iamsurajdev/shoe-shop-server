const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  console.log("req body : ", req.body);
  Product.create({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
