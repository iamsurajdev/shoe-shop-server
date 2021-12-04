const Category = require("../models/category");

exports.createCategory = (req, res, next) => {
  console.log("req body : ", req.body);
  Category.create({
    title: req.body.title,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllCategories = (req, res, next) => {
  Category.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
