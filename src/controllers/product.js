const Category = require("../models/category");
const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  console.log("req body : ", req.body);
  Product.create({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    categoryId: req.body.categoryId,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
      // include: Category,
    });

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
