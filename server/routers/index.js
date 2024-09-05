const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/product", productController.createProduct);
router.get("/product", productController.findProduct);
router.get("/product/:id", productController.findProductById);
router.put("/product/:id", productController.editProduct);
router.delete("/product/:id", productController.deleteProduct);

router.get("/", productController.getProductPub);

module.exports = router;
