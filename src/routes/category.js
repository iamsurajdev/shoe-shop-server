const express = require("express");
const router = express.Router();

// * controllers
const { getAllCategories, createCategory } = require("../controllers/category");

router.get("/getAllCategories", getAllCategories);
router.post("/createCategory", createCategory);

module.exports = router;
