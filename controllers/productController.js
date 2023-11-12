const ProductsModel = require("../models/Product");

const getItems = async (req, res) => {
  const results = await ProductsModel.find({});
  return res.status(200).send(results);
};

module.exports = {
  getItems,
};
