const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/product", productController.createProduct);
router.get("/product", productController.findProduct);
router.get("/product/:id", productController.findProductById);
router.put("/product/:id", productController.editProduct);
router.delete("/product/:id", productController.deleteProduct);

router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.findAllCategory);
router.get("/category/:id", categoryController.findCategoryById);
router.put("/category/:id", categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
