const Product = require("../models/product");

const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://grigor:YGJEQR41dHSN77y5@cluster0.zuo9uoe.mongodb.net/test?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    await newProduct.save();
    // const client = new MongoClient(url);
  } catch (error) {
    return next(error);
  }

  //   client.close();
  res.status(201).json({ product: newProduct });
};

const getProducts = async (req, res, next) => {
  //   const client = new MongoClient(url);

  //   let products;

  //   try {
  //     await client.connect();
  //     const db = client.db();
  //     products = await db.collection("products").find().toArray();
  //   } catch (error) {
  //     return res.json({ message: error });
  //   }

  //   client.close();
  //   res.json(products);

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

  // console.log({product})
  //     try {
  //         await product.schema;
  //     } catch(error) {
  //         return next(error);
  //     }

  res.status(200).json({ message: "Deleted" });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
