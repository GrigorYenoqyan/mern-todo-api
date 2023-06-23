const Product = require("../models/product");

const createProduct = async (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    await newProduct.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ product: newProduct });
};

const getProducts = async (req, res, next) => {
  let products;

  try {
    products = await Product.find();
  } catch (error) {
    return res.json({ message: error });
  }

  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const updateProduct = async (req, res, next) => {
  const productId = req.params.pid;
  let product;

  try {
    product = await Product.findById(productId);
  } catch (error) {
    return next(error);
  }

  product.name = req.body.name;
  product.price = req.body.price;

  try {
    await product.save();
  } catch (error) {
    return next(error);
  }

  res.json({ product: product.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;
  let product;

  try {
    product = await Product.findByIdAndRemove(productId);
  } catch (error) {
    return next(error);
  }

  res.status(200).json({ message: "Deleted" });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
