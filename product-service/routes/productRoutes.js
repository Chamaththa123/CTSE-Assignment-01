const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.get("/search", productController.searchProducts);
router.get("/categories", productController.getCategories);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);  
router.put("/:id", productController.updateProduct); 
router.delete("/:id", productController.deleteProduct);

module.exports = router;
