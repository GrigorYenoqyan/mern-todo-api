const express = require("express");
const productControllers = require("../controllers/products");

const router = express.Router();

router.post("/", productControllers.createProduct);

router.get("/", productControllers.getProducts);

router.patch("/:pid", productControllers.updateProduct);

router.delete("/:pid", productControllers.deleteProduct);

module.exports = router;
