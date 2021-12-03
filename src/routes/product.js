const express = require("express");
const router = express.Router();

// * controllers
const { getAllProducts } = require("../controllers/product");

router.get("/getAllProducts", getAllProducts);

module.exports = router;
