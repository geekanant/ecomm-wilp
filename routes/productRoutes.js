const express = require("express");

const router = express.Router();

const { getItems } = require("../controllers/productController");

router.get("/products", getItems);

module.exports = router;
