const mongoose = require("mongoose");

const ProductsModel = mongoose.model("products", {
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = ProductsModel;
