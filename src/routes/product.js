const express = require("express");
const router = express.Router();

// * controllers
const { getAllProducts, createProduct } = require("../controllers/product");

router.get("/getAllProducts", getAllProducts);
router.post("/createProduct", createProduct);

module.exports = router;
